// /server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const contactRoutes = require('./routes/contactRoutes');
const aiRoutes = require('./routes/aiRoutes');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL // Allow requests from your React app
}));
app.use(express.json()); // To parse JSON bodies

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected successfully.'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes); // 2. Use the new routes
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error:false,
})
})

// Start the server
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });
module.exports = app;