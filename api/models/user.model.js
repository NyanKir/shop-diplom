const { Schema, model } = require('mongoose')

const user = new Schema({
  gender: String,
  firstName: String,
  lastName: String,
  email: String,
  birthDate: String,
  password: String,
  isAdmin: Boolean
})
module.exports = model('User', user)
