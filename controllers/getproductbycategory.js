const products = require('../models/products');


const getproductbycategory = async (req, res) => {
    try {
        const { category } = req.params;
        const product = await products.find({ category });
        const length = product.length;
        res.status(200).json({ message: `product of category : ${category}`,length, product });
    }
    catch (error) {
        console.error('error', error);
        res.status(400).json({ message: 'error', error: error.message });
    }

}

module.exports = getproductbycategory;