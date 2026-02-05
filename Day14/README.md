# TODO App with Authorization

A simple TODO backend application built using **Node.js, Express, Supabase**, and **JWT Authentication**.

---

## Features

- User Signup & Login
- Password hashing using bcrypt
- JWT token authentication (1 hour expiry)
- Protected TODO routes
- Users can manage only their own TODOs

---

## Tech Stack

- Node.js
- Express.js
- Supabase (PostgreSQL)
- bcrypt
- jsonwebtoken
- dotenv

---

## Project Structure

src/
 ├── config/
 │    └── supabase.js
 ├── middleware/
 │    └── auth.middleware.js
 ├── routes/
 │    ├── auth.routes.js
 │    └── todo.routes.js
 ├── controllers/
 ├── app.js
 └── server.js

---

## Setup Steps

### 1. Install Dependencies
```bash
npm install
