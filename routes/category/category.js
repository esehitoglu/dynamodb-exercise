const express = require('express')
const router = express.Router()
const productController = require('../../controller/Product')

router.post('/',productController.add)
router.get('/',productController.fetchAll)
router.get('/:id',productController.single)
router.put('/',productController.update)
router.delete('/:id',productController.delete)

module.exports = router