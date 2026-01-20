// Example user service
// This contains reusable business logic functions

const User = require('../models/User');

const userService = {
  // Get user with additional processing if needed
  getUserWithDetails: async (id) => {
    const user = await User.findById(id);
    
    if (!user) {
      throw new Error('User not found');
    }
    
    // Add any additional processing here
    // For example, adding computed fields, related data, etc.
    
    return {
      ...user,
      // Add computed properties if needed
      displayName: `${user.name}`,
      // Add any other transformations
    };
  },
  
  // Create user with additional validation or processing
  createUser: async (userData) => {
    // Perform any additional validation or processing
    // For example, hashing passwords, validating business rules, etc.
    
    // Check if user already exists
    const existingUser = await User.findByEmail(userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    // Create the user
    const userId = await User.create(userData);
    
    // Return the created user
    return await User.findById(userId);
  },
  
  // Update user with additional processing
  updateUser: async (id, userData) => {
    // Perform any additional validation or processing
    
    // Update the user
    const affectedRows = await User.update(id, userData);
    
    if (affectedRows === 0) {
      throw new Error('User not found');
    }
    
    // Return updated user
    return await User.findById(id);
  }
};

module.exports = userService;