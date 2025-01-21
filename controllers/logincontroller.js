const bcrypt = require('bcrypt');
const register = require('../models/registerschema');
const jwt = require('jsonwebtoken');

const logincreate = async (req, res) => {
    try {
        const { Email, Password } = req.body;
        const GenerateToken = jwt.sign({ Email }, process.env.JWT_SECRET);
        const logindata = await register.findOne({ Email });

        if (!logindata || !(await bcrypt.compare(Password, logindata.Password))) {
            return res.status(400).json({ message: 'invalid email or password' });
        } else {
            res.cookie('auth_token', GenerateToken, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
            });
            return res.status(201).json({ message: 'login successfully' , Token:GenerateToken});
        }
    } catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports =  logincreate ;












// try {
//     const token = req.cookies.auth_token;
//     if (token) {
//         try {
//             const decoded = jwt.verify(token, process.env.JWT_SECRET);
//             if (decoded.Email === Email) {
//                 return res.status(200).json({ message: 'Already logged in' });
//             }
//         } catch (err) {
//             // Invalid token, proceed with login
//         }
//     }