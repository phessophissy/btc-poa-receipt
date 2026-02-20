// Constants for dark mode toggle module
// Bitcoin Proof-of-Action Receipt System

/** Default timeout in milliseconds */
export const DEFAULT_TIMEOUT = 5000;

/** Maximum number of retry attempts */
export const MAX_RETRIES = 3;

/** Retry delay base in milliseconds (exponential backoff) */
export const RETRY_DELAY_BASE = 1000;

/** Maximum payload size in bytes (1MB) */
export const MAX_PAYLOAD_SIZE = 1048576;

/** Supported hash algorithms */
export const SUPPORTED_ALGORITHMS = ['sha256', 'sha384', 'sha512'];

/** HTTP status codes used in this module */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_ERROR: 500,
};

/** Error messages */
export const ERRORS = {
  INVALID_INPUT: 'Invalid input provided',
  TIMEOUT: 'Operation timed out',
  NOT_FOUND: 'Resource not found',
  UNAUTHORIZED: 'Authentication required',
  RATE_LIMITED: 'Too many requests, please retry later',
};

/** Module name for logging */
export const MODULE_NAME = 'dark-mode-toggle';
