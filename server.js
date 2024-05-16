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

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
