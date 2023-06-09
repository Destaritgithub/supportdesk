const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000;


// connect to database
connectDB()
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.get('/', (req, res) => {
  res.status(204).json({ message: 'Welcome to the Support ' });
});
// Routes
app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

app.use(errorHandler);
