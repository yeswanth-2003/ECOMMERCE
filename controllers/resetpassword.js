const User = require('../models/registerschema');
const bcrypt = require('bcryptjs');

const resetpassword = async (req,res) =>{
    const {userId,newPassword} = req.body;
    // const hashedPassword = await bcrypt.hash(newPassword,10);
    const emailExist = await User.findOne({userId});
    if(emailExist){
        try {
            const user = await User.findOne({userId});
            await user.updateOne({$set:{Password}})
            user.save();
            res.status(201).json({message:"Password reset successfully",user});
    }
    catch (error) {
        res.status(500).json({message:"Something went wrong",error});
    }
    }
    else{
        console.log('Enter valid Email')
    }

}


module.exports = resetpassword;