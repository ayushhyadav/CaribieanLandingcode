require('dotenv').config();
const express = require('express');
const router = express.Router();
const Users = require('../SignupModule/Signupmodules');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
// const router = express.Router();
// const bcrypt = require('bcrypt');

// User signup
router.post("/auth/signup", async (req, res) => {
    try {
        const { email, password, first_name, last_name, dob, confirm_password } = req.body;

        if (!email || !password || !first_name || !last_name || !dob || !confirm_password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const existingUser = await Users.findOne({ email: email });

        if (existingUser) {
            return res.status(400).json({ message: 'The email is already in use' });
        }

        if (password !== confirm_password) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const encrypt_password = await bcrypt.hash(password, 10);

        const userDetail = {
            email: email,
            password: encrypt_password,
            first_name: first_name,
            last_name: last_name,
            dob: dob,
            user_id: Date.now(),
            user_type: ""
        };

        const newUser = await Users.create(userDetail);

        // Send thank you email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER, // Using environment variable
                pass: process.env.EMAIL_PASS // Using environment variable
            }
        });

        const mailOptions = {
            from: 'joinus@caribbeaneaze.com', 
            to: email,
             subject: 'Welcome to Caribbeaneaze!',
            text:` Dear ${first_name}, Congratulations on completing your registration and welcome to the Caribbeaneaze
community! We are delighted to have you with us.

As a part of our community, you can:

-   Hosts  : Showcase your beautiful properties, connect with guests, and create
memorable experiences.
-   Guests  : Discover unique accommodations, explore amazing destinations, and
enjoy seamless booking experiences.

Here are a few tips to get started:

1.   For Hosts  :
- Make your listing stand out with high-quality photos and detailed descriptions.
- Keep your calendar up-to-date to attract more bookings.
- Engage with your guests to provide exceptional experiences.

2.   For Guests  :
- Use our search feature to find warm places that match your preferences.
- Read reviews to choose the best accommodations.
- Communicate with hosts to ensure a smooth stay.

We’re here to support you every step of the way. If you have any questions or need
assistance, please don’t hesitate to contact our support team at support@Caribbeaneaze.com.

Thank you for joining Caribbeaneaze. We look forward to helping you make the most of
your experience with us!

Warm regards,
The Caribbeaneaze Team
Caribbeaneaze.com
support@Caribbeaneaze.com
info@caribbeaneaze.com
        `};

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Get user by user_id
router.get("/auth/user", async (req, res) => {
    try {
        const { user_id } = req.query;

        if (!user_id) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const user = await Users.findOne({ user_id });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Exclude sensitive fields from the response
        const { password, confirm_password, ...userWithoutSensitiveFields } = user.toObject();

        res.status(200).json({ user: userWithoutSensitiveFields });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update user details


router.put("/auth/user", async (req, res) => {
    try {
        const { email, first_name, last_name, dob, current_password, confirm_password } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if (!current_password || !confirm_password) {
            return res.status(400).json({ message: 'Both current password and confirm password are required' });
        }

        const user = await Users.findOne({ email: email });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!(await bcrypt.compare(current_password, user.password))) {
            return res.status(400).json({ message: 'Password must be same as login/signup password ' });
        }

        if (current_password !== confirm_password) {
            return res.status(400).json({ message: 'Passwords does not match' });
        }

        const updatedDetails = {};

        if (first_name) updatedDetails.first_name = first_name;
        if (last_name) updatedDetails.last_name = last_name;
        if (dob) updatedDetails.dob = dob;

        const updatedUser = await Users.findOneAndUpdate({ email: email }, updatedDetails, { new: true });

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



module.exports = router;
