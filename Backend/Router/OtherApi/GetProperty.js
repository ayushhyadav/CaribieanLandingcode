const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');

router.get('/get_propertys/:property_id', async (req, res) => {
    try {
        const { property_id } = req.params;

        // Fetching data from MongoDB
        const data = await Users.find();

        // Array to hold extracted data
        let extractedData = [];

        // Iterating over each document in data
        data.forEach(item => {
            // Extracting _id and rest properties except _id
            const { _id, ...rest } = item.toObject();

            // Checking if property_list exists and processing it
            if (rest.property_list) {
                // Iterating over property_list array
                rest.property_list.forEach(property => {
                    // Checking if property_id matches the requested property_id
                    if (property.property_id === property_id) {
                        // Extracting first_name, last_name, and profile_url from user
                        const { first_name, last_name, profile_url } = rest;

                        // Creating an object with required data
                        const extractedItem = {
                            first_name,
                            last_name,
                            profile_url,
                            property // Including the property details if needed
                        };

                        // Pushing extracted item to the array
                        extractedData.push(extractedItem);
                    }
                });
            }
        });

        // Sending the extracted data in response
        res.send({ message: extractedData });
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

module.exports = router;
