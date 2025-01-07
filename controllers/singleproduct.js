const Products = require('../models/products');

const getsingleitem = async (req,res) => {
    const {_id} = req.params;
    try{
        const product = await Products.findOne({_id});
        res.status(200).json({product});
    }
    catch(error){
        res.status(500).json({message:"Something Went Wrong",error});
    }
}

module.exports = getsingleitem;