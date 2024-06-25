const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

// Function to filter properties based on the given criteria
function filterProperties(myArray, country, city, propertyType, persons, checkInDate, checkOutDate) {
  return myArray.filter(property => {
    // Check if all criteria match
    return (
      (!country || property.country.toLowerCase() === country.toLowerCase()) &&
      (!city || property.city.toLowerCase() === city.toLowerCase()) &&
      (!propertyType || property.property_type.toLowerCase() === propertyType.toLowerCase()) &&
      (!persons || parseInt(property.guest_count) >= parseInt(persons)) &&
      (!checkInDate || new Date(property.available_from) <= new Date(checkInDate)) &&
      (!checkOutDate || new Date(property.available_to) >= new Date(checkOutDate))
    );
  });
}

router.post('/properties/search', async (req, res) => {
  const { country, city, property_type, persons, check_in_date, check_out_date } = req.body;

  try {
    // Fetch data from the Users collection
    let data = await Users.find();

    // Extract properties from user data
    let propertyList = [];
    data.forEach(item => {
      if (item.property_list && item.property_list.length > 0) {
        propertyList.push(item.property_list[0]);
      }
    });

    // Filter properties based on criteria
    const filteredProperties = filterProperties(propertyList, country, city, property_type, persons, check_in_date, check_out_date);

    // Prepare and send response
    res.json({ data: filteredProperties });
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).send({ message: 'Server error' });
  }
});

module.exports = router;
