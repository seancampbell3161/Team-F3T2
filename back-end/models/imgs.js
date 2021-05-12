const mongoose = require('mongoose')

const ImgSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  cloudinaryId: {
    type: String,
    required: true,
  },
  like: {
    type: Number,
    required: true,
  },
  userLikes: {
    type: [String],
    required: true,
  },
  caption: {
    type: String,
    required: false,
  }
})

module.exports = mongoose.model('imgs', ImgSchema)
