const { Schema, model } = require('mongoose')

const productModel = new Schema({
  title: { type: String, required: true, trim: true },
  image: { type: String, required: true },
  gallery: [String],
  price: { type: Number, required: true },
  sale: { type: Number, required: true },
  description: { type: String, required: true, trim: true },
  size: [String],
  color: [String],
  review: [{
    rating: Number,
    reviewFrom: String,
    description: String
  }],
  categories: [String]
})
module.exports = model('Product', productModel)
