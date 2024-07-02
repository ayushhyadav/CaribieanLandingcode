const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
});

const fileUpload = multer({ storage }).single('card_image'); // Change 'card_image' to 'property_images'

router.post('/identity_verification', (req, res) => {
  fileUpload(req, res, async (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ message: 'File upload error', error: err.message });
    } else if (err) {
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    const { country, identity_type, user_id } = req.body;
    const card_image = req.file ? req.file.path : null;

    if (!country || !identity_type || !card_image || !user_id) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      const user = await Users.findOneAndUpdate(
        { user_id },
        { $set: { country, identity_type, card_image } },
        { new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json({ message: 'Identity verification successful', user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    }
  });
});

module.exports = router;
