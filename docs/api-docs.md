# API Documentation

## Base URL
`http://localhost:3000/api`

## Authentication
Some endpoints require authentication. Include the JWT token in the Authorization header:
```
Authorization: Bearer <token>
```

## Users API

### Get All Users
- **Endpoint:** `GET /users`
- **Description:** Retrieve a list of all users
- **Authentication:** Optional
- **Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2023-01-01T00:00:00.000Z",
    "updated_at": "2023-01-01T00:00:00.000Z"
  }
]
```

### Get User by ID
- **Endpoint:** `GET /users/:id`
- **Description:** Retrieve a specific user by ID
- **Authentication:** Optional
- **Parameters:**
  - `id` (integer): User ID
- **Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "created_at": "2023-01-01T00:00:00.000Z",
  "updated_at": "2023-01-01T00:00:00.000Z"
}
```

### Create User
- **Endpoint:** `POST /users`
- **Description:** Create a new user
- **Authentication:** Not required
- **Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword"
}
```
- **Response:**
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Update User
- **Endpoint:** `PUT /users/:id`
- **Description:** Update an existing user
- **Authentication:** Required
- **Parameters:**
  - `id` (integer): User ID
- **Request Body:**
```json
{
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```
- **Response:**
```json
{
  "id": 1,
  "name": "John Smith",
  "email": "johnsmith@example.com"
}
```

### Delete User
- **Endpoint:** `DELETE /users/:id`
- **Description:** Delete a user
- **Authentication:** Required
- **Parameters:**
  - `id` (integer): User ID
- **Response:**
```json
{
  "message": "User deleted successfully"
}
```

## Error Responses
All error responses follow this format:
```json
{
  "success": false,
  "error": "Error message"
}
```

## Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `404`: Not Found
- `500`: Internal Server Error