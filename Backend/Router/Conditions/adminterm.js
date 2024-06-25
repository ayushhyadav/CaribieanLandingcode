const express =require('express');
const router =express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Uploads will be stored in the "uploads" folder
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
  const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
  
  const fileFilter = (req, file, cb) => {
    if (allowedFileTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and DOC files are allowed.'), false);
    }
  };
  
  const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });
  
  // Set up a route to handle file uploads
  router.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
  
    // File uploaded successfully
    res.json({ message: 'File uploaded successfully', filename: req.file.filename });
  });
  
// Set up a route to get a list of uploaded files
app.get('/files', (req, res) => {
    const uploadPath = path.join(__dirname, 'uploads');
  
    fs.readdir(uploadPath, (err, files) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
  
      res.json({ files: files });
    });
  });
  

  module.exports = router