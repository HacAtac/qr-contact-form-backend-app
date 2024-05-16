// backend/server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/contact', contactRoutes);

// API Landing Page
app.get('/', (req, res) => {
    const apiInfo = {
        message: "Welcome to the QR Contact Form Backend API!",
        endpoints: {
            get: [
                {
                    route: "/",
                    description: "API landing page with information about available endpoints."
                }
            ],
            post: [
                {
                    route: "/contact/submit",
                    description: "Submit a contact form. Expects JSON payload with name, email, phone, services, and message."
                }
            ]
        },
        contact: {
            email: "support@yourdomain.com",
            website: "https://yourdomain.com"
        },
        version: "1.0.0"
    };
    res.json(apiInfo);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
