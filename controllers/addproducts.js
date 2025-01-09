const products=require('../models/products');

const productuser=async(req,res)=>{
    try{
        const{name,description, price,category, subcategory,brand,specifications, images,stock,rating,reviews,createdAt,}=req.body;

        const added=new products({
            name,
            description,
            price,
            category,
            subcategory,
            brand,
            specifications,
            images,
            stock,
            rating,
            reviews,
            createdAt,
        });
        await added.save ();
        res.status(201).json ({message:'your product added successfull',added})
    }
    catch (error) {
        console.error('error',error);
        res.status(400).json ({message:'error',error:error.message});
    }

}

module.exports=productuser