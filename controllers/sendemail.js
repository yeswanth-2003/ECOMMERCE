// const nodemailer = require('nodemailer');

// // const transporter = nodemailer.createTransport({
// //   service: 'gmail', 
// //   auth: {
// //     user: 'chepuriyeswanth27@gmail.com', 
// //     pass: 'yeswa@123'  
// //   }
// // });
// const transporter = nodemailer.createTransport({
//     host: 'smtp.mailersend.net',
//     port: 587,
//     auth: {
//         user: 'MS_a6SY0g@trial-yzkq34095724d796.mlsender.net',
//         pass: 'umE5sWrQhqf8HqFA'
//     }
// });

// const sendEmail = (to, subject, text) => {
//   const mailOptions = {
//     from: process.env.EMAIL_USER, 
//     to,                            
//     subject,                      
//     text                           
//   };

//   return transporter.sendMail(mailOptions); 
// };

// module.exports = sendEmail;
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email: ', error);
  }
};

module.exports = sendEmail;