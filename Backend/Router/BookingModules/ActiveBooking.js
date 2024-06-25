const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

function uniqid() {
    return Math.random().toString(16).slice(2);
}

function GetCurrentDate() {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
    let currentYear = date.getFullYear();
    let currentDate = `${currentDay}-${currentMonth}-${currentYear}`;
    return currentDate;
}

router.get('/active_booking/:user_id', async (req, res) => {
    try {
        let userData = await Users.findOne({ user_id: req.params.user_id });

        if (!userData) {
            return res.send({ error: 'User Not Found' });
        }

        let bookingData = JSON.stringify(userData);
        let Booking_History = JSON.parse(bookingData)?.Booking_History || [];
        let userType = userData.property_list && userData.property_list.length > 0 ? "Host" : "User";

        let activeBookings = Booking_History.filter(value => value.status == 'in Progress');

        res.send({
            message: {
                user_type: userType,
                active_bookings: activeBookings
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
