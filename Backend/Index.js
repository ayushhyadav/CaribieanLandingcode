const express = require('express')
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 4000;
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const cors =require('cors')
const Users =require('./SignupModule/Signupmodules')
const data = require('./SignupModule/UserDataModule')
const multer  = require('multer')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.send('Hello World!')

})
const signup =require("./Router/Signup");
const OwnerDashboard =require("./Router/OwenerDeshword")
const Login = require('./Router/Login')
const send_otp = require('./Router/RagistrationProcess/Sendotp')
const IdentityVerification = require('./Router/RagistrationProcess/IdentityVerification')
const PropertyAdd = require('./Router/RagistrationProcess/PropertyAdd')
const GetUserProfile = require('./Router/User/UserProfile')
const support = require('./Router/OtherApi/EmailSupport')
const booking = require('./Router/BookingModules/Booking')
const CheckOut = require('./Router/BookingModules/CheckOut')
const ForgateModule = require('./Router/ForgateModule')
const Verification = require('./Router/Verification')
const change_password = require('./Router/RagistrationProcess/UpdatePassword')
const AllProperty = require('./Router/OtherApi/AllProperty')
const get_propertys = require('./Router/OtherApi/GetProperty')
const Most_dest_Propety = require('./Router/OtherApi/Most_dest_Propety')
const BookingHistory = require('./Router/BookingModules/BookingHistry')
const BookingCancel = require('./Router/BookingModules/BookingCancel')
const Active_booking = require('./Router/BookingModules/ActiveBooking')
const cancel_booking_list = require('./Router/BookingModules/CanelBookingList')
const upgrade_booking = require('./Router/BookingModules/UpgradeBooking')
const GetBookingdata_byId = require('./Router/BookingModules/GetDatabyId')
const Search = require('./Router/FilterModules/Search')
const FilterApi = require('./Router/FilterModules/Filter')
const server = http.createServer(app);
const ownerDeshborad=require('./Router/User/OwnerDeshborad')

// const io = socketIO(server, {
//   cors: {
//     origin: 'http://localhost:3000',methods: ['GET', 'POST'],credentials: true,},
// });

// io.on('connection', (socket) => {
//   console.log('A user connected');
//   socket.emit('message', 'Welcome to the server!');
//   socket.on('clientMessage', (data) => {
//     console.log('Message from client:', data);
//   });
//   // Example: disconnect event
//   socket.on('disconnect', () => {
//     console.log('A user disconnected');
//   });
// });
require('dotenv').config()
app.use(express.json());
app.use(cors())
app.use(signup)
app.use(Login)
app.use(send_otp)
app.use(IdentityVerification)
app.use(PropertyAdd)
app.use(GetUserProfile)
app.use(support)
app.use(booking)
app.use(ForgateModule)
app.use(Verification)
app.use(change_password)
app.use(AllProperty)
app.use(get_propertys)
app.use(Most_dest_Propety)
app.use(CheckOut)
app.use(BookingHistory)
app.use(BookingCancel)
app.use(Active_booking)
app.use(cancel_booking_list)
app.use(upgrade_booking)
app.use(GetBookingdata_byId)
app.use(express.static('public'))  
// app.use('/public/Images', express.static('public/Images')); 
app.use('/uploads', express.static('uploads'));
app.use(FilterApi)
app.use(Search)
app.use(ownerDeshborad)
app.use('/api', OwnerDashboard)

const url = process.env.MONGODB_URI;
`mongodb://4tuners:12345@ac-qnxikpe-shard-00-00.lranesa.mongodb.net:27017,ac-qnxikpe-shard-00-01.lranesa.mongodb.net:27017,ac-qnxikpe-shard-00-02.lranesa.mongodb.net:27017/Carribean?ssl=true&replicaSet=atlas-yjmn84-shard-0&authSource=admin&retryWrites=true&w=majority`;

