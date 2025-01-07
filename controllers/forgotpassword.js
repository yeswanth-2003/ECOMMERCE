const crypto = require('crypto');
const User = require('../models/registerschema');
const sendEmail = require('../controllers/sendemail');

ForgotPassword = async (req, res) => {
    const { Email } = req.body;
    const user = await User.findOne({ Email });
    if (!user) return res.status(404).send('User not found');

    const token = crypto.randomBytes(32).toString('hex');
    user.resetPasswordToken = token;
    user.resetPasswordExpires = Date.now() + 3600000; 
    res.cookie('password_token', token, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 120000 
    });

    await user.save();

    const resetLink = `https://ecommerce-tk0x.onrender.com/reset-password/${token}`;
    await sendEmail(user.Email, 'Password Reset', `Click here to reset: ${resetLink}`);
    return res.status(201).json({ message: 'Password reset link sent to your email' });
};

module.exports = ForgotPassword;

