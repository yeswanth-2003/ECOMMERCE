const express=require('express');
const bodyParser=require('body-parser')

const Wishlist=require('../models/wishlistschema');

const getwishlist=async(req,res)=>{
    const{userId}=req.params;
    try{
        const product = await Wishlist.findOne ({userId});
        if(!product || product.length === 0){
            return res.status(404).json({message:'cart not found'})
        }
         res.status(200).json({message:'wishlist fletching successfull',product});
       
    }
    catch(error) {
        res.status(500).json({message:'something went wrong',error});
    }
}
module.exports=getwishlist