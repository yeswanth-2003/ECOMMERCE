const Postcategory = require("../controllers/postcategory") ;
const express = require ('express');

const router = express.Router()

router.post('/post',Postcategory);

module.exports = router;