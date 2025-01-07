const mongoose=require ('mongoose');

const productSchema=new mongoose.Schema ({
   name: {
    type:String,
    require:true,
   },
   category: {
    type:String,
    require:true,
   },
   price: {
    type:String,
    require:true,
   },
   description: {
    type:String,
    require:true,
   },
   stock: {
    type:Number,
    require:true,
   },
   images: {
    type:String,
    require:true,
   },
});

module.exports=mongoose.model('products',productSchema);