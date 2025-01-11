const mongoose=require ('mongoose');

const productSchema=new mongoose.Schema ({
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