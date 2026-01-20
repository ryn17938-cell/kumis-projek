# Setup Guide

## Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MySQL](https://www.mysql.com/) (v8.0 or higher)
- [Git](https://git-scm.com/)

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd kumis-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Copy the `.env.example` file to create your own `.env` file:

```bash
cp .env.example .env
```

Then update the values in the `.env` file with your local configuration:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=kumis_project
DB_PORT=3306

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=24h

# Other Configuration
SALT_ROUNDS=10
```

### 4. Database Setup

#### Option 1: Using SQL Schema File

1. Create a database in MySQL:
```sql
CREATE DATABASE kumis_project;
```

2. Import the schema from `database/schema.sql`:
```bash
mysql -u your_username -p kumis_project < database/schema.sql
```

#### Option 2: Manual Setup

Execute the SQL commands in `database/schema.sql` manually in your MySQL client.

## Running the Application

### Development Mode

```bash
npm run dev
```

The server will start on `http://localhost:3000`.

### Production Mode

```bash
npm start
```

## Testing

Run the test suite:

```bash
npm test
```

For continuous testing during development:

```bash
npm run test:watch
```

## Database Migrations

Run database migrations:

```bash
npm run migrate
```

## Project Structure

```
project-root/
├── README.md
├── package.json
├── .env.example
├── .gitignore
├── app.js
├── server.js
├── config/
│   ├── database.js
│   └── index.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── error-handler.js
├── routes/
│   ├── index.js
│   ├── users.js
│   ├── products.js
│   └── orders.js
├── controllers/
│   ├── userController.js
│   ├── productController.js
│   └── orderController.js
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
├── services/
│   ├── userService.js
│   └── productService.js
├── utils/
│   ├── helpers.js
│   └── validators.js
├── validations/
│   └── userValidation.js
├── database/
│   ├── migrations/
│   ├── seeds/
│   └── schema.sql
├── docs/
│   ├── api-docs.md
│   └── setup-guide.md
├── tests/
│   ├── unit/
│   └── integration/
└── public/
    └── uploads/
```

## Common Issues

### Port Already in Use

If you get an error saying the port is already in use, change the `PORT` value in your `.env` file.

### Database Connection Error

Make sure:
1. MySQL server is running
2. Database credentials in `.env` are correct
3. Database specified in `DB_NAME` exists

### Missing Dependencies

If you encounter errors about missing modules, run:

```bash
npm install
```

## Useful Commands

- `npm run dev` - Start development server with auto-reload
- `npm start` - Start production server
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run migrate` - Run database migrations