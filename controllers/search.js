const Category = require('../models/categoryschema');

const productSchema=require('../models/products');

const searchproduct=async(req,res)=>{
    try{
        const{list}=req.body;
        const search = {
            $or:[
                {name: {$regex: list,$options:'i'}},
                {Category: {$regex:list,$options:'i'}},
                {price: {$regex:list,$options:'i'}},
                {brand: {$regex:list,$options:'i'}},


            ]
        }

        const searchdata=await productSchema.find(search)
        if(searchdata.length===0) {
            return res.status(404).json({message:'data not found'});
        }
        return res.status(201).json(searchdata)
    }
    catch (error){
        res.status(500).json({error:error})
    }
}
module.exports=searchproduct