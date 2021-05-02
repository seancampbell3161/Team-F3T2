const express = require('express')
const router = express.Router()
const profileController = require('../controllers/profile')
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const multer = require("multer")
const upload = multer({dest: "public/uploads/images"})

router.get('/', ensureAuth, profileController.getProfile)
router.post("/upload", upload.single('photo'), profileController.createPost)
router.put("/updateLike", profileController.updateLike)
router.delete("/deletePost", profileController.deletePost)

module.exports = router
