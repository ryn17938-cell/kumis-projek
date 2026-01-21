-- KapanBeli Application Database Schema

-- Table: users
-- Stores user information for account management
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: categories
-- Groups items into logical categories (Dapur, Mandi, etc.)
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: items
-- Individual items with status tracking
CREATE TABLE items (
    id SERIAL PRIMARY KEY,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    item_name VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'Safe' CHECK (status IN ('Safe', 'Warning', 'Empty')),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance optimization
CREATE INDEX idx_items_category_id ON items(category_id);
CREATE INDEX idx_items_status ON items(status);
CREATE INDEX idx_categories_user_id ON categories(user_id);

-- Function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update the updated_at column
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for demonstration
INSERT INTO users (name, email) VALUES 
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com');

-- Sample categories
INSERT INTO categories (user_id, name) VALUES 
((SELECT id FROM users WHERE email = 'john@example.com'), 'Dapur'),
((SELECT id FROM users WHERE email = 'john@example.com'), 'Mandi'),
((SELECT id FROM users WHERE email = 'jane@example.com'), 'Ruang Tamu');

-- Sample items
INSERT INTO items (category_id, item_name, status) VALUES 
((SELECT id FROM categories WHERE name = 'Dapur' AND user_id = (SELECT id FROM users WHERE email = 'john@example.com')), 'Beras', 'Safe'),
((SELECT id FROM categories WHERE name = 'Dapur' AND user_id = (SELECT id FROM users WHERE email = 'john@example.com')), 'Sabun', 'Warning'),
((SELECT id FROM categories WHERE name = 'Mandi' AND user_id = (SELECT id FROM users WHERE email = 'john@example.com')), 'Shampoo', 'Empty');