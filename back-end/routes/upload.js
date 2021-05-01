const express = require('express')
const router = express.Router()
const multer = require("multer")
const upload = multer({dest: __dirname + "/uploads/images"})
const uploadController = require('../controllers/upload')

router.get('/', uploadController.getIndex)

module.exports = router
