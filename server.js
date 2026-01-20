const app = require('./app');
const db = require('./config/database');

const PORT = process.env.PORT || 3000;

// Connect to database
db.authenticate()
  .then(() => {
    console.log('Database connected successfully');
    
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  })
  .catch(err => {
    console.error('Database connection failed:', err);
    process.exit(1);
  });

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down gracefully...');
  process.exit(0);
});