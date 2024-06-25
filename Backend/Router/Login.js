const express = require('express');
const router = express.Router();
const Users = require('../SignupModule/Signupmodules');
const bcrypt = require('bcrypt');

router.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('email ', email, password);
  
  try {
    const userDetail = await Users.findOne({ email: email });
    
    if (!userDetail) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const passwordCompare = await bcrypt.compare(password, userDetail.password);

    if (passwordCompare) {
      res.send(userDetail);
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
