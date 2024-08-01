
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
]), async (req, res) => {
  try {
    const {
      user_id,
      property_name,
      select_view,
      property_type,
      price_per_night,
      guest_count,
      bedroom_count,
      bathroom_count,
      property_description,
      property_rules,
      country,
      state,
      city,
      street_address,
      amenties,
      extra_service,
      cancellationPolicy
    } = req.body;

    let user = await Users.findOne({ user_id: user_id });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    let property_list = user.property_list || [];

    let newProperty = {
      user_id,
      property_id: uniqid(),
      property_name,
      select_view,
      property_type,
      price_per_night,
      guest_count,
      bedroom_count,
      bathroom_count,
      property_description,
      property_rules,
      country,
      state,
      city,
      street_address,
      property_images: req?.files?.property_images,
      // property_images: req.files?.property_images?.map(file => file.filename) || [],
      amenties: JSON.parse(amenties),
      extra_service: JSON.parse(extra_service),
      cancellationPolicy,
      status: 'pending'
    };

    property_list.push(newProperty);
    user.property_list = property_list;
    await user.save();

    // Simulate the approval process
    const isAccepted = Math.random() < 0.5; // 50% chance of being accepted for this example

    if (isAccepted) {
      res.status(200).json({ 
        message: 'Property added successfully',
        accepted: true,
        property: newProperty
      });
    } else {
      res.status(200).json({ 
        message: 'Property submitted for approval',
        accepted: false,
        property: newProperty
      });
    }

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


// Function to find the property by ID and update its availability dates
async function updateAvailabilityDates(userId, propertyId, availabilityDates) {
  let user = await Users.findOne({ user_id: userId });
  if (!user) {
    throw new Error('User not found');
  }

  let property = user.property_list.find(prop => prop.property_id === propertyId);
  if (!property) {
    throw new Error('Property not found');
  }

  property.availabilityDates = availabilityDates;
  await user.save();

  return property;
}

// Endpoint to update availability dates for a property

router.put('/property/:propertyId/availability', async (req, res) => {
  try {
    const { propertyId } = req.params;
    const { user_id, availabilityDates } = req.body;

    if (!Array.isArray(availabilityDates)) {
      return res.status(400).json({ error: 'Invalid availability dates format' });
    }

    const updatedProperty = await updateAvailabilityDates(user_id, propertyId, availabilityDates);

    res.status(200).json({ 
      message: 'Availability dates updated successfully',
      property: updatedProperty 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

