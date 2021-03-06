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
  const query = JSON.parse(req.query.query)
  if (query.sort) {
    switch (query.sort) {
      case 'high':
        sort = { totalScore: 1 }
        break
      case 'low':
        sort = { totalScore: -1 }
        break
    }
  }

  const sortedQuery = Object.keys(query).reduce((acc, el) => {
    if (!['price', 'page', 'sort'].includes(el)) {
      return Object.assign(acc, { [el]: query[el] })
    }
    return acc
  }, {})

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
        totalScore: 1,
        filters: 1
      }
    }]).sort(sort)

  const data = doc.filter((el) => {
    return Object.keys(sortedQuery).every((key) => {
      if (el.filters[key]) {
        if (typeof sortedQuery[key] === 'string') {
          return !!el.filters[key][sortedQuery[key]]
        }
        return sortedQuery[key].every((k) => {
          return !!el.filters[key][k]
        })
      }
      return false
    })
  })

  res.json(data).end()
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
  try {
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
  } catch (e) {
    res.status(500).end()
  }
})

router.get('/categories', async function (req, res) {
  try {
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
  } catch (e) {
    res.status(500).end()
  }
})

router.delete('/product', async function (req, res) {
  try {
    await Product.findOneAndRemove({ _id: mongoose.Types.ObjectId(req.query.id) })
    res.status(200).end()
  } catch (e) {
    res.status(500).end()
  }
})

router.patch('/product', async function (req, res) {
  try {
    const data = req.body
    const _id = mongoose.Types.ObjectId(req.body._id)
    delete data._id
    await Product.findOneAndUpdate({ _id }, { $set: data })
    res.status(200).end()
  } catch (e) {
    res.status(500).end()
  }
})

router.post('/product/review', async function (req, res) {
  try {
    const data = req.body
    const _id = mongoose.Types.ObjectId(req.body.id)
    delete data.id
    data.reviewFrom = mongoose.Types.ObjectId(req.body.reviewFrom)
    await Product.findOneAndUpdate({ _id }, { $push: { review: data } })
    res.status(200).end()
  } catch (e) {
    res.status(500).end()
  }
})

module.exports = router
