const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin:["https://blu-e-startup-project1.vercel.app"],
  methods:["POST","GET"],
  credentials: true
})); // Use cors middleware


mongoose.connect("mongodb+srv://shashtavbharatofficial:BluE12345678@cluster1.xv6ghjm.mongodb.net/").then(() => {
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
// const transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com', // Update with your SMTP host
//   port: 465, // Update with your SMTP port
//   secure: true,
//   auth: {
//     user: '', // Update with your email
//     pass: '' // Update with your email password
//   }
// });

app.get("/", (req, res) => {
  res.status(200).json({ message: "Ready." });
});

// Routes
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    const newContact = new Contact({ name, email, phone, subject, message });
    await newContact.save();

    // // Send email to admin
    // const mailOptions = {
    //   from: '',///yours email address 
    //   to: '', // Update with whom u want to send
    //   subject: 'New Contact Entry',
    //   text: `A new contact entry has been logged:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    // };
    // await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Contact saved successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


