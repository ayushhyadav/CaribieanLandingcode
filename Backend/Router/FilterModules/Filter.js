const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

function filterProperties(myArray, filters) {
    return myArray.filter(property => {
        if (!property) return false;
        return (
            (!filters.country || property.country === filters.country) &&
            (!filters.city || property.city === filters.city) &&
            (!filters.property_type || property.property_type === filters.property_type) &&
            (!filters.guest_count || parseInt(property.guest_count) >= filters.guest_count) &&
            (!filters.min_price_per_night || parseInt(property.price_per_night) >= filters.min_price_per_night) &&
            (!filters.max_price_per_night || parseInt(property.price_per_night) <= filters.max_price_per_night) &&
            (!filters.select_view || property.select_view === filters.select_view) &&
            (!filters.amenities || filters.amenities.every(amenity => property.amenities.includes(amenity))) &&
            (!filters.extra_service || filters.extra_service.every(service => property.extra_service.includes(service)))
        );
    });
}

router.post('/properties/filter', async (req, res) => {
    const {
        country, city, property_type, person, minimum_budget, maximum_budget,
        select_view, amenities, extra_service, check_in_date, check_out_date
    } = req.body;

    const filters = {
        country,
        city,
        property_type,
        guest_count: person,
        min_price_per_night: parseInt(minimum_budget),
        max_price_per_night: parseInt(maximum_budget),
        select_view,
        amenities,
        extra_service
    };

    try {
        const data = await Users.find();
        let properties = [];
        data.forEach(user => {
            if (user.property_list) {
                properties = properties.concat(user.property_list);
            }
        });

        const filteredProperties = filterProperties(properties, filters);
        res.send({ message: { data: filteredProperties } });
    } catch (error) {
        res.status(500).send({ error: 'An error occurred while filtering properties.' });
    }
});

module.exports = router;
