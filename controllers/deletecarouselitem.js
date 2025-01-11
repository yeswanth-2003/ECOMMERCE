const Carousel = require('../models/carouselschema');

const Deletcarousel = async (req,res)=>{
    try{
        const {position}=req.params;
        const deleteditem = await Carousel.findOneAndDelete({position})
        res.status(201).json({message:"CAROUSEL ITEM DELETED",deleteditem})
    }
    catch(error){
        res.status(500).json({message:"ERROR DELETING CAROUSEL",error})
    }
}

module.exports=Deletcarousel;