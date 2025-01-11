const express = require('express');

const PostOrder = require('../controllers/postorders');

const router = express.Router();

router.post('/post',PostOrder);

module.exports = router