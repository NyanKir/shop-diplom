const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Order = require('../models/order.model')
const Product = require('../models/product.model')

router.post('/order', function (req, res) {
  const data = {
    userId: req.body.address._id,
    address: req.body.address.address,
    description: req.body.description,
    cart: req.body.cart,
    price: req.body.price
  }

  const order = new Order(data)
  order.save().then(r => r).catch(e => console.log(e))
  res.status(200).end()
})

router.get('/orders', async function (req, res) {
  const orders = await Order.find({ userId: mongoose.Types.ObjectId(req.query.id) })
  res.status(200).json({ data: orders }).end()
})
router.get('/order', async function (req, res) {
  const order = await Order.find({ _id: mongoose.Types.ObjectId(req.query.id) })
  const products = (await Product.find({ _id: { $in: order[0].cart.map(el => mongoose.Types.ObjectId(el.id)) } }).exec())
  res.status(200).json({ order, products }).end()
})

module.exports = router
