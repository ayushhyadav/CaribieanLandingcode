const express = require('express');
const router = express.Router();
const Users = require('../SignupModule/Signupmodules');
const bcrypt = require('bcrypt');

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

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Update user information

router.put("/auth/update/:userId", async (req, res) => {
    try {
        const userId = req.params.userId;
        const { email, password, first_name, last_name, dob } = req.body;

        const existingUser = await Users.findOne({ user_id: userId });

        if (!existingUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if provided in the request body
        if (password) {
            const encrypt_password = await bcrypt.hash(password, 10);
            existingUser.password = encrypt_password;
        }
        if (email) {
            existingUser.email = email;
        }
        if (first_name) {
            existingUser.first_name = first_name;
        }
        if (last_name) {
            existingUser.last_name = last_name;
        }
        if (dob) {
            existingUser.dob = dob;
        }

        const updatedUser = await existingUser.save();

        res.status(200).json({ message: 'User updated successfully', user: updatedUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
