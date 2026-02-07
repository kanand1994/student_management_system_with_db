const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(express.json());

// Database Connection
// Use a local MongoDB URI if not provided in .env
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/student_db';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
const studentRoutes = require('./routes/students');
app.use('/api/students', studentRoutes);

app.get('/', (req, res) => {
    res.send('Student Management System API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
