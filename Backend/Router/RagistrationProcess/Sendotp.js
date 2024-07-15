const express = require('express');
const router = express.Router();
const twilio = require('twilio');
require('dotenv').config();  // Load environment variables from .env file

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const serviceSid = process.env.TWILIO_SERVICE_SID;
const client = twilio(accountSid, authToken);

router.post('/api/send-otp', (req, res) => {
    const { phone } = req.body;

    client.verify.v2.services(serviceSid)
        .verifications
        .create({ to: phone, channel: 'sms' })
        .then(verification => res.send({ success: true, verification }))
        .catch(err => res.send({ success: false, error: err.message }));
});

router.post('/api/verify-otp', (req, res) => {
    const { phone, otp } = req.body;

    client.verify.v2.services(serviceSid)
        .verificationChecks
        .create({ to: phone, code: otp })
        .then(verification_check => {
            if (verification_check.status === 'approved') {
                res.send({ success: true });
            } else {
                res.send({ success: false });
            }
        })
        .catch(err => res.send({ success: false, error: err.message }));
});

module.exports = router;
