const Products = require('../models/products');

const getallitems = async (req,res) => {
    try {
        const products = await Products.find();
        res.status(200).json({products});
    } catch (error) {
        res.status(500).json({message:"Something Went Wrong",error});
    }
}

module.exports = getallitems;
