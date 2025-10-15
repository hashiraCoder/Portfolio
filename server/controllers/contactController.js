
const Message = require('../models/Message');
const nodemailer = require('nodemailer');

// Setup Nodemailer transporter (Gmail SMTP via App Password)
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Save message to database
    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT, // Your email to receive notifications
      subject: `New Portfolio Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Try to send email, but do not fail the whole request if it errors
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email delivery failed:', emailError);
      // Continue: message is saved; we still return success to the client
    }

    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ success: false, message: 'Failed to send message.' });
  }
};