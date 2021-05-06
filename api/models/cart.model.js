const { Schema, model } = require('mongoose')

const cartModel = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  cart: [
    {
      id:
        {
          type: Schema.Types.ObjectId,
          ref: 'Product'
        },
      options: Object,
      count: Number
    }
  ]
})
module.exports = model('Cart', cartModel)
