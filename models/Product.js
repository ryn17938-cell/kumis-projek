const db = require('../config/database');

const Product = {
  findAll: async () => {
    const [rows] = await db.execute('SELECT * FROM products');
    return rows;
  },

  findById: async (id) => {
    const [rows] = await db.execute('SELECT * FROM products WHERE id = ?', [id]);
    return rows[0];
  },

  create: async (productData) => {
    const { name, description, price, stock_quantity } = productData;
    const [result] = await db.execute(
      'INSERT INTO products (name, description, price, stock_quantity) VALUES (?, ?, ?, ?)',
      [name, description, price, stock_quantity]
    );
    return result.insertId;
  },

  update: async (id, productData) => {
    const { name, description, price, stock_quantity } = productData;
    const [result] = await db.execute(
      'UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ? WHERE id = ?',
      [name, description, price, stock_quantity, id]
    );
    return result.affectedRows;
  },

  delete: async (id) => {
    const [result] = await db.execute('DELETE FROM products WHERE id = ?', [id]);
    return result.affectedRows;
  }
};

module.exports = Product;