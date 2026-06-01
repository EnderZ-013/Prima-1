const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require ('./connect/database');
const port = process.env.PORT || 8000;
const {errorHandler} = require('./middleware/errorMiddleware');
const app = express();

connectDB();
app.use('/api/tasks' , require('./routes/taskRoutes'));


app.use(errorHandler);
app.listen(port, () => console.log(`Serveri vendosur ne ${port}`));
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
