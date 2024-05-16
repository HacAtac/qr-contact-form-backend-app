require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const port = 3000;

const allowedOrigins = ['http://localhost:3000', 'https://your-frontend-domain.com']; // Add your frontend URL here

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
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
