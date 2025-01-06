const Register = require('../controllers/registercontroller');
const Reset = require('../controllers/resetpassword');
const Login = require('../controllers/logincontroller')

const express = require('express');

const router = express.Router();

router.post('/register',Register);
router.post('/reset',Reset);
router.post('/login',Login)

module.exports = router;