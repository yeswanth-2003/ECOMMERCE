const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
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
      quantity: { 
        type: Number, 
        required: true 
      },
      price: {
         type: Number, 
         required: true 
      },
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
    enum: ['COD', 'Credit Card', 'Debit Card', 'UPI', 'Wallet'],
    required: true,
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Paid', 'Failed'],
    default: 'Pending',
  },
  orderStatus: {
    type: String,
    enum: ['Placed', 'Dispatched', 'In Transit', 'Delivered', 'Cancelled'],
    default: 'Placed',
  },
  deliveryAddress: {
    type: String,
    required: true,
  },
  orderedAt: {
    type: Date,
    default: Date.now,
  },
  deliveredAt: {
    type: Date,
  },
});

module.exports = mongoose.model('Order', OrderSchema);