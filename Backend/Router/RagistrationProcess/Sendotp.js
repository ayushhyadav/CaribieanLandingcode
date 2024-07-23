const express = require('express');
const router = express.Router();
const twilio = require('twilio');
const OtpModel = require('../../OtpModel'); // Ensure you have a proper path to your OtpModel
require('dotenv').config();  // Load environment variables from .env file

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;
const client = twilio(accountSid, authToken);

// Function to generate OTP
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit OTP
};

router.post('/api/send-otp', async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).send({ success: false, error: "Phone number is required" });
    }

    try {
        const otp = generateOTP();
        const otpDocument = new OtpModel({ phone, otp });
        await otpDocument.save();

        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: '+16479557342',  // Your Twilio phone number
            to: phone
        });

        res.send({ success: true, otp });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, error: "Failed to send OTP" });
    }
});

module.exports = router;
