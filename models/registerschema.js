const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid')

const registerSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        default:uuidv4,
        required:true,
    },
    PhoneNumber:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    token:{
        type:String,
        // required:true
    },
    resetPasswordToken: {
        type:String,
    },
    resetPasswordExpires:{
        type:Date,
    },
});

module.exports = mongoose.model('RegisterCommerce',registerSchema);