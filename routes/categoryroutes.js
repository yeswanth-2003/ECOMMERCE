const Postcategory = require("../controllers/postcategory") ;
const GetCategory = require('../controllers/getcategory');
const Getsubcategories=require('../controllers/subcategory')
const express = require ('express');

const router = express.Router()

router.post('/post',Postcategory);
router.get('/getcategory',GetCategory)
router.get('/getsubcategory',Getsubcategories)

module.exports = router;