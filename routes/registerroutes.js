const Register = require('../controllers/registercontroller');
const Reset = require('../controllers/resetpassword');

const express = require('express');

const router = express.Router();

router.post('/register',Register);
router.post('/reset',Reset);

module.exports = router;