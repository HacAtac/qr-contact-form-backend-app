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