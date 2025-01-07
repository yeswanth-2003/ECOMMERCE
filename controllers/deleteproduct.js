const Product = require ('../models/products');

const Deleteproduct = async(req,res)=>{
    try{
    const {_id}=req.params;
    const product=await Product.findOneAndDelete({_id});
    res.status(201).json({message:"ITEM REMOVED SUCCESSFULLY",product})
    }catch(err){
        res.status(500).json({message:"Error removing item"})
    }
}

module.exports=Deleteproduct;