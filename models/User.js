const db = require('../config/database');

const User = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM users');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (userData) => {
    const { name, email, password } = userData;
    const [result] = await db.execute(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );
    return result.insertId;
  },

  update: async (id, userData) => {
    const { name, email } = userData;
    const [result] = await db.execute(
      'UPDATE users SET name = ?, email = ? WHERE id = ?',
      [name, email, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM users WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = User;