const { Schema, model } = require('mongoose')

const orderModel = new Schema({
  title: String,
  description: String,
  picture: String,
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('Blog', orderModel)
