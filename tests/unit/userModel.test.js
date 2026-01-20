// Example unit test for user model
// This is a basic test structure - expand based on your needs

const User = require('../models/User');

describe('User Model', () => {
  describe('findAll', () => {
    it('should return all users', async () => {
      const users = await User.findAll();
      expect(Array.isArray(users)).toBe(true);
    });
  });

  describe('findById', () => {
    it('should return a user by ID', async () => {
      const userId = 1;
      const user = await User.findById(userId);
      expect(user).toBeDefined();
      if (user) {
        expect(user.id).toBe(userId);
      }
    });
  });

  describe('create', () => {
    it('should create a new user', async () => {
      const userData = {
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      };
      
      const userId = await User.create(userData);
      expect(typeof userId).toBe('number');
    });
  });
});