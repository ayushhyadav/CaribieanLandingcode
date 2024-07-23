const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otpSchema = new Schema({
    phone: {
        type: String,
        required: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '5m' // OTP expires in 5 minutes
    }
});

const OtpModel = mongoose.model('Otp', otpSchema);
module.exports = OtpModel;
