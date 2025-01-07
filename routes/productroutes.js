const express = require('express');

const router = express.Router();

const Getproducts = require('../controllers/getallitems');
const Getsingleproduct = require('../controllers/singleproduct');
const Update = require('../controllers/updateproduct');
const Deleteproduct = require('../controllers/deleteproduct');
const Additems = require('../controllers/additem');

router.get('/getproducts',Getproducts);
router.get('/getsingleproduct/:_id',Getsingleproduct);
router.post('/update/:_id',Update);
router.post('/delete/:_id',Deleteproduct);
router.post('/add',Additems)

module.exports = router;