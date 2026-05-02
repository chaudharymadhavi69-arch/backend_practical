require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const foodRoutes = require('./routes/foods');

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/foods', foodRoutes);

// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Food Delivery API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});