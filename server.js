require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = process.env.PORT || 3000;

// CORS configuration
const corsOptions = {
    origin: 'https://qr-contact-form-app.vercel.app',
    methods: 'GET,POST', // Methods to allow
    allowedHeaders: 'Content-Type, x-api-key', // Headers to allow
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

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
                    description: "Submit a contact form. Expects JSON payload with name, email, phone, address, services, and message."
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
    console.log('Loaded API Key:', process.env.API_KEY);
});
