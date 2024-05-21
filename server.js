require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

const allowedOrigins = [
  'http://localhost:3000',
  'https://qr-contact-form-app.vercel.app',
  'https://www.greenkinglandscaping.org',
  'http://www.greenkinglandscaping.org',
  'https://greenkinglandscaping.org',
  'http://greenkinglandscaping.org'
];


app.use(cors({
  origin: function (origin, callback) {
    console.log("Origin:", origin); // Logging the origin for debugging
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.log("Blocked by CORS:", origin); // Logging blocked origins
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
}));


// Middleware
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
      email: "greenkinglandscaping2023@gmail.com",
      website: "https://qr-contact-form-app.vercel.app/contact"

    },
    version: "1.0.0"
  };
  res.json(apiInfo);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