mongoose.connect(url)
    .then( () => {
        console.log('Connected to the database ')
        
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

      app.post('/auth/login',async (req,res)=>{
        const {email,password} = req.body
        console.log('email ',email, password)
        const userDetail = await Users.findOne({ email: email });
        if (userDetail) {
          if (password == userDetail.password) {
            res.send(userDetail);
          } else {
            res.send({ error: "invaild Password" });
          }
        } else {
          res.send({ error: "user is not exist" });
        }
       
      }
      )

      app.use(bodyParser.urlencoded({ extended: true }));

const fileUpload = multer({
   storage : multer.diskStorage({
  destination: (req, file, cb) => cb(null,"uploads"), // cb -> callback
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${Math.round(
      Math.random() * 1e9
    )}${path.extname(file.originalname)}`;
    cb(null, uniqueName);
  },
})
}).single('profile_url')

// app.post('/imgupload',fileUpload,(req,res)=>{
//   res.send("file upload")
// })

// Define a Mongoose schema for the image details
const imageSchema = new mongoose.Schema({
  imageUrl: String,
});

// Create a Mongoose model for the image details
const ImageModel = mongoose.model('Image', imageSchema);

// // Save image details to MongoDB
async function saveImageToDB(imageDetails) {
  try {
    const image = new ImageModel(imageDetails);
    await image.save();
    console.log("Image details saved to MongoDB:", imageDetails);
  } catch (err) {
    console.error("Error saving image details to MongoDB:", err);
  }
}

app.post('/profile/upload', fileUpload,async (req, res) => {
 
  // await Users.updateOne({email:"test@gmail.com"},
  // { $set: { profile_img: imageUrl } }, {multi:true})
  // console.log('update data ',Users)

  console.log(' check data ', req.body)
  if(req?.file?.path == undefined || req?.file?.path ==""){
    res.send({message:'Profile image Required'})
}
  else{
   await Users.findOneAndUpdate({user_id:req.body.user_id }, 
    { $set: { profile_url: req?.file?.path  } }, { //options
      returnNewDocument: true,
      new: true,
      strict: false
    }
  )
.then((value) => {
  if(value == null){
    res.send({message:'User Not Found'})
  }
  else{
    res.send({message:'User profile upload Successfully'})
  }
})
.catch((err) => console.log(err))

}
  
});

  function uniqid(){
    return Math.random().toString(16).slice(2);
  }

app.get('/get_all_propertys',async (req,res)=>{
     const {property_id,entry_date,exit_date,extra_services,total_amount,tranjectionId,user_id} = req.body

    // if(user_id == undefined || user_id ==""){
    //   res.send({message:'user id Required'})
    //  }
    // else{
      // Users.findOne({user_id:user_id})
      // .then(resoponce =>console.log('responce ',resoponce))
      // .catch(error =>console.log({'error':'user not found'}))
      let data = await  Users.find()
      // Downtown,Uptown , Mountains , Beach , River , Ecotourism 
      let myARray = []
      let propertydata = data.filter(item => {
        let stringData = JSON.stringify(item)
        const {_id , ...rest } = JSON.parse(stringData)
        if(rest?.property_list){
          myARray = [...rest?.property_list]
        }
      })
    let Uptown =  myARray.filter(item =>item.property_type == 'Uptown')
    let Mountains = myARray.filter(item => item.property_type =='Mountains')
    let Beach = myARray.filter(item=> item.property_type == 'Beach')
    let River = myARray.filter(item => item.property_type == 'River')
    let Ecotourism = myARray.filter(item => item.property_type == 'Ecotourism')
    let Downtown = myARray.filter(item => item.property_type == 'Downtown')
    let destinations = [Uptown,Downtown,Mountains,Beach,River,Ecotourism]
    let near_you_destinations = [...myARray]
    let result = {
      populer_destinations:destinations,
      near_by_you:near_you_destinations
    }
    res.send({message:result})

 }
  )

server.listen(port,()=>{
  console.log(`Example app listening on port ${port}`)
})