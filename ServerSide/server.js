const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use cors middleware
// MongoDB connection
mongoose.connect('mongodb+srv://MiniMedia:Samiksha123@cluster1.5sd8ioa.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// // Nodemailer configuration
// 
// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // // // Send email to admin
    

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
