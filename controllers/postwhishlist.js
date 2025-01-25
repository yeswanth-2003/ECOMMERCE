const { response } = require('express');
const Wishlist=require('../models/wishlistschema'); 
const Product=require('../models/products');


const AddtoWhishlist=async (req,res)=> {
    const {userId,products:[{ productId,}]}=req.body;
    try {
   const wishlist=await Wishlist.findOne({userId});
   if (wishlist){
    const existingitem= wishlist.products.find(product => product.productId==productId);
    if (existingitem){
        res.status(201).json({message:'item alredy in wishlist'});
    }
    else{
        console.log('comimg',wishlist)
        wishlist.products.push({productId});
        await wishlist.save()
        res.status(200).json({meeage:'new product add successfully',wishlist})
    }
   }
else {
    // console.log(userId)
    const added=new Wishlist ({
        userId,
        products:[{
            productId,
            
        }]
    });
    await added.save();
    res.status(201).json({message:'whishlist add successfull',added});
}
   
    // const product=await Product.findOne({
    //     userId:userId});
        // console
        // await added.save();
        // res.status(201).json({message:'whishlist add successfull'});
    }
    catch (error){
        console.error('error',error);
       res.status(400).json ({message:'error',error:error.message});   
    }

}
module.exports=AddtoWhishlist