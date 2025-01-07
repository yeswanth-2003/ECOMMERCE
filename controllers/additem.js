const Product = require('../models/products');

const Additems = async(req,res)=>{
    const {name,price,category,description,stock,images}=req.body;
    const newproduct = new Product({
        name,price,category,description,stock,images
    })
    newproduct.save();
    res.status(201).json({message:"items added"})
}
module.exports = Additems