const express=require('express');
const getwishlist=require('../controllers/getwishlist');
const removewishlist=require('../controllers/clearwishlist');
const AddtoWhishlist=require('../controllers/postwhishlist');
const removefromwishlist=require('../controllers/removefromwishlist');


const wishrouters=express.Router();
wishrouters.post('/postlist',AddtoWhishlist);
wishrouters.get('/getlist/:userId',getwishlist);
wishrouters.get('/deleteall/:userId',removewishlist);
wishrouters.get('/removelist/:userId/:productId',removefromwishlist);

module.exports=wishrouters