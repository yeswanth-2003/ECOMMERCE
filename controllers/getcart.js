const CartSchema = require('../models/cartschema');

const Viewcart = async (req, res) => {
     const {_id} = req.params;
        try {
             const cart = await CartSchema.findOne({ _id });
        if (!cart || cart.length === 0) {
            return res.status(404).json({ message: 'Cart not found' });
        }
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

module.exports = Viewcart;