const Order = require('../models/orderschema');

const Getorder = async (req,res)=>{
    const {userId} = req.params;
    try{
        const order = await Order.find({ userId });
        if (!order || order.length === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = Getorder;
