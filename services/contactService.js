const emailService = require('./emailService');
const smsService = require('./smsService');

exports.handleFormSubmission = ({ name, email, phone, address, services, otherService, message }) => {
    return new Promise((resolve, reject) => {
        const finalService = services === 'other' ? otherService : services;

        console.log(`Received submission: ${name}, ${email}, ${phone}, %{address}, ${finalService}, ${message}`);

        // Send email notification
        emailService.sendEmail({ name, email, phone, ,address, services: finalService, message })
//            .then(() => {
//                // Uncomment the SMS service if needed
//                return smsService.sendSms({ name, email, phone, services: finalService, message });
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
