const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const expenseRoutes = require('./routes/expenseRoutes');

dotenv.config();  // Load environment variables from .env file

const app = express();
app.use(express.json());  // Middleware to parse JSON requests

// Route handlers
app.use('/users', userRoutes);
app.use('/expenses', expenseRoutes);

// Connect to MongoDB (Remove deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
