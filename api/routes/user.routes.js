const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('../models/user.model')

router.post('/user', [
  check('firstName').not().isEmpty().trim().escape().isLength({ min: 2, max: 24 }),
  check('lastName').not().isEmpty().trim().escape().isLength({ min: 2, max: 24 }),
  check('email').isEmail().normalizeEmail({ gmail_remove_dots: false }).custom(async (value) => {
    const user = await User.findOne({ email: value }).exec()
    if (user) {
      throw new Error('This is email exist')
    }
    return true
  }),
  check('password').isLength({ min: 5, max: 24 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('Password should contain at least one uppercase, lowercase and one special character')
],
function (req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array()[0] })
  }
  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(req.body.password, salt)

  const dataUser = req.body
  dataUser.password = hashPassword
  const user = new User(dataUser)
  user.save().then(r => r)

  res.status(201).end()
})

router.post('/signin', async function (req, res) {
  const data = req.body
  const user = await User.find({ email: data.email }).exec()

  if (user.length <= 0) {
    return res.status(400).json({ msg: 'This email does`t exists', type: 'email' })
  }

  const result = bcrypt.compareSync(data.password, user[0].password)

  if (!result) {
    return res.status(400).json({ msg: 'This password is incorrect', type: 'password' })
  }

  const token = jwt.sign({ userID: user[0]._id }, process.env.JWTKEY, { expiresIn: '1h' })

  res.cookie('jwt', token, { maxAge: 1000 * 60 * 60, httpOnly: true })

  res.status(200).end()
})

router.post('/isauth', async function (req, res) {
  if (req.cookies.jwt) {
    try {
      const decode = jwt.verify(req.cookies.jwt, process.env.JWTKEY).userID

      const count = await User.countDocuments({ _id: mongoose.Types.ObjectId(decode) })
      const user = await User.find({ _id: mongoose.Types.ObjectId(decode) })
      if (count === 1) {
        return res.status(200).json({ id: user[0]._id }).end()
      }
      return res.status(404).end()
    } catch (err) {
      res.cookie('jwt', '', { maxAge: 0 })
      return res.status(500).json({ errors: err.message })
    }
  }
  res.status(404).end()
})

router.post('/logout', function (req, res) {
  res.cookie('jwt', '', { maxAge: 0 })
  res.status(200).end()
})
module.exports = router
