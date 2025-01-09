const Postcategory = require("../controllers/postcategory") ;
const GetCategory = require('../controllers/getcategory')
const express = require ('express');

const router = express.Router()

router.post('/post',Postcategory);
router.get('/getcategory',GetCategory)

module.exports = router;