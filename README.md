# TaskFlow – Task Management Web Application

## 📌 Overview
TaskFlow is a full-stack Task Management web application built as part of the **Full Stack Development Internship – Skill Assessment Assignment**.  
The application allows users to create, view, update, and delete tasks with secure authentication and persistent data storage.

This project demonstrates front-end development, back-end API design, database integration, and clean code organization.

---

## 🎯 Features

### Core Features
- Create, view, update, and delete tasks
- Task fields:
  - Title
  - Description
  - Status (pending / in-progress / completed)
- Responsive user interface
- Persistent data storage

### Bonus Features (Implemented ✅)
- User authentication (Register & Login)
- JWT-based protected routes
- User-specific tasks
- Clean project structure
- Modern UI with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router

### Backend
- Node.js
- Express.js
- REST API architecture
- JWT Authentication

### Database
- MongoDB
- Mongoose ODM

---

## 📁 Project Structure

```txt
TaskFlow/
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── config/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── auth/
│ │ ├── api/
│ │ └── components/
│ ├── index.html
│ └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB (local or cloud)

---

### Backend Setup
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` directory with the following variables:
  ```
  PORT=5000
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  ```
- Start the backend server:
```bash 
npm run dev
```
The server will run on `http://localhost:5000`. 

### Frontend Setup
```bash 
cd frontend
npm install
```     
- Start the frontend development server:
```bash 
npm run dev
``` 
The application will be accessible at `http://localhost:5173`.

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/register` – Register a new user   
- `POST /api/auth/login` – Login and receive a JWT token
### Tasks
- `GET /api/tasks` – Get all tasks for the authenticated user   
- `POST /api/tasks` – Create a new task
- `PUT /api/tasks/:id` – Update a task by ID
- `DELETE /api/tasks/:id` – Delete a task by ID
*Note: All task routes require a valid JWT token in the `Authorization` header.*
---
## 🌐 Deployment

- Backend can be deployed on platforms like Heroku, Vercel, or DigitalOcean.
- Frontend can be deployed on platforms like Vercel, Netlify, or GitHub Pages.
- Ensure environment variables are set correctly in the deployment environment. 
---

## 👤 Author
- Raj Kumar
- Full Stack Developer

---
## 📄 License
This project is developed for learning and assessment purposes.