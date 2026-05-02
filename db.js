const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURL = process.env.MONGODB_URL || 'mongodb://localhost:27017/foodDelivery';
    await mongoose.connect(mongoURL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
