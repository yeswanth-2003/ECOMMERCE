const express=require('express');
const postuser=require('../controllers/postuseradress');
const useradress=require('../controllers/getuseradress'); 
const deleteadress = require('../controllers/deleteadress');

const routers=express.Router();

routers.post('/useradress',postuser);
routers.get('/user/:user_id',useradress);
routers.delete('/delete/:user_id/:_id',deleteadress);

module.exports=routers
