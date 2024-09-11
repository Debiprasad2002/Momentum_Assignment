// controllers/graphController.js

const { mockGraphData, mockDependencies } = require('../data/mockGraphData');

// GET /graph
const getGraphData = (req, res) => {
  res.json(mockGraphData);
};

// GET /graph/dependencies
const getDependencies = (req, res) => {
  res.json(mockDependencies);
};

module.exports = {
  getGraphData,
  getDependencies
};
