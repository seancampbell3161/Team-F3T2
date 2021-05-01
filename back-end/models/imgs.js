const mongoose = require('mongoose')

const ImgSchema = new mongoose.Schema({
  microsoftId: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('imgs', ImgSchema)