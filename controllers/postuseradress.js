const useradress=require('../models/useradress');
const { post } = require('../routes/wishlistroutes');

const postuser= async(req,res) => {
    try {
        const {user_id,firstname,lastname,email,Phone,address,landmark,state,city,addresstype,is_active,is_deleted,updated_at,created_at,}=req.body;

        const added= new useradress ({
            user_id,
            firstname,
            lastname,
            email,
            Phone,
            address,
            landmark,
            state,
            city,
            addresstype,
            is_active,
            is_deleted,
            updated_at,
            created_at,
        });
        await added.save ();
        res.status(201).json ({message:'address added successfully',added});
    }
    catch(error){
        console.error('error',error);
        res.status(500).json({message:'error',error:error.message});
    }
}
module.exports=postuser