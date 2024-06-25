const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

router.get('/most_dest_property/:type', async (req, res) => {
    try {
        console.log('dataaa show', req.params.type);
        let data = await Users.find();
        // Initialize an array to store the filtered properties
        let myArray = [];

        // Iterate over each user and extract the property_list if it exists
        data.forEach(item => {
            let stringData = JSON.stringify(item);
            const { _id, ...rest } = JSON.parse(stringData);
            if (rest.property_list && rest.property_list.length > 0) {
                // Add each property in the property_list to myArray
                rest.property_list.forEach(property => {
                    myArray.push(property);
                });
            }
        });

        // Filter the properties based on the type parameter
        let filter_data = myArray.filter(item => item.property_type === req.params.type);

        // Create the result object
        let result = {
            near_by_you: filter_data
        };

        // Send the result as the response
        res.send({ message: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
