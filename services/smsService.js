const twilio = require('twilio');
require('dotenv').config();

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSms = (formData) => {
    const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.services}
Message: ${formData.message}`;

    return client.messages.create({
        body: message,
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.ADMIN_PHONE_NUMBER // Admin phone number
    });
};
