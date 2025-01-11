const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'registercommerces',
        required: true,
    },
    products: [{
        productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'products',
                required: true,
        },
        name: {
            type:String,
            required: true
        },
        price:{
            
            type: Number,
            required: true
        },
        quantity:{
            type: Number,
            required: true,
        },
        images: {
            type:String,
            require:true,
        },
        subtotal:{
            type:Number,
            required:true,
        },
    }],
    totalPrice:{
        type:Number,
        required:true,
    },
    totalQuantity:{
        type:Number,
        required:true,
    },

});

module.exports = mongoose.model('CartItem', cartSchema);