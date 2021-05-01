const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require("multer")
const upload = multer({dest: "public/uploads/images"})

router.get('/', ensureAuth, profileController.getProfile)
router.post("/upload", upload.single('photo'), profileController.createPost)

module.exports = router
