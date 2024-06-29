const express = require('express');
const router = express.Router();
const Users = require('../../SignupModule/Signupmodules');
const bcrypt = require('bcrypt');

router.post("/auth/change_password", async (req, res) => {
    const { email, new_password, confirm_password } = req.body;
    
    if (new_password === confirm_password) {
        const encrypt_password = await bcrypt.hash(new_password, 10);

        await Users.findOneAndUpdate(
            { email: email }, 
            { $set: { password: encrypt_password } }, 
            { returnNewDocument: true, new: true, strict: false }
        )
        .then((value) => {
            if (value == null) {
                res.send({ error: 'User Not Found' });
            } else {
                res.send({ message: "Password updated successfully" });
            }
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ error: 'Internal Server Error' });
        });
    } else {
        res.send({ error: "New password and confirm password do not match" });
    }
});

module.exports = router;
