# Kumis Project

Backend project for team development using Node.js, Express, and MySQL.

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

## Setup Instructions

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env` and fill in your environment variables
4. Set up your MySQL database
5. Run the application: `npm run dev`

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon
- `npm test` - Run tests
- `npm run migrate` - Run database migrations

## Git Branching Strategy

- `main` - Production-ready code
- `backend` - Backend development
- `database` - Database schema changes
- `frontend` - Frontend development
- `docs` - Documentation updates

## API Endpoints

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user
- `GET /health` - Health check endpoint