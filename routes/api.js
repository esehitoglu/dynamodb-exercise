const express = require('express')
const router = express.Router()
const productEndPoint = require('./category/category')

router.use('/products',productEndPoint)

module.exports = router
