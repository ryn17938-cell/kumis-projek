// Error handling middleware
const errorHandler = (err, req, res, next) => {
  // Log error
  console.error(err.stack);
  
  // Set default error
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';
  
  // Mongoose bad ObjectId
  if (err.name === 'CastError') {
    statusCode = 404;
    message = 'Resource not found';
  }
  
  // Mongoose duplicate key
  if (err.code === 11000) {
    statusCode = 400;
    message = 'Duplicate field value entered';
  }
  
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    statusCode = 400;
    const errors = Object.values(err.errors).map(e => e.message);
    message = errors.join(', ');
  }
  
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

module.exports = errorHandler;