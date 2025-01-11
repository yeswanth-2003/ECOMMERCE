const Cart = require('../models/cartschema')

const Increasequantity = async(req,res)=>{
    const {userId,productId}=req.params;
    try{
    const cart = await Cart.findOne({userId});
    const item = cart.products.find((item) => item.productId== productId);


    item.quantity += 1;
    item.subtotal=item.price*item.quantity;


    cart.totalPrice = 0;
    cart.totalQuantity = 0;
    cart.products.forEach(item => {
        cart.totalPrice += item.subtotal;
        cart.totalQuantity += item.quantity;
    });
    await cart.save();
    res.status(200).json({ message: 'Item quantity increased',cart });
    }catch(err){
        res.status(500).json({message:'ERROR PROCESSING REQUEST',err})
    }
}

module.exports = Increasequantity