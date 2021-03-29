const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')

router.post('/user', [
  check('firstName').not().isEmpty().trim().escape().isLength({ min: 2, max: 24 }),
  check('lastName').not().isEmpty().trim().escape().isLength({ min: 2, max: 24 }),
  check('birthDate').not().isEmpty().trim().isLength({ min: 10, max: 10 }),
  check('email').isEmail().normalizeEmail().custom(async (value) => {
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
    return res.status(400).json({ errors: errors.array() })
  }
  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(req.body.password, salt)

  const dataUser = req.body
  dataUser.password = hashPassword
  const user = new User(dataUser)
  user.save().then(r => r)

  res.status(201).end()
})

router.post('/signin', [
  check('email').isEmail().normalizeEmail(),
  check('password').isLength({ min: 5, max: 24 }).matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/).withMessage('Password should contain at least one uppercase, lowercase and one special character')
],
async function (req, res) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  const data = req.body
  const user = await User.find({ email: data.email }).exec()

  if (user.length <= 0) {
    res.status(400).send('This email does`t exists')
  }

  const result = bcrypt.compareSync(data.password, user[0].password)

  if (!result) {
    res.status(400).send('This password is incorrect')
  }

  const token = jwt.sign({ userID: user[0]._id }, process.env.JWTKEY, { expiresIn: '1h' })
  res.status(200).json({ token }).end()
})
module.exports = router
