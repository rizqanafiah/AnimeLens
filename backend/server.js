require('dotenv').config();
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Setup CORS to allow requests from frontend
app.use(cors({
  origin: '*', // Adjust this to your frontend URL in production
}));

// Create uploads folder if not exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Use original filename or generate unique name
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint to upload image
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.json({ message: 'File uploaded successfully', filename: req.file.filename });
});

// Endpoint to serve uploaded images
app.use('/uploads', express.static(uploadDir));

// Endpoint to send image to ML microservice and get detection result
const axios = require('axios');
const FormData = require('form-data');

app.post('/detect', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded for detection' });
  }

  try {
    const mlServiceUrl = 'http://127.0.0.1:8000/predict';
    const imagePath = path.join(uploadDir, req.file.filename);

    const formData = new FormData();
    formData.append('file', fs.createReadStream(imagePath));

    const headers = formData.getHeaders ? formData.getHeaders() : {};
    const response = await axios.post(mlServiceUrl, formData, {
      headers: {
        ...headers,
        'Content-Type': 'multipart/form-data',
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity,
    });

    console.log('ML Service Response:', response.data); // Debug log

    if (!response.data || !response.data.predictions) {
      throw new Error('Invalid response format from ML service');
    }

    // Format the response to include top predictions
    const detectionResult = {
      predictions: response.data.predictions.map(pred => ({
        title: pred.movie,
        accuracy: pred.confidence,
      })),
      raw: response.data
    };

    res.json({ success: true, detectionResult });
  } catch (error) {
    console.error('Error in detection:', error.message);
    console.error('Error details:', error.response ? error.response.data : 'No response data');
    res.status(500).json({ 
      success: false,
      error: 'Error communicating with ML service', 
      details: error.message 
    });
  } finally {
    // Clean up the uploaded file
    try {
      const filePath = path.join(uploadDir, req.file.filename);
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
      }
    } catch (cleanupError) {
      console.error('Error cleaning up file:', cleanupError);
    }
  }
});

// Optional: Endpoint to delete an uploaded image
app.delete('/upload/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(uploadDir, filename);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.json({ message: 'File deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
