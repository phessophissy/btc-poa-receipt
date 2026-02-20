// Error definitions for tx status refresh
// BTC Proof-of-Action Receipt System

/**
 * Base error class for tx status refresh module
 */
export class txstatusrefreshError extends Error {
  constructor(message, code, statusCode = 500) {
    super(message);
    this.name = 'txstatusrefreshError';
    this.code = code;
    this.statusCode = statusCode;
    this.timestamp = new Date().toISOString();
  }

  toJSON() {
    return {
      error: this.name,
      message: this.message,
      code: this.code,
      timestamp: this.timestamp,
    };
  }
}

/**
 * Validation error for invalid inputs
 */
export class ValidationError extends txstatusrefreshError {
  constructor(field, reason) {
    super(`Validation failed for '${field}': ${reason}`, 'VALIDATION_ERROR', 400);
    this.field = field;
    this.reason = reason;
  }
}

/**
 * Not found error
 */
export class NotFoundError extends txstatusrefreshError {
  constructor(resource, identifier) {
    super(`${resource} not found: ${identifier}`, 'NOT_FOUND', 404);
    this.resource = resource;
    this.identifier = identifier;
  }
}

/**
 * Timeout error
 */
export class TimeoutError extends txstatusrefreshError {
  constructor(operation, timeoutMs) {
    super(`Operation '${operation}' timed out after ${timeoutMs}ms`, 'TIMEOUT', 504);
    this.operation = operation;
    this.timeoutMs = timeoutMs;
  }
}
