// routes/configRoutes.js

const express = require('express');
const router = express.Router();

const { getConfiguration, postConfiguration } = require('../controllers/configController');
const mockDbMiddleware = require('../middleware/mockDbMiddleware');

// Routes
router.get('/', getConfiguration);
router.post('/', mockDbMiddleware, postConfiguration);

module.exports = router;
