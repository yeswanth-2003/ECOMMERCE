const Carousel = require('../models/carouselschema')

const Updatecarousel = async(req,res)=>{
    const {position}=req.params;
    const {imageUrl, redirectUrl, altText}=req.body;
    try{
        const carousel = await Carousel.findOneAndUpdate({position},{imageUrl:imageUrl,redirectUrl:redirectUrl,altText:altText});
        await carousel.save();
        const updated = await Carousel.findOne({position})
        res.status(201).json({message:"Carousel updated Successfully",updated})
    }catch(error){
        res.status(500).json({message:"ERROR UPDATING CAROUSEL",error})
    }
}

module.exports=Updatecarousel;