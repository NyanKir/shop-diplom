const { Schema, model } = require('mongoose')

const orderModel = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: [
    {
      options: Object,
      count: Number,
      id: Schema.Types.ObjectId
    }
  ],
  status: { pending: { type: Date, default: Date.now } },
  address: {
    city: String,
    country: String,
    state: String,
    code: String
  },
  description: String,
  price: Number,
  shipping: { type: Number, default: 7.00 },
  date: {
    type: Date,
    default: Date.now
  }
})
module.exports = model('Order', orderModel)
