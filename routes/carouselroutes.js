const Postcarousel = require('../controllers/postcarousel');
const GetCarousel = require('../controllers/getcarousel');
const Deletecarousel = require('../controllers/deletecarouselitem');
const Updatecarousel = require('../controllers/updatecarousel')
const express = require ('express');


const router = express.Router();
router.post('/post',Postcarousel);
router.get('/get',GetCarousel);
router.post('/delete/:position',Deletecarousel);
router.post('/update/:position',Updatecarousel)

module.exports=router;