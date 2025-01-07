const express = require('express');
const Addtocart = require('../controllers/addtocart');

const router = express.Router();

router.post('/addtocart',Addtocart)

module.exports = router;