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
                const accepted = user.property_list.filter(property => property.status === 'accept');
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
                const rejected = user.property_list.filter(property => property.status === 'cancel');
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
        const { user_id, property_id } = req.body;

        // Find the owner
        let owner = await Users.findOne({ user_id });
        if (!owner) {
            return res.status(404).send({ error: 'Owner not found' });
        }

        // Find and update the property status
        const property = owner.property_list.find(property => property.property_id === property_id);
        if (!property) {
            return res.status(404).send({ error: 'Property not found' });
        }

        property.status = 'accept';
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
        const { user_id, property_id } = req.body;

        // Find the owner
        let owner = await Users.findOne({ user_id });
        if (!owner) {
            return res.status(404).send({ error: 'Owner not found' });
        }

        // Find and update the property status to rejected
        const property = owner.property_list.find(property => property.property_id === property_id);
        if (!property) {
            return res.status(404).send({ error: 'Property not found' });
        }

        property.status = 'cancel';
        await owner.save();

        res.send({ message: 'Property rejected' });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

// API to get all booking history
router.get('/owner/all-booking-history', async (req, res) => {
    try {
        const allUsers = await Users.find();

        let allBookingHistory = [];
        allUsers.forEach(user => {
            if (user.booking_history && user.booking_history.length > 0) {
                allBookingHistory = [...allBookingHistory, ...user.booking_history];
            }
        });

        res.json(allBookingHistory);
    } catch (error) {
        console.error('Error fetching booking history:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get total booking count
router.get('/owner/total-bookings', async (req, res) => {
    try {
        const allUsers = await Users.find();

        let totalBookings = 0;
        allUsers.forEach(user => {
            if (user.booking_history && user.booking_history.length > 0) {
                totalBookings += user.booking_history.length;
            }
        });

        res.json({ totalBookings });
    } catch (error) {
        console.error('Error fetching total bookings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get total earnings
router.get('/owner/total-earnings', async (req, res) => {
    try {
        const allUsers = await Users.find();

        let totalEarnings = 0;
        allUsers.forEach(user => {
            if (user.booking_history && user.booking_history.length > 0) {
                user.booking_history.forEach(booking => {
                    totalEarnings += booking.amount; // Adjust the field name as per your schema
                });
            }
        });

        res.json({ totalEarnings });
    } catch (error) {
        console.error('Error fetching total earnings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// API to get available properties
router.get('/owner/available-properties', async (req, res) => {
    try {
        const allUsers = await Users.find();

        let allBookedPropertyIds = new Set();
        allUsers.forEach(user => {
            if (user.booking_history && user.booking_history.length > 0) {
                user.booking_history.forEach(booking => {
                    allBookedPropertyIds.add(booking.property_id); // Adjust the field name as per your schema
                });
            }
        });

        let availableProperties = [];
        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                user.property_list.forEach(property => {
                    if (property.status === 'accept' && !allBookedPropertyIds.has(property.property_id)) { // Adjust the field name as per your schema
                        availableProperties.push(property);
                    }
                });
            }
        });

        res.json({
            availableProperties,
            count: availableProperties.length
        });
    } catch (error) {
        console.error('Error fetching available properties:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/owner/summary', async (req, res) => {
    try {
        const allUsers = await Users.find();

        let totalBookings = 0;
        let totalEarnings = 0;
        let allBookedPropertyIds = new Set();
        let availablePropertiesCount = 0;

        allUsers.forEach(user => {
            // Calculate total bookings and total earnings
            if (user.booking_history && user.booking_history.length > 0) {
                totalBookings += user.booking_history.length;
                user.booking_history.forEach(booking => {
                    totalEarnings += booking.amount; // Adjust the field name as per your schema
                    allBookedPropertyIds.add(booking.property_id); // Adjust the field name as per your schema
                });
            }

            // Calculate available properties count
            if (user.property_list && user.property_list.length > 0) {
                user.property_list.forEach(property => {
                    if (property.status === 'accept' && !allBookedPropertyIds.has(property.property_id)) { // Adjust the field name as per your schema
                        availablePropertiesCount++;
                    }
                });
            }
        });

        res.json({
            totalBookings,
            totalEarnings,
            availablePropertiesCount
        });
    } catch (error) {
        console.error('Error fetching summary:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.get('/owner/property/:property_id', async (req, res) => {
    try {
        const { property_id } = req.params;
        const allUsers = await Users.find();

        let property = null;

        allUsers.forEach(user => {
            if (user.property_list && user.property_list.length > 0) {
                const foundProperty = user.property_list.find(prop => prop.property_id === property_id);
                if (foundProperty) {
                    property = foundProperty;
                }
            }
        });

        if (property) {
            res.json(property);
        } else {
            res.status(404).json({ error: 'Property not found' });
        }
    } catch (error) {
        console.error('Error fetching property:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
