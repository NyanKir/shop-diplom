const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
app.use(express.json({ extended: true }))
app.use(require('./routes/user.routes'))

const port = process.env.PORT || 3002

module.exports = app

async function start () {
  await mongoose.connect(`mongodb+srv://diplom:${process.env.DB_PASS}@cluster.sksna.mongodb.net/shop-diplom?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).catch(err => console.error(err))

  if (require.main === module) {
    app.listen(port, () => {
      console.info(`API server listening on port ${port}`)
    })
  }
  console.info(mongoose.connection.readyState ? 'Database was connected' : "Database didn't connected")
}

start()
