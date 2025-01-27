// const removeuser=require('../models/useradress');

// const removeuseraddres=async (req,res) =>  {
//     const{user_id,_id}=req.params;

//     try {
//         const userAddress =await removeuser.findOne({user_id});
//         const final = useraddres.filter(user => user._id != _id);
//         const final = removeuser.findOneAndDelete({user_id,_id});

//         await removeuser.save()
//         res.status(201).json({message:'adress removed successfully ',final});

//     }
//     catch (error) {
//         res.status(500).json({message:'error deleting address',error})
//         console.log(error)
//     }
// }
// module.exports=removeuseraddres



const UserAddress = require('../models/useradress');

const removeUserAddress = async (req, res) => {
    const { user_id, _id } = req.params;

    try {
        const final = await UserAddress.findOneAndDelete({ user_id, _id });

        if (!final) {
            return res.status(404).json({ message: 'Address not found' });
        }

        res.status(200).json({ message: 'Address removed successfully', final });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting address', error });
        console.log(error);
    }
};

module.exports = removeUserAddress;