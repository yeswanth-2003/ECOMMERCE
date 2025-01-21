const list=require('../models/wishlistschema');

const removeallfromwishlist=async (req,res) => {
try{
    const {userId}=req.params;
    const wishlist=await list.findOneAndDelete({userId});
    res.status(201).json({message:"product removed successfully",wishlist})
}
catch(error){
    res.status(500).json({message:"error removing product",error})
}
}
module.exports=removeallfromwishlist