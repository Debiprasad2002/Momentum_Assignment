// middleware/mockDbMiddleware.js

const mockDbMiddleware = (req, res, next) => {
    const { is_db_mocked } = req.body;
  
    if (is_db_mocked) {
      req.body.db_config = null;  // Disable DB config
    }
    next();
  };
  
  module.exports = mockDbMiddleware;
  