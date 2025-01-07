const User = require('../models/registerschema');
const bcrypt = require('bcryptjs');

const resetpassword = async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;

    try {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Password reset token is invalid or has expired' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.Password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;

        await user.save();
        res.status(201).json({ message: 'Password reset successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error });
    }
};

module.exports = resetpassword;