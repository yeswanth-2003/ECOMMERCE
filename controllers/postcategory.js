const category=require('../models/categoryschema');

const categorysroutes=async(req,res)=>{
    try{
        const{name,parent,description,Image,isTopLevel}=req.body;

        const added=new category({
          name,
          parent,
          description,
          Image,
          isTopLevel,
        });
        await added.save ();
        res.status(201).json ({message:'category added successfully',added})
    }
    catch (error) {
        console.error('error',error);
        res.status(400).json ({message:'error',error:error.message});
    }
}
module.exports=categorysroutes