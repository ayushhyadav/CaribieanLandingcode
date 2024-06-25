const express =require('express');
const router =express.Router()
const Users = require('../../SignupModule/Signupmodules')
const LocalStorage = require('../LocalStorage')
const accountSid = LocalStorage.TWILIO_ACCOUNT_SID;
const authToken = LocalStorage.TWILIO_AUTH_TOKEN;
const PhoneNO = LocalStorage.TWILIO_PHONE_NO;
const client = require('twilio')(accountSid, authToken);


router.post('/auth/send_otp',async (req,res)=>{
  const {user_id,mobile_no} = req.body
  if(mobile_no == ""){
    res.send({error:"mobile no required"})
  }
  
  else{
   console.log('mobile number show me ',mobile_no)
    await Users.findOneAndUpdate({user_id:req.body.user_id }, 
        { $set: { mobile_no:mobile_no } }, { //options
          returnNewDocument: true,
          new: true,
          strict: false
        }
      )
    .then((value) => {
      if(value == null){
        res.send({error:'User Not Found'})
      }
      else{
        client.verify.v2.services('VA0c2776aa47238b4c47da34ec23637cb6')
        .verifications
        .create({to: "+"+mobile_no, channel: 'sms'})
        .then(verification =>  res.send({ message:value}));
      }
    })
    .catch((err) => console.log(err))
  }
}
  )
module.exports = router