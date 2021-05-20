const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const app = express()
app.use(express.json({ extended: true }))
app.use(cookieParser())

app.use(require('./routes/user.routes'))
app.use(require('./routes/product.routes'))
app.use(require('./routes/order.routes'))
app.use(require('./routes/blog.routes'))

module.exports = app

const port = process.env.PORT
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
