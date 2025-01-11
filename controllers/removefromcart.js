const CartSchema = require('../models/cartschema');

const Removefromcart = async (req,res)=>{
    const {userId,productId}=req.params
    try{
        const cart = await CartSchema.findOne({userId});
        cart.products = cart.products.filter(item => item.productId != productId);
        await cart.save()
        res.status(201).json({ message: 'ITEM DELETED SUCCESSFULLY',cart });
    }
    catch(err){
        res.status(500).json({message:"ERROR DELETING ITEM",err})
        console.log(err)
    }

}

module.exports=Removefromcart