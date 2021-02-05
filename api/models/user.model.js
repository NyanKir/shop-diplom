const { Schema, model } = require('mongoose')

const user = new Schema({
  gender: String,
  firstName: String,
  lastname: String,
  email: String,
  birthDate: String,
  password: String
})
module.exports = model('User', user)
