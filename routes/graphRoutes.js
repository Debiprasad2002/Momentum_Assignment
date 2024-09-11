// routes/graphRoutes.js

const express = require('express');
const router = express.Router();

const { getGraphData, getDependencies } = require('../controllers/graphController');

// Routes for graph and dependencies
router.get('/', getGraphData);
router.get('/dependencies', getDependencies);

module.exports = router;
