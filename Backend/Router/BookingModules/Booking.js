const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

// Function to generate a unique booking ID
function uniqid() {
    return "bookingId_" + ((new Date()).getTime() + Math.random().toString(16).slice(2));
}

// Function to get current date in YYYY-MM-DD format
function getCurrentDate() {
    const date = new Date();
    return date.toISOString().split('T')[0];
}

// Function to calculate number of nights between two dates
function calculateNights(entryDate, exitDate) {
    const entry = new Date(entryDate);
    const exit = new Date(exitDate);
    const diffTime = Math.abs(exit - entry);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

// Route to handle booking creation with PayPal integration
router.post('/booking', async (req, res) => {
    const { property_id, entry_date, exit_date, extra_services, total_amount, user_id, paypal_transaction_id, card_details } = req.body;

    // Validate required fields
    const missingFields = [];
    if (!user_id) missingFields.push('User ID');
    if (!property_id) missingFields.push('Property ID');
    if (!entry_date) missingFields.push('Entry Date');
    if (!exit_date) missingFields.push('Exit Date');
    if (!total_amount) missingFields.push('Total Amount');
    if (!paypal_transaction_id) missingFields.push('PayPal Transaction ID'); // Ensure PayPal transaction ID is provided

    if (missingFields.length > 0) {
        return res.status(400).send({ message: `${missingFields.join(', ')} Required` });
    }

    try {
        // Find user data
        const userData = await Users.findOne({ user_id });
        if (!userData) {
            return res.status(404).send({ error: 'User Not Found' });
        }

        // Find property owner data
        const ownerData = await Users.findOne({ 'property_list.property_id': property_id });
        if (!ownerData) {
            return res.status(404).send({ error: 'Property Owner Not Found' });
        }

        // Find specific property details for owner and user
        const ownerProperty = ownerData.property_list.find(property => property.property_id === property_id);
        const userProperty = userData.property_list.find(property => property.property_id === property_id);
        const user_type = userProperty ? 'Host' : 'User';

        // Calculate number of nights
        const nights = calculateNights(entry_date, exit_date);

        // Create booking entry object
        const bookingEntry = {
            property_id,
            transaction_id: paypal_transaction_id, // Store PayPal transaction ID
            user_id,
            booking_id: uniqid(),
            booking_date: getCurrentDate(),
            entry_date,
            exit_date,
            extra_services,
            total_amount,
            nights,
            status: 'in Progress',
            profile_url: userData.profile_url,
            user_name: `${userData.first_name} ${userData.last_name}`,
            user_image: userData.profile_url,
            owner_name: ownerProperty ? `${ownerData.first_name} ${ownerData.last_name}` : null,
            owner_image: ownerProperty ? ownerData.profile_url : null,
            property_image: ownerProperty ? ownerProperty.property_images : null,
            user_type: user_type,
            card_details: card_details // Store card details if needed
        };

        // Update user's booking history
        userData.Booking_History.push(bookingEntry);
        await userData.save({ validateBeforeSave: false });

        // Update owner's property booking history using $set to bypass versioning
        if (ownerProperty) {
            await Users.updateOne(
                { 'property_list.property_id': property_id },
                {
                    $set: {
                        'property_list.$.Booking_History': ownerProperty.Booking_History.concat(bookingEntry),
                        All_Property_Booking_History: ownerData.All_Property_Booking_History.concat(bookingEntry)
                    }
                }
            );
        }

        // Return success response with booking details
        res.status(200).send({ message: 'Booking successful', bookingDetails: bookingEntry });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to retrieve booking history for a specific user
router.get('/booking/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        // Find user by user ID
        const user = await Users.findOne({ user_id: userId });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Return user's booking history
        const bookingHistory = user.Booking_History;
        res.json({ bookingHistory });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
