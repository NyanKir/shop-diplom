const { Schema, model } = require('mongoose')

const user = new Schema({
  gender: String,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: String,
  password: String,
  isAdmin: { type: Boolean, default: false },
  address: {
    city: { type: String, default: '' },
    country: { type: String, default: 'Kazahstan' },
    state: { type: String, default: '' },
    code: { type: String, default: '' }
  }
})
module.exports = model('User', user)
