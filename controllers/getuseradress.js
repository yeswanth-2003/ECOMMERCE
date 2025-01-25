const user=require('../models/useradress');


const getuseraddress=async (req,res) => {
    const {user_id}=req.params;
    try {
        const useradress=await user.find({user_id})
        if (!useradress || useradress.length===0){
            return res.status (404).json({message:'user details not found'});
        }
        res.status(201).json({message:'user address fleching successfully',useradress});
    }
    catch(error){
        res.status(500).json({message:'something went wrong',error});
    }
}
module.exports=getuseraddress