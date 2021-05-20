const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Blog = require('../models/blog.model')

router.post('/blog', function (req, res) {
  const blog = new Blog(req.body)
  blog.save()
  res.status(200).end()
})
router.get('/blogs', async function (req, res) {
  const blog = await Blog.find({})
  res.status(200).json({ blog }).end()
})
router.patch('/blog', async function (req, res) {
  const data = req.body
  const _id = mongoose.Types.ObjectId(req.body._id)
  delete data._id
  console.log(data)
  await Blog.findOneAndUpdate({ _id }, { $set: data })

  res.status(200).end()
})
module.exports = router
