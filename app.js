// app.js

const express = require('express');
const bodyParser = require('body-parser');

// Import routes
const configRoutes = require('./routes/configRoutes');
const graphRoutes = require('./routes/graphRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(bodyParser.json());

// Route handling
app.use('/configuration', configRoutes);
app.use('/graph', graphRoutes);

// Start server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
