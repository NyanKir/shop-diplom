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
  if (req.query.all) {
    const data = await Product.find({})
    return res.status(200).json({ data }).end()
  }
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
  if (Array.isArray(req.query.id)) {
    const ids = req.query.id.map(el => mongoose.Types.ObjectId(JSON.parse(el).id))
    const data = (await Product.find({ _id: { $in: ids } }).exec())
    return res.status(201).json(data).end()
  }

  const data = (await Product.find({ _id: mongoose.Types.ObjectId(req.query.id) }).exec())
  res.json(data).end()
})

router.get('/maxPrice', async function (req, res) {
  const doc = await Product.aggregate([
    {
      $match: {
        $expr: { $in: [decodeURI(req.query.select).toLowerCase(), '$categories'] }
      }
    },
    {
      $group: {
        _id: null,
        maxPrice: { $max: '$price' }
      }
    }
  ])
  res.status(200).json({ price: doc[0].maxPrice }).end()
})

router.get('/categories', async function (req, res) {
  const doc = await Product.aggregate([
    {
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
