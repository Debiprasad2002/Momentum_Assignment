// controllers/configController.js

const configService = require('../services/configService');

// GET /configuration?flow=flow_name
const getConfiguration = (req, res) => {
  const flowName = req.query.flow;
  const configuration = configService.getConfiguration(flowName);
  res.json(configuration);
};

// POST /configuration
const postConfiguration = (req, res) => {
  const newConfig = req.body;
  const savedConfig = configService.saveConfiguration(newConfig);
  res.status(201).json(savedConfig);
};

module.exports = {
  getConfiguration,
  postConfiguration
};

