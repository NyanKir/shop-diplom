const express = require('express')
// const mongoose = require('mongoose')
// Create express instance
const app = express()
app.use(express.json({ extended: true }))

// Import API Routes
app.use(require('./routes/user.routes'))

// Export express app
module.exports = app

if (require.main === module) {
  const port = process.env.PORT || 3001

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

// const connectDb = async () => {
//   await mongoose.connect('mongodb://localhost/my_database', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true
//   })
// }
// console.log('Error')
// connectDb()
//   .on('error', console.log('Error'))
//   .on('disconnected', connectDb)
//   .once('open', startServer)
