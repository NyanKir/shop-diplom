const express = require('express')
const router = express.Router()

// user
router.post('/user', function (req, res) {
  console.log('Hey', req.body)
  res.send('Hey').end()
})

module.exports = router
