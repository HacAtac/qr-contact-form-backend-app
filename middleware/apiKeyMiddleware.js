// middleware/apiKeyMiddleware.js
require('dotenv').config();

const apiKeyMiddleware = (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (apiKey === process.env.REACT_APP_API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid API Key' });
  }
};

module.exports = apiKeyMiddleware;
