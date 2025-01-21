const Order = require('../models/orderschema');
const products = require('../models/products');

const Postorder = async (req,res)=>{
    try{
        const {userId,products,paymentMethod,deliveryAddress,deliveredAt}=req.body;
        let totalAmount = products.reduce((acc, product) => acc + product.price * product.quantity, 0);     
        let order = await Order.findOne({ userId }); 

        if (order) {
     
            order.products.push(...products);
            order.totalAmount += totalAmount;
        } else {
            order = new Order({
                userId,
                products,
                totalAmount,
                paymentMethod,
                deliveryAddress,
                deliveredAt
            });
        }
       
        await order.save();
        res.status(201).json({message:"ORDER PLACED SUCCESSFULLY",order})
    }
    catch (error) {
        console.error('error',error);
        res.status(400).json({message:'error',error:error.message});
    }

}

module.exports=Postorder