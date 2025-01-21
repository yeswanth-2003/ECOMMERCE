const express = require('express');

const PostOrder = require('../controllers/postorder');
const GetOrder = require('../controllers/getorder');

const router = express.Router();

router.post('/post',PostOrder);
router.get('/get/:userId',GetOrder);

module.exports = router;