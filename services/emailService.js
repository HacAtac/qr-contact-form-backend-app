// backend/services/emailService.js
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendEmail = (formData) => {
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: process.env.EMAIL_USER, // Your email address
            pass: process.env.EMAIL_PASS // Your email password
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER, // User's email address
        to: process.env.ADMIN_EMAIL, // Admin email address
        replyTo: formData.email,
        subject: 'New Contact Form Submission',
        text: `You have a new contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.services}
Message: ${formData.message}`
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return reject(error);
            }
            resolve(info);
        });
    });
};
