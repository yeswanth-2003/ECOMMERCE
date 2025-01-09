const subcategory=require('../models/category');

const getallsubcategorys= async (req,res) => {
    try {
        const {parent}=req.params
        const getcategory= await subcategory.find();
        const result=[];
        getcategory.forEach((category) =>{
            if(category.parent==parent){
                result.push(category.name);
            }
        });
        res.status(200).json({message:'fetched successfull',result});
    }
    catch(error){
        res.status(500).json({message:"something went wrong ",error});
    }
}

module.exports=getallsubcategorys;