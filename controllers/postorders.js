const Orders = require('../models/orderschema')

const Postorders = async (req,res)=>{
    try{
        const{userId,products:[{productId,quantity,price}],totalAmount,paymentMethod,paymentStatus,orderStatus,deliveryAddress}=req.body;
        const neworder = new Orders({
            userId,
            products:
            [{
                productId,
                quantity,
                price
            }],
            totalAmount,
            paymentMethod,
            paymentStatus,
            orderStatus,
            deliveryAddress
        })
        await neworder.save();
        res.status(201).json({message:"Order Placed Successfully",neworder})
    }catch(error){
        res.status(500).json({message:"Can't place order",error})
    }
}

module.exports = Postorders;
