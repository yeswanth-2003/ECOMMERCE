const express=require('express');
const getwishlist=require('../controllers/getwishlist');
const removewishlist=require('../controllers/clearwishlist');


const wishrouters=express.Router();
wishrouters.get('/getlist/:userId',getwishlist);
wishrouters.get('/deleteall/:userId',removewishlist);

module.exports=wishrouters