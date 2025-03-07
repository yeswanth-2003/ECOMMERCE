const express = require('express');

const router = express.Router();

const Getproducts = require('../controllers/getallitems');
const Getsingleproduct = require('../controllers/singleproduct');
const Update = require('../controllers/updateproduct');
const Deleteproduct = require('../controllers/deleteproduct');
const Additems = require('../controllers/addproducts');
const Filter = require ('../controllers/filteration')
const searchproduct=require('../controllers/search');
const Getproductbycategory = require('../controllers/getproductbycategory');
const Getproductbysubcategory = require('../controllers/getproductbysubcategory');



router.get('/getproducts',Getproducts);
router.get('/getsingleproduct/:_id',Getsingleproduct);
router.post('/update/:_id',Update);
router.post('/delete/:_id',Deleteproduct);
router.post('/add',Additems)
router.get('/filter',Filter)
router.post ('/search',searchproduct);
router.get('/getproductbycategory/:category',Getproductbycategory);
router.get('/getproductbysubcategory/:subcategory',Getproductbysubcategory);


module.exports = router;
