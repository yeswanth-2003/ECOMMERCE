const Register = require('../models/registerschema');
const bcrypt = require('bcryptjs');

const register = async (req,res) =>{

    const {Name,PhoneNumber,Email,Password} = req.body;
    const hashedPassword = await bcrypt.hash(Password,10);
    const emailExist = await Register.findOne({Email});
    if(emailExist){
        return res.status(400).json({message:"Email already exists"});
    }else{
        try {
            const user = new Register({
                Name,
                PhoneNumber,
                Email,
                Password:hashedPassword,
            });
            await user.save();
            res.status(201).json({message:"User registered successfully",user});
    } catch (error) {
        res.status(500).json({message:"Something went wrong",error});
    }
}
}

module.exports = register;