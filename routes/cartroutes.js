const express = require('express');
const Addtocart = require('../controllers/addtocart');
const Getcart = require('../controllers/getcart')
const Increasequantity = require('../controllers/increasecartquantity')
const Decreasequantity = require('../controllers/decreasequantity')

const router = express.Router();

router.post('/addtocart',Addtocart)
router.get('/showcart/:_id',Getcart)
router.post('/increasequantity/:userId/:name',Increasequantity)
router.post('/decreasequantity/:userId/:name',Decreasequantity)


module.exports = router;