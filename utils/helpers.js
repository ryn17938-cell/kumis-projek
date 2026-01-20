// Utility functions for the application

// Generate a random string
const generateRandomString = (length) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Hash password (placeholder - implement with bcrypt)
const hashPassword = async (password) => {
  // In a real implementation, you would use bcrypt:
  // const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10;
  // return await bcrypt.hash(password, saltRounds);
  
  // For now, returning the password as-is (DO NOT USE IN PRODUCTION)
  return password;
};

// Validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Format date to YYYY-MM-DD HH:MM:SS
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hours = String(d.getHours()).padStart(2, '0');
  const minutes = String(d.getMinutes()).padStart(2, '0');
  const seconds = String(d.getSeconds()).padStart(2, '0');
  
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

module.exports = {
  generateRandomString,
  hashPassword,
  isValidEmail,
  formatDate
};