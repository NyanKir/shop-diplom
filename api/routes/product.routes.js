const express = require('express')
const router = express.Router({ mergeParams: true })
const mongoose = require('mongoose')
const Product = require('../models/product.model')

router.post('/product', function (req, res) {
  const product = new Product(req.body)
  product.save()
  res.status(201).end()
})

router.get('/products', async function (req, res) {
  console.log('herre')
  let sort = { _id: 1 }
  const typeSort = JSON.parse(req.query.query).sort
  if (typeSort) {
    switch (typeSort) {
      case 'high':
        sort = { totalScore: 1 }
        break
      case 'low':
        sort = { totalScore: -1 }
        break
    }
  }
  const doc = await Product.aggregate([
    {
      $match: {
        $expr: {
          $in: [decodeURI(req.query.select).toLowerCase(), '$categories']
        },
        price: { $gt: 0, $lte: +JSON.parse(req.query.query).price || 100000000 }
      }
    },
    {
      $addFields: {
        totalScore: { discountPrice: { $ifNull: ['$discountPrice', '$price'] } }.discountPrice
      }
    },
    {
      $project: {
        _id: 1,
        title: 1,
        discountPrice: 1,
        price: 1,
        gallery: 1,
        review: 1,
        totalScore: 1
      }
    }]).sort(sort)
  res.json(doc).end()
})

router.get('/product', async function (req, res) {
  const data = (await Product.find({ _id: mongoose.Types.ObjectId(req.query.id) }).exec())
  res.json(data).end()
})

router.get('/getMaxPrice', async function (req, res) {
  // maxPrice: { $max: '$price' },
  console.log('hey')
  const maxPrice = await Product.find({}).sort({ price: -1 }).limit(1)
  res.status(200).json({ price: maxPrice[0].price }).end()
})

router.get('/getCategories', async function (req, res) {
  const doc = await Product.aggregate([{
    $match: {
      $expr: { $in: [decodeURI(req.query.select).toLowerCase(), '$categories'] }
    }
  },
  {
    $group: {
      _id: null,
      allFilters: { $push: { item: '$filters' } }
    }
  }
  ])
  doc[0].allFilters = doc[0].allFilters.map((el) => {
    return { ...el.item }
  })
  res.status(200).json(doc[0]).end()
})
module.exports = router
