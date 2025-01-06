const User = require('../models/registerschema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const resetpassword = async (req,res) =>{
    const {token,newPassword} = req.body;
    const hashedPassword = await bcrypt.hash(newPassword,10);
    const emailExist = await User.findOne({token});
    if(emailExist){
        try {
            const user = await User.findOneAndUpdate({token},{$set:{Password:hashedPassword}});
            res.status(201).json({message:"Password reset successfully",user});
    }
    catch (error) {
        res.status(500).json({message:"Something went wrong",error});
    }

    }

    else{
        return res.status(400).json({message:"Invalid token"});
    }

}


module.exports = resetpassword;