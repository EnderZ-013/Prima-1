const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./connect/database');
<<<<<<< HEAD

const port = process.env.PORT || 8000;

const { errorHandler } = require('./middleware/errorMiddleware');

const app = express();

connectDB();

=======
const { errorHandler } = require('./middleware/errorMiddleware');
const cors = require('cors');


const port = process.env.PORT || 8000;

connectDB();

const app = express();

>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

<<<<<<< HEAD
// Error middleware
app.use(errorHandler);

app.listen(port, () =>
    console.log(`Serveri vendosur ne ${port}`)
);
=======
app.use(cors());

// Error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Serveri vendosur ne portin ${port}`);
});
>>>>>>> 30b6188a690a815cbeb90b1ad82b6649f9070bac
