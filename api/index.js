const express = require('express')
const firebase = require('firebase/app')

// Add the Firebase products that you want to use
require('firebase/database')
// Create express instance
const app = express()

// // Require API routes
// const users = require('./routes/users')
// const test = require('./routes/test')
//
// // Import API Routes
// app.use(users)
// app.use(test)

// Export express app
module.exports = app

const firebaseConfig = {
  apiKey: 'AIzaSyCiuJq_Yij8J53xtrbiQy_Ao9RSHSBa7sU',
  authDomain: 'fir-shop-3bc0a.firebaseapp.com',
  projectId: 'fir-shop-3bc0a',
  storageBucket: 'fir-shop-3bc0a.appspot.com',
  messagingSenderId: '1003838397006',
  appId: '1:1003838397006:web:0d89296947a41dcf37c11f',
  measurementId: 'G-VFW8L3G3M0'
}
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001

  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
