const { Schema, model } = require('mongoose')

const productModel = new Schema({
  title: { type: String, required: true, trim: true },
  price: { type: Number, required: true },
  sale: { type: Number, required: true },
  description: { type: String, required: true, trim: true },
  size: { type: [String] },
  color: { type: [String] },
  review: [{
    rating: [String],
    reviewFrom: [String]
  }]
})
module.exports = model('Product', productModel)
