const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const dbUrl = process.env.DB_URL;

const connectDB = async () => {
  try {
     const conn = await mongoose.connect(dbUrl)

    console.log(`MongoDB connected: ${conn.connection.host}`.bgGreen.black.bold.underline)
  } catch (err) {
    console.log(`Error: ${err.message}`.bgRed.bold.underline)
    process.exit(1)
  }
}

module.exports = connectDB
