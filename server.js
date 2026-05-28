const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');


const port = process.env.PORT || 8000;

connectDB();

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(cors());

// Error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Serveri vendosur ne portin ${port}`);
});