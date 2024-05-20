const twilio = require('twilio');
require('dotenv').config();

// Ensure all required environment variables are set
const {
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  ADMIN_PHONE_NUMBER
} = process.env;

if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER || !ADMIN_PHONE_NUMBER) {
  throw new Error("Missing required environment variables. Please check your .env file.");
}

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

exports.sendSms = async (formData) => {
  const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.services}
Message: ${formData.message}`;

  try {
    const response = await client.messages.create({
      body: message,
      from: TWILIO_PHONE_NUMBER,
      to: ADMIN_PHONE_NUMBER
    });

//    console.log(`Message sent with SID: ${response.sid}`);
    return response;
  } catch (error) {
    console.error('Error sending SMS:', error);

    // Extract and log detailed error information
    if (error.status) {
      console.error(`Status: ${error.status}`);
    }
    if (error.code) {
      console.error(`Code: ${error.code}`);
    }
    if (error.message) {
      console.error(`Message: ${error.message}`);
    }
    if (error.moreInfo) {
      console.error(`More Info: ${error.moreInfo}`);
    }

    throw error;
  }
};
