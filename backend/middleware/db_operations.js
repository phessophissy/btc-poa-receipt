// Middleware for db operations
// BTC Proof-of-Action Receipt System

/**
 * Request logging middleware
 * @param {Object} req - HTTP request
 * @param {Object} res - HTTP response
 * @param {Function} next - Next handler
 */
export function requestLogger(req, res, next) {
  const start = Date.now();
  const { method, url } = req;
  
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[${new Date().toISOString()}] ${method} ${url} ${res.statusCode} ${duration}ms`);
  });
  
  if (typeof next === 'function') next();
}

/**
 * Input validation middleware for db operations
 * @param {Object} schema - Validation schema
 * @returns {Function} Middleware function
 */
export function validateRequest(schema) {
  return (req, res, next) => {
    const errors = [];
    
    if (schema.body) {
      for (const [field, rules] of Object.entries(schema.body)) {
        const value = req.body?.[field];
        if (rules.required && (value === undefined || value === null)) {
          errors.push(`Missing required field: ${field}`);
        }
        if (rules.type && value !== undefined && typeof value !== rules.type) {
          errors.push(`Field '${field}' must be of type ${rules.type}`);
        }
      }
    }
    
    if (errors.length > 0) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ errors }));
      return;
    }
    
    if (typeof next === 'function') next();
  };
}

/**
 * Error handling middleware
 * @param {Error} err - Error object
 * @param {Object} req - HTTP request
 * @param {Object} res - HTTP response
 */
export function errorHandler(err, req, res) {
  console.error(`[Error] ${err.message}`, err.stack);
  
  const statusCode = err.statusCode || 500;
  const response = {
    error: err.name || 'InternalError',
    message: statusCode === 500 ? 'Internal server error' : err.message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };
  
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(response));
}
