const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // New connection without deprecated options
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected...');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
