const express = require('express')
const router = express.Router()
// const mongoose = require('mongoose')
const Order = require('../models/order.model')

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

module.exports = router
