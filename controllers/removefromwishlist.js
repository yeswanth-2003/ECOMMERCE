const wishlistschema=require('../models/wishlistschema');

const removewishlist=async(req,res) => {
    const {userId,productId}=req.params
    try {
        const wishlist=await wishlistschema.findOne({userId});
        wishlist.products=wishlist.products.filter(product => product.productId != productId);
        await wishlist.save()
        res.status(201).json({message:'product deleted successfully',wishlist});
    }
    catch (error) {
        res.status(500).json({message:'error deleting product',error})
        console.log(error)
    }
}
module.exports = removewishlist