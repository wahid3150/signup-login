# User Registration and Login System

## Overview

This project implements a user registration and login system using JSON Web Tokens (JWT) for authentication, Joi for data validation, and Bcrypt for password hashing. The goal is to provide a secure and efficient way for users to register, log in, and manage their sessions.

## Features

- **User Registration**: Allows users to create an account with email and password.
- **User Login**: Authenticates users using their credentials and issues a JWT.
- **Password Hashing**: Utilizes Bcrypt to securely hash passwords before storing them in the database.
- **Input Validation**: Ensures that user input is validated using Joi, preventing invalid data from being processed.
- **Token-based Authentication**: Uses JWT to manage user sessions, providing secure access to protected routes.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **JWT (JSON Web Tokens)**: For secure token-based authentication.
- **Joi**: For input validation to ensure data integrity.
- **Bcrypt**: For hashing and verifying passwords securely.
- **MongoDB**: (or any other database of your choice) for storing user data.

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB (or your preferred database) running locally or on a remote server

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/wahid3150/signup-login.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Create a .env file in the root directory and add the following environment variables:
   ```bash
   PORT=3000
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_connection_string

## Running the Application

### Start the server with the following command:

```bash
   npm start

## Validation and Error Handling

Input validation is handled using Joi, ensuring that all incoming data is checked against predefined schemas. Error responses will return appropriate status codes and messages for failed validations.

## Security Considerations

- Passwords are hashed using Bcrypt before being stored in the database.
- JWTs are used to manage user sessions, ensuring that sensitive information is not exposed.

## Contributing

- If you'd like to contribute to this project, please follow these steps:

 - Fork the repository.
 - Create a new branch for your feature or bug fix.
 - Make your changes and commit them.
 - Push your changes and submit a pull request.

## Acknowledgments:
- JWT
- Joi
- Bcrypt
```
