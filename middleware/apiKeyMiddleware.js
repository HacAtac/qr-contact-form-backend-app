// middleware/apiKeyMiddleware.js
const apiKeyMiddleware = (req, res, next) => {
    const apiKey = req.get('x-api-key');
    if (apiKey && apiKey === process.env.API_KEY) {
        next();
    } else {
        res.status(403).json({ status: 'error', message: 'Forbidden' });
    }
};

module.exports = apiKeyMiddleware;
