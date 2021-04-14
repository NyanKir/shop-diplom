const express = require('express')
const router = express.Router({ mergeParams: true })
const mongoose = require('mongoose')
const Product = require('../models/product.model')

router.post('/product', function (req, res) {
  const product = new Product(req.body)
  product.save()
  res.status(201).end()
})

router.get('/products', async function (req, res) {
  const data = (await Product.find({}).exec()).map((el) => {
    return {
      _id: el._id,
      title: el.title,
      sale: el.sale,
      price: el.price,
      gallery: el.gallery,
      rating: el.review[0].rating
    }
  })
  res.json(data).end()
})

router.get('/product', async function (req, res) {
  const data = (await Product.find({ _id: mongoose.Types.ObjectId(req.query.id) }).exec())
  res.json(data).end()
})
module.exports = router
