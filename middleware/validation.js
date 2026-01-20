// Example validation middleware
// This is a placeholder - implement based on your needs

const validateUser = (req, res, next) => {
  const { name, email, password } = req.body;
  
  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Name, email, and password are required.' });
  }
  
  // Email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  
  next();
};

module.exports = { validateUser };