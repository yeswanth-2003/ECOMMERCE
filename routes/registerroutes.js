const Register = require('../controllers/registercontroller');
const Reset = require('../controllers/resetpassword');
const Login = require('../controllers/logincontroller')
const ForgotPassword = require('../controllers/forgotpassword');

const express = require('express');

const router = express.Router();

router.post('/register',Register);
router.post('/reset/:token',Reset);
router.post('/login',Login)
router.post('/forgot-password',ForgotPassword);

module.exports = router;