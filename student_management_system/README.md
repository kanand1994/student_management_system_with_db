# Student Management System

A full-stack Student Management System built using the MERN stack (MongoDB, Express, React, Node.js).

## Features
- **Add Student**: Form to add new students to the database.
- **List Students**: View all students in a table.
- **Search**: Filter students by name in real-time.
- **Delete**: Remove students from the system.
- **Stats**: View the total count of students.

## Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher is recommended; this project supports v20).
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally or have a connection string).

## Installation & Setup

### 1. Backend (Server)

Navigate to the `server` directory and install dependencies:

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory (if not exists) with the following content:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/student_db
```

Start the backend server:
```bash
npm run dev
```
The server will start on `http://localhost:5000`.

### 2. Frontend (Client)

Open a new terminal, navigate to the `client` directory, and install dependencies:

```bash
cd client
npm install
```

Start the frontend development server:
```bash
npm run dev
```
The application will be accessible at `http://localhost:5173`.

## Troubleshooting

### "Error loading students"
- Ensure the backend server is running on port 5000.
- Ensure MongoDB is running.
- Check the browser console (`F12`) for specific error messages.

### CORS Errors
- If you see CORS errors in the console, the backend is configured to accept requests from all origins (`cors({ origin: '*' })`) to facilitate development. Ensure your backend has restarted after any code changes.

### Node.js Version
- This project uses Vite v5 for better compatibility with Node.js v20+. If you encounter version issues, ensure you are using a compatible Node.js version.
