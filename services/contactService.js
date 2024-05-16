const emailService = require('./emailService');
const smsService = require('./smsService');

exports.handleFormSubmission = ({ name, email, phone, services, message }) => {
    return new Promise((resolve, reject) => {
        // Add logic to store the data, send an email, etc.
        console.log(`Received submission: ${name}, ${email}, ${phone}, ${services}, ${message}`);

        // Send email notification
        emailService.sendEmail({ name, email, phone, services, message })
//            .then(() => {
//                return smsService.sendSms({ name, email, phone, services, message });
//            })
            .then(() => {
                resolve();
            })
            .catch((error) => {
                console.error('Error:', error);
                reject(error);
            });
    });
};
