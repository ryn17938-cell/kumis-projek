const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable cross-origin requests
app.use(express.json({ limit: '10mb' })); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/api/users', userRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;