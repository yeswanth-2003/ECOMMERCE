const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'registercommerces',
    required: true,
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'products',
        required: true,
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('Wishlist', WishlistSchema);