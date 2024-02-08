const dotenv = require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');
const fileUpload = require('express-fileupload');

// Load environment variables
dotenv;

// Connect to database
connectDB();

// Create Express app
const app = express();

// Configure CORS
app.use(cors({
  origin: ['https://fintech-bank-alpha.vercel.app'], // Specify allowed origins
  methods: ['GET', 'POST'], // Specify allowed HTTP methods
  credentials: true // Allow credentials in cross-origin requests
}));

// Enable CORS preflight options
app.options('*', cors());

// File upload middleware
app.use(fileUpload({
  useTempFiles: true,
}));

// JSON and URL-encoded body parsing middleware
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Define routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/', require('./routes/transactionRoutes'));
app.use('/api/', require('./routes/requestRoutes'));
app.use('/api/', require('./routes/uploadRoutes'));

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>
  console.log(
    `Server Running on Port: http://localhost:${PORT} at ${new Date().toLocaleString(
      'en-US'
    )}`
  )
);

