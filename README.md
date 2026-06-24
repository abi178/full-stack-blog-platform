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

# User Features

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
* Add Comments
* View Comments

### User Features

* View User Profile
* Display Registration Information
* Like Blog Posts

### API Features

* GET Requests
* POST Requests
* PUT Requests
* DELETE Requests

### Security Features

- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Authorization Middleware
- Environment Variable Management

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

```
Full-Stack-Blogging-Platform
│
├── backend
│   │
│   ├── src
│   │   │
│   │   ├── config
│   │   │   └── db.js
│   │   │
│   │   ├── controllers
│   │   │   ├── authController.js
│   │   │   ├── postController.js
│   │   │   └── commentController.js
│   │   │
│   │   ├── middleware
│   │   │   └── authMiddleware.js
│   │   │
│   │   ├── models
│   │   │   ├── User.js
│   │   │   ├── Post.js
│   │   │   └── Comment.js
│   │   │
│   │   ├── routes
│   │   │   ├── authRoutes.js
│   │   │   ├── postRoutes.js
│   │   │   └── commentRoutes.js
│   │   │
│   │   └── server.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Profile.jsx
│   │   │   └── CreatePost.jsx
│   │   │
│   │   ├── services
│   │   │   └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
├── screenshots
│   ├── register.png
│   ├── login.png
│   ├── dashboard-1.png
│   ├── dashboard-2.png
│   ├── profile.png
│   ├── comments.png
│   ├── GET.png
│   ├── POST.png
│   ├── PUT.png
│   ├── DELETE.png
│   └── users.png
│
├── .gitignore
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

### Create Comment

```http
POST /api/comments
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

## API Testing

The REST APIs were tested using:

- Postman
- Browser Developer Tools
- MongoDB Atlas

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

# Deployment Guide

## Backend Deployment (Render)

### Step 1: Push Backend to GitHub

1. Create a GitHub repository.
2. Push the backend code to GitHub.

### Step 2: Create Render Service

1. Log in to Render.
2. Click **New +** → **Web Service**.
3. Connect the GitHub repository.
4. Configure the service:

   * Build Command:

     ```
     npm install
     ```
   * Start Command:

     ```
     node src/server.js
     ```
   * Environment:

     ```
     Node
     ```

### Step 3: Add Environment Variables

Configure the following environment variables in Render:

```env
PORT=10000
MONGO_URI=<MongoDB Connection String>
JWT_SECRET=<Secret Key>
```

### Step 4: Deploy

Click **Deploy Web Service**.

After successful deployment, Render provides a public URL similar to:

```
https://full-stack-blog-platform-fb0w.onrender.com
```

---

## Frontend Deployment (Vercel)

### Step 1: Import Repository

1. Log in to Vercel.
2. Click **Add New Project**.
3. Import the GitHub repository.

### Step 2: Configure Build Settings

If the React application is inside the `frontend` folder:

* Root Directory:

  ```
  frontend
  ```

* Build Command:

  ```
  npm run build
  ```

* Output Directory:

  ```
  dist
  ```

* Install Command:

  ```
  npm install --legacy-peer-deps
  ```

### Step 3: Configure Environment Variables

Add:

```env
VITE_API_URL=https://full-stack-blog-platform-fb0w.onrender.com/api
```

### Step 4: Deploy

Click **Deploy**.

After successful deployment, Vercel provides a public URL similar to:

```
https://full-stack-blog-platform-nu.vercel.app
```

---

## Production Architecture

```
React Frontend (Vercel)
        |
        |
        v
Node.js + Express Backend (Render)
        |
        |
        v
MongoDB Atlas Database
```

---

## Deployment Challenges and Solutions

### Dependency Conflict

Issue:

```
react-quill peer dependency conflict
```

Solution:

```
npm install --legacy-peer-deps
```

### Vite Output Directory Error

Issue:

```
No Output Directory named "build" found
```

Solution:

```
Output Directory = dist
```

### API Connection Issue

Issue:

```
Frontend unable to connect to backend
```

Solution:

```
Configure VITE_API_URL in Vercel Environment Variables
```

### Route Configuration Issue

Issue:

```
No routes matched location "/"
```

Solution:

```
Add a root route or redirect route using React Router.
```

---

## Final Deployment URLs

Frontend:


https://full-stack-blog-platform-nu.vercel.app


Backend:


https://full-stack-blog-platform-fb0w.onrender.com


Database:

```
MongoDB Atlas Cloud Database
```


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


