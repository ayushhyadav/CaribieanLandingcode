const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require("cors");

const app = express();
// Serve static files from the 'public' directory
// app.use(express.static('public'))   
app.use(express.static(path.join(__dirname, 'public')));


app.use(cors()); 
const PORT = 3001; 

// Connect to MongoDB database
mongoose.connect('mongodb://4tuners:12345@ac-qnxikpe-shard-00-00.lranesa.mongodb.net:27017,ac-qnxikpe-shard-00-01.lranesa.mongodb.net:27017,ac-qnxikpe-shard-00-02.lranesa.mongodb.net:27017/Carribean?ssl=true&replicaSet=atlas-yjmn84-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a schema for your data
const formDataSchema = new mongoose.Schema({
  yourname: String,
  email: String,
  phone: String,
  massage: String,
  imagePath: String 
});

// Create a model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Set up multer for file uploads
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
    // Extract data from the request body
    const { name, email, phone, massage, flag } = req.body;
    const imagePath = req.file ? req.file.path : ''; 

    // Create a new document with the submitted data
    const formData = new FormData({ yourname: name, email, phone, massage, imagePath, flag });

    // Save the document to the database
    await formData.save();

    // Respond with a success message
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// GET endpoint for fetching form data
app.get('/api/formdata', async (req, res) => {
  try {
    // Fetch all form data from the database
    const formData = await FormData.find();
    
    // Send the fetched data as a response
    res.status(200).json(formData);
  } catch (error) {
    // If an error occurs, respond with an error message
    console.error('Error fetching form data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to our website!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
