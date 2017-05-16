const express = require('express')
const router = express.Router()
const houseController = require('../controllers/houseController')

router.get('/api/houses', houseController.getAll)
router.post('/api/houses', houseController.insertOne)
router.get('/api/house/:id', houseController.getById)
router.put('/api/house/:id', houseController.updateById)
router.delete('/api/house/:id', houseController.deleteById)

module.exports = router