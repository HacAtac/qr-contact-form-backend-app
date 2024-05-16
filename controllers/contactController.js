const contactService = require('../services/contactService.js');

exports.submitContactForm = (req, res) => {
    const { name, email, phone, services, message } = req.body;

    contactService.handleFormSubmission({ name, email, phone, services, message })
        .then(() => {
            res.json({ status: 'success', message: 'Form submitted successfully' });
        })
        .catch((error) => {
            console.error('Error submitting form:', error);
            res.status(500).json({ status: 'error', message: 'There was an error submitting the form' });
        });
};