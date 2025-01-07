const Product = require('../models/products');

const updateproduct = async (req,res) => {
    const {_id} = req.params;
    const {price,stock,description}=req.body;
    try {
        const products= await Product.findOneAndUpdate({_id},{price:price,stock:stock,description:description});
        await products.save();
        updateditem = await Product.findOne({_id});
        res.status(201).json({message:'Product Updated',updateditem})
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
}

module.exports = updateproduct;