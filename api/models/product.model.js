const { Schema, model } = require('mongoose')

const productModel = new Schema({
  title: { type: String, required: true, trim: true },
  gallery: { type: [String], required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  description: { type: String, required: true, trim: true },
  filters: Object,
  review: [{
    rating: Number,
    reviewFrom: String,
    description: String
  }],
  categories: [String]
})
module.exports = model('Product', productModel)
