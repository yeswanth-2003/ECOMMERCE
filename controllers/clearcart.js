const Cartschema = require('../models/cartschema');

const Clearcart =  async (req,res)=>{
    const {userId}=req.params;

    const cart = await Cartschema.findOneAndDelete({userId})
    cart.save();
    res.status(201).json({message:"CART CLEARED SUCCESSFULLY"})
}


module.exports=Clearcart