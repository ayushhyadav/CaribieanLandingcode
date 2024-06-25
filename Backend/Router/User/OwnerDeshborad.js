const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');
const multer = require('multer');
const path = require('path');

router.get('/owner/deshboard/:id', async (req, res) => {
    try {
        const user = await Users.findOne({ user_id: req.params.id });

        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        const allUsers = await Users.find();
        let allBookings = [];
        allUsers.forEach(user => {
            if (user.Booking_History) {
                user.Booking_History.forEach(booking => {
                    allBookings.push(booking);
                });
            }
        });

        let filteredBookings = [];
        if (user.property_list) {
            allBookings.forEach(booking => {
                user.property_list.forEach(property => {
                    if (booking.property_id === property.property_id) {
                        filteredBookings.push(booking);
                    }
                });
            });
        }

        let activeJobCount = 0;
        let activeJobAmount = 0;
        let completedJobAmount = 0;

        let currentMonthEarnings = 0;
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth() + 1;

        filteredBookings.forEach(booking => {
            if (booking.status === 'in Progress' || booking.status === 'Completed') {
                if (booking.status === 'in Progress') {
                    activeJobCount++;
                    activeJobAmount += parseInt(booking.total_amount);
                } else if (booking.status === 'Completed') {
                    completedJobAmount += parseInt(booking.total_amount);
                }

                const parts = booking.entry_date.split("/");
                if (parseInt(parts[1]) === currentMonth) {
                    currentMonthEarnings += parseInt(booking.total_amount);
                }
            }
        });

        const result = {
            activeJob: activeJobCount,
            active_job_amount: activeJobAmount,
            completed_job_amount: completedJobAmount,
            current_month_earning: currentMonthEarnings,
            data: filteredBookings
        };

        res.status(200).send({ message: result });

    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Internal Server Error" });
    }
});

router.get('/property_availabilities/:user_id', async (req, res) => {
    try {
        const { user_id } = req.params;

        let user = await Users.findOne({ user_id: user_id });
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }

        const propertiesWithAvailability = user.property_list.map(property => ({
            property_id: property.property_id,
            property_name: property.property_name,
            availabilityDates: property.availabilityDates || []
        }));

        res.send({ properties: propertiesWithAvailability });
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Internal Server Error' });
    }
});

module.exports = router;
