const express = require('express');
const router = express.Router();
const Users = require('../SignupModule/Signupmodules'); // Adjust path as needed

// API to get all users
router.get('/owner/all-users', async (req, res) => {
    try {
        const allUsers = await Users.find();
        res.json(allUsers);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get all properties of all users
router.get('/owner/all-properties', async (req, res) => {
    try {
        const allUsers = await Users.find();
        let allProperties = [];
        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                allProperties = [...allProperties, ...user.property_list];
            }
        });
        res.json(allProperties);
    } catch (error) {
        console.error('Error fetching properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get accepted properties
router.get('/owner/accepted-properties', async (req, res) => {
    try {
        const allUsers = await Users.find();
        let acceptedProperties = [];
        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                const accepted = user.property_list.filter(property => property.status === 'accepted');
                acceptedProperties = [...acceptedProperties, ...accepted];
            }
        });
        res.json(acceptedProperties);
    } catch (error) {
        console.error('Error fetching accepted properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get rejected properties
router.get('/owner/rejected-properties', async (req, res) => {
    try {
        const allUsers = await Users.find();
        let rejectedProperties = [];
        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                const rejected = user.property_list.filter(property => property.status === 'rejected');
                rejectedProperties = [...rejectedProperties, ...rejected];
            }
        });
        res.json(rejectedProperties);
    } catch (error) {
        console.error('Error fetching rejected properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get pending properties
router.get('/owner/pending-properties', async (req, res) => {
    try {
        const allUsers = await Users.find();
        let pendingProperties = [];
        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                const pending = user.property_list.filter(property => !property.status || property.status === 'pending');
                pendingProperties = [...pendingProperties, ...pending];
            }
        });
        res.json(pendingProperties);
    } catch (error) {
        console.error('Error fetching pending properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Accept property endpoint
router.post('/owner/accept_property', async (req, res) => {
    try {
        const { owner_id, property_id } = req.body;

        // Find the owner
        let owner = await Users.findOne({ user_id: owner_id });
        if (!owner) {
            return res.status(404).send({ error: 'Owner not found' });
        }

        // Find and update the property status
        const property = owner.property_list.find(property => property.property_id === property_id);
        if (!property) {
            return res.status(404).send({ error: 'Property not found' });
        }

        property.status = 'accepted';
        await owner.save();

        res.send({ message: 'Property accepted' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

// Reject property endpoint
router.post('/owner/reject_property', async (req, res) => {
    try {
        const { owner_id, property_id } = req.body;

        // Find the owner
        let owner = await Users.findOne({ user_id: owner_id });
        if (!owner) {
            return res.status(404).send({ error: 'Owner not found' });
        }

        // Find and update the property status to rejected
        const property = owner.property_list.find(property => property.property_id === property_id);
        if (!property) {
            return res.status(404).send({ error: 'Property not found' });
        }

        property.status = 'rejected';
        await owner.save();

        res.send({ message: 'Property rejected' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;
