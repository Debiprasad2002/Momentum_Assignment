// utils/apiErrorHandler.js

const apiErrorHandler = (err, req, res, next) => {
    res.status(500).json({
      message: err.message || 'Internal Server Error'
    });
  };
  
  module.exports = apiErrorHandler;
  