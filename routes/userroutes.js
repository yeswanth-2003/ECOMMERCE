const express=require('express');
const postuser=require('../controllers/postuseradress');
const useradress=require('../controllers/getuseradress'); 

const routers=express.Router();

routers.post('/useradress',postuser);
routers.get('/user/:user_id',useradress);

module.exports=routers
