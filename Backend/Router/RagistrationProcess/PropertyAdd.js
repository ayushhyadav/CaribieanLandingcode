const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');
const multer = require('multer');
const path = require('path');

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "public/Images"),
  filename: (req, file, cb) => {
    cb(null, path.posix.join(`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`));
  }
});

const PropertyImages = multer({ storage: storage });

// Function to generate unique IDs
function uniqid() {
  return (new Date()).getTime() + Math.random().toString(16).slice(2);
}

// Endpoint to add a property
router.post('/property_add', PropertyImages.fields([
  { name: 'property_images', maxCount: 10 },
  { name: 'rafting_certifcate', maxCount: 5 },
  { name: 'exotic_food_certifcate', maxCount: 5 }
]), async (req, res) => {
  try {
    const {
      user_id, email, property_name, select_view, property_type, price_per_night, guest_count, bedroom_count,
      bathroom_count, property_description, property_rules, country, state, city, street_address,
      amenties, extra_service, rafting_number_of_guest, rafting_price, rafting_description,
      exotic_food_number_of_guest, exotic_food_price, exotic_food_description
    } = req.body;

    let user = await Users.findOne({ user_id: user_id });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    let property_list = user.property_list || [];
    let newProperty = {
      user_id, email, property_id: uniqid(), property_name, select_view, property_type, price_per_night, guest_count,
      bedroom_count, bathroom_count, property_description, property_rules, country, state, city, street_address,
      property_images: req?.files?.property_images, amenties, extra_service, rafting_number_of_guest, rafting_price,
      rafting_description, rafting_certifcate: req?.files?.rafting_certifcate, exotic_food_number_of_guest,
      exotic_food_price, exotic_food_description, exotic_food_certifcate: req?.files?.exotic_food_certifcate,
      status: 'pending' // Set initial status to pending
    };

    property_list.push(newProperty);
    user.property_list = property_list;
    await user.save();

    res.send({ message: 'Property added successfully. Awaiting owner approval.', property: newProperty });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


// Function to generate unique IDs
function uniqid() {
  return (new Date()).getTime() + Math.random().toString(16).slice(2);
}

// Endpoint to update availability dates for a property
router.post('/property_update_availability', async (req, res) => {
  try {
    const { user_id, property_id, availabilityDates } = req.body;

    let user = await Users.findOne({ user_id: user_id });
    if (!user) {
      return res.status(404).send({ error: 'User not found' });
    }

    let property = user.property_list.find(p => p.property_id === property_id);
    if (!property) {
      return res.status(404).send({ error: 'Property not found' });
    }

    property.availabilityDates = availabilityDates;

    await user.save();

    res.send({ message: 'Availability dates updated successfully.', property: property });
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Internal Server Error' });
  }
});


module.exports = router;
