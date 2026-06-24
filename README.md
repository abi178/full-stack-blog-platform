# Full Stack Blogging Platform

## Project Overview

The Full Stack Blogging Platform is a modern web application that allows users to register, authenticate securely, create and manage blog posts, search content, like posts, and manage their personal profiles.

The application follows a full-stack architecture using React for the frontend, Node.js and Express.js for the backend, MongoDB for database management, and JWT authentication for secure user access.

---

# Objectives

* Build a complete full-stack web application.
* Implement secure user authentication using JWT.
* Create RESTful APIs for data management.
* Connect a React frontend with an Express backend.
* Perform CRUD operations on blog posts.
* Manage user sessions and protected routes.
* Store and retrieve data using MongoDB.

---

# Features

### User Authentication

* User Registration
* User Login
* JWT Token Authentication
* Protected Routes
* Persistent User Sessions

### Blog Management

* Create Blog Posts
* View Blog Posts
* Edit Blog Posts
* Delete Blog Posts
* Search Blog Posts

### User Features

* View User Profile
* Display Registration Information
* Like Blog Posts

### API Features

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests

---

# Technology Stack

## Frontend

* React
* React Router DOM
* Axios
* Context API
* CSS3

## Backend

* Node.js
* Express.js

## Database

* MongoDB
* Mongoose

## Authentication

* JSON Web Token (JWT)
* bcryptjs

---

# Project Architecture

Frontend (React)

* User Interface
* Routing
* Authentication Context
* API Communication

Backend (Node.js + Express)

* Routes
* Controllers
* Middleware
* Database Models

Database (MongoDB)

* Users Collection
* Posts Collection

---

# Folder Structure

```text
Full-Stack-Blogging-Platform
│
├── backend
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── controllers
│   │   ├── authController.js
│   │   └── postController.js
│   │
│   ├── middleware
│   │   └── authMiddleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Post.js
│   │
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── postRoutes.js
│   │
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend
│   │
│   ├── src
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# Installation Guide

## Clone the Repository

```bash
git clone <repository-url>
```

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a .env file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Start backend server:

```bash
npm run dev
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run frontend application:

```bash
npm run dev
```

---

# API Endpoints

## Authentication Routes

### Register User

```http
POST /api/auth/register
```

### Login User

```http
POST /api/auth/login
```

### Get User Profile

```http
GET /api/auth/me
```

---

## Blog Routes

### Create Post

```http
POST /api/posts
```

### Get All Posts

```http
GET /api/posts
```

### Get Single Post

```http
GET /api/posts/:id
```

### Update Post

```http
PUT /api/posts/:id
```

### Delete Post

```http
DELETE /api/posts/:id
```

### Like Post

```http
PUT /api/posts/:id/like
```

---

# Authentication Flow

1. User registers an account.
2. User logs in using email and password.
3. Server validates credentials.
4. JWT token is generated.
5. Token is stored in local storage.
6. Protected routes verify the token.
7. Authorized users can access secured features.

---

# State Management

The application uses React Context API for:

* Authentication State
* User Session Management
* Login Persistence
* Logout Handling

---

# Error Handling

The application includes:

* Form Validation
* Invalid Login Detection
* Unauthorized Access Protection
* API Error Responses
* Database Error Handling

---

# Screenshots

The project includes screenshots demonstrating:

* User Registration
![Register](/screenshots/register.png)
* User Login
![Login](/screenshots/login.png)
* Dashboard Interface
![Dashboard 1](/screenshots/dashboard-1.png)
![Dashboard 2](/screenshots/dashboard-2.png)
* Profile Page
![Profile](/screenshots/profile.png)
* GET API Request
![GET](/screenshots/GET.png)
* POST API Request
![POST](/screenshots/POST.png)
* PUT API Request
![PUT](/screenshots/PUT.png)
* DELETE API Request
![DELETE](/screenshots/DELETE.png)

---

# Challenges Faced

* Implementing JWT Authentication
* Connecting React Frontend with Express Backend
* Managing Protected Routes
* Handling API Requests and Responses
* Integrating MongoDB Database
* Implementing CRUD Operations

---

# Conclusion

The Full Stack Blogging Platform successfully demonstrates full-stack web development concepts including frontend development, backend API creation, authentication, database integration, state management, and CRUD operations. The project provides a solid foundation for scalable blogging and content management applications.


