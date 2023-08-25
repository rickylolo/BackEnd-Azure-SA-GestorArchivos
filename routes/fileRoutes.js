const express = require('express')
const router = express.Router()

const fileController = require('../controllers/fileController')

router.get('/file:id', fileController.get)
router.get('/file', fileController.list)
router.post('/file', fileController.create)
router.put('/file:id', fileController.update)
router.delete('/file:id', fileController.destroy)


module.exports = router
