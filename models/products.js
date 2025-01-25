const mongoose=require ('mongoose');
const {v4: uuidv4} = require('uuid')

const productSchema=new mongoose.Schema ({
   productId:{
      type:String,
      default:uuidv4,
      required:true,
  },
   name: {
    type:String,
    required:true,
   },
   category: {
    type:String,
    required:true,
   },
   price: {
    type:String,
    required:true,
   },
   description: {
    type:String,
    required:true,
   },
   stock: {
    type:Number,
    required:true,
   },
   images: {
    type:String,
    required:true,
   },
});

module.exports=mongoose.model('products',productSchema);