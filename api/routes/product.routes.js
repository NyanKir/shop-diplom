const express = require('express')
const router = express.Router()
const Product = require('../models/product.model')

router.post('/product', function (req, res) {
  const product = new Product(req.body)
  product.save()
  res.status(201).end()
})

router.get('/product', function (req, res) {
  res.end()
})
module.exports = router
