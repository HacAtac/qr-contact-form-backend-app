const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const apiKeyMiddleware = require('../middleware/apiKeyMiddleware');

router.post('/submit', apiKeyMiddleware, contactController.submitContactForm);

module.exports = router;
