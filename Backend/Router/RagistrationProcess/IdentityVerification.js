const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');
const multer = require('multer');
const path = require('path');

const fileUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads"),
    filename: (req, file, cb) => {
      const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  })
}).single('card_image'); // Change 'card_image' to 'property_images'

router.post('/identity_verification', fileUpload, async (req, res) => {
  const { country, identity_type } = req.body;
  const card_image = req.file.path;

  if (!country || !identity_type || !card_image) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await Users.findOneAndUpdate(
      { user_id: req.body.user_id },
      { $set: { country, identity_type, card_image } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Identity verification successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
