const mongoose = require('mongoose');

const CarouselSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  redirectUrl: {
    type: String,
    required: false,
  },
  altText: {
    type: String,
    required: false,
  },
  position: {
    type: Number,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Carousel', CarouselSchema);