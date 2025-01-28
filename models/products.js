const mongoose=require ('mongoose');
const {v4: uuidv4} = require('uuid')

const productSchema=new mongoose.Schema ({
   name: {
    type:String,
    require:true,
   },
   productId:{
         type:String,
         default:uuidv4,
         required:true,
        },
   category: {
    type:String,
    require:true,
   },
   subcategory:{
    type:String,
    require:true,
   },
  
   description: {
    type:String,
    require:true,
   },
   price: {
    type:String,
    require:true,
   },
   category: {
    type:String,
    require:true,
   },
   subcategory:{
    type:String,
    require:true,
   },
   brand: {
    type:String,
    require:true,
   },
   specifications:{
    type:Map,
    of:String,
   },
   images: [{
            image:{
               type:String,
               required:true,
         },
      }],
   stock:{
    type:Number,
    default:0,
   },
   rating:{
    type:Number,
    default:0,
   },
   reviews:[{
    user:{type:mongoose.Schema.Types.ObjectId,
        ref:'user' },
        Comment:{type:String},
        rating:{type:Number},
   }],
   createdAt:{
    type:Date,
    default:Date.now,
   },
});
  module.exports=mongoose.model('products',productSchema);