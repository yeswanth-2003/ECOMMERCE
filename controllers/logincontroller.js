
const bcrypt=require('bcrypt');
const register=require('../models/registerschema');
const jwt = require('jsonwebtoken');
const logincreate=async(req,res)=>{
    try{
        const{Email,Password}=req.body;
        const GenerateToken = jwt.sign({Email}, process.env.JWT_SECRET);
        const logindata=await register.findOne({Email});        
   
    if (!logindata || !(await bcrypt.compare(Password,logindata.Password))){
        return res.status(400).json ({message:'invalid email or password'});
    }
    else{
        res.status (201).json ({message:'login successfully', token:GenerateToken});
    }
    }
    catch(error){
       console.error('login error',error);
       res.status (500).json ({message:'error login',error:error.message});
    }
}
module.exports=logincreate