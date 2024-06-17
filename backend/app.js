// Import required modules
const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

// Set up MongoDB connection
mongoose.connect('mongodb://localhost:27017/piguard', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up Express.js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// Define routes
const nodeRoutes = require('./routes/node.routes');
app.use('/api/nodes', nodeRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PiGuard backend listening on port ${port}`);
});
