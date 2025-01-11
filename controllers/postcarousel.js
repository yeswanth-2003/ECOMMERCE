const Carousel = require('../models/carouselschema')

const PostCarousel = async(req,res) =>{
    try{
    const {imageUrl,redirectUrl,altText,position}=req.body
    const newcarousel = new Carousel({
        imageUrl,
        redirectUrl,
        altText,
        position
    })
    await newcarousel.save();
    res.status(201).json({message:"CAROUSEL ADDED SUCCESSFULLY",newcarousel})
}
catch(error){
    res.status(500).json({message:"ERROR ADDING CAROUSEL ITEM",error})
}
}

module.exports =PostCarousel