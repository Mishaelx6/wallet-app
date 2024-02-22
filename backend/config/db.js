const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://mishaeljohnson56:Jeremima6@cluster0.6ciru1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;

