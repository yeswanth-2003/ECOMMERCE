const express = require('express');

const router = express.Router();

const Getproducts = require('../controllers/getallitems');
const Getsingleproduct = require('../controllers/singleproduct');
const Update = require('../controllers/updateproduct')

router.get('/getproducts',Getproducts);
router.get('/getsingleproduct/:_id',Getsingleproduct);
router.post('/update/:_id',Update)

module.exports = router;