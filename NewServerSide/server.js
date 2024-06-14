
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: ["https://blu-e.in"],
  methods: ["POST", "GET"],
  credentials: true
})); // Use cors middleware

mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((error) => {
  console.error("Error connecting to MongoDB Atlas: ", error.message);
});

// Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subject: String,
  message: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com', // Update with your SMTP host
  port: 465, // Update with your SMTP port
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ready." });
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // // Send email to admin
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Update with the recipient's email
      subject: 'New Contact Entry',
      // text: `A new contact entry has been logged:\n\nName: ${name}\n Email: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
      html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Phone:</strong> ${phone}</p>
               <p><strong>Subject:</strong> ${subject}</p>
               <p><strong>Message:</strong> ${message}</p>
               `,
    };
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


