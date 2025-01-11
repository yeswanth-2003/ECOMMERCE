const Product = require('../models/products');

const filterProducts = async (req, res) => {
    try {
        const filters = {};
        const {name,category,subcategory}=req.query
        if (name) {
            filters.name = { $regex:name, $options: 'i' };
        }
        if (category) {
            filters.category = category;
        }
        if(subcategory){
            filters.subcategory  = subcategory
        }

        const products = await Product.find(filters);
        res.status(200).json({message:'PRODUCTS FILTERED',products});
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = filterProducts;