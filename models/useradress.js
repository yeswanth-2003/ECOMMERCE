const mongoose=require('mongoose');

const userAddressInfoSchema = new mongoose.Schema({
    user_id: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'registercommerces',
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
      },
    Phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: false
    },
    state: {
        type: String,
        required: false
    },
    city: {
        type: String,
        required: false
    },
    addresstype: {
        type: String,
        enum: ['Shipping', 'Billing'],
        default: 'Shipping'
      },
    is_active: {
        type: Number,
        required: false
    },
    is_deleted: {
        type: Number,
        required: false
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    created_at: {
        type: Date,
        default: Date.now
    }
},
);
module.exports= mongoose.model('Useraddressinfo', userAddressInfoSchema);


