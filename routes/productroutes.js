const express = require('express');

const router = express.Router();

const Getproducts = require('../controllers/getallitems');

router.get('/getproducts',Getproducts);

module.exports = router;