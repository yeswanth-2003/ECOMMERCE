const express = require('express');
const Addtocart = require('../controllers/addtocart');
const Getcart = require('../controllers/getcart')
const Increasequantity = require('../controllers/increasecartquantity')
const Decreasequantity = require('../controllers/decreasequantity');
const Removefromcart = require('../controllers/removefromcart');
const  Clearcart= require('../controllers/clearcart')

const router = express.Router();

router.post('/addtocart',Addtocart)
router.get('/showcart/:userId',Getcart)
router.post('/increasequantity/:userId/:productId',Increasequantity)
router.post('/decreasequantity/:userId/:productId',Decreasequantity)
router.post('/remove/:userId/:productId',Removefromcart)
router.post('/clear/:userId',Clearcart)


module.exports = router;