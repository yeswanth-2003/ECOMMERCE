
const CartSchema = require('../models/cartschema');

const Addtocart = async (req, res) => {
    const { _id, products: [{ name, price, quantity,images }] } = req.body;

    const subtotal = price * quantity;

    try {
        
        let cart = await CartSchema.findOne({ _id });

        if (cart) {           

            const existingItem = cart.products.find(product => product.name === name);

            if (existingItem) {

                existingItem.quantity += 1;
                existingItem.subtotal=existingItem.quantity*price;

            } else {

                cart.products.push({ name, price, quantity,subtotal,images });
            }
          
            cart.totalPrice = 0;
            cart.totalQuantity = 0;
            cart.products.forEach(product => {
                cart.totalPrice += product.subtotal;
                cart.totalQuantity += product.quantity;
            });
            
        } else {
            
            cart = new CartSchema({

                products: [{
                    name, price, quantity,subtotal,images
                }],
                totalPrice: price * quantity,
                totalQuantity: quantity
            });
        }

        await cart.save();
        res.status(201).json({ message: 'Item added to cart', cart });
    } catch (error) {
        res.status(500).json({ message: 'Error processing request', error });
    }
};

module.exports = Addtocart;