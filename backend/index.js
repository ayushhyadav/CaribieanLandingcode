const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require("cors");

require('dotenv').config(); // Load environment variables from .env file

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const formDataSchema = new mongoose.Schema({
  yourname: String,
  email: String,
  phone: String,
  massage: String,
  imagePath: String 
});

const FormData = mongoose.model('FormData', formDataSchema);

app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/Images') 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) 
  }
});
const upload = multer({ storage: storage });

app.post('/api/formdata', upload.single('propertyImage'), async (req, res) => {
  try {
    const { name, email, phone, massage, flag } = req.body;
    const imagePath = req.file ? req.file.path : ''; 

    const formData = new FormData({ yourname: name, email, phone, massage, imagePath, flag });

    await formData.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/formdata', async (req, res) => {
  try {
    const formData = await FormData.find();
    
    res.status(200).json(formData);
  } catch (error) {
    console.error('Error fetching form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to our website!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
