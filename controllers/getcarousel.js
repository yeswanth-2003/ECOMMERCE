const Carousel = require('../models/carouselschema');

const GetCarousel = async (req,res) => {
    try {
        const carousel = await Carousel.find();
        res.status(200).json({carousel});
    } catch (error) {
        res.status(500).json({message:"Something Went Wrong",error});
    }
}

module.exports = GetCarousel;