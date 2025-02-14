const products = require('../models/products');


const getproductbysubcategory = async (req, res) => {
    try {
        const { subcategory } = req.params;
        const product = await products.find({ subcategory });
        const length = product.length;
        res.status(200).json({ message: `products of subcategory : ${subcategory}`,length, product });
    }
    catch (error) {
        console.error('error', error);
        res.status(400).json({ message: 'error', error: error.message });
    }

}

module.exports = getproductbysubcategory;