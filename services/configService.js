// services/configService.js

const configurations = [];

// Get existing configuration by flow name
const getConfiguration = (flowName) => {
  return configurations.find(config => config.flow === flowName) || {};
};

// Save or update configuration
const saveConfiguration = (newConfig) => {
  const existingConfigIndex = configurations.findIndex(config => config.flow === newConfig.flow);

  if (existingConfigIndex !== -1) {
    configurations[existingConfigIndex] = newConfig;
  } else {
    configurations.push(newConfig);
  }

  return newConfig;
};

module.exports = {
  getConfiguration,
  saveConfiguration
};
