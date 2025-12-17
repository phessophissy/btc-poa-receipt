// Backend configuration
export const config = {
  // Server settings
  port: process.env.PORT || 3001,
  host: process.env.HOST || 'localhost',
  
  // Webhook authentication
  webhookSecret: process.env.WEBHOOK_SECRET || 'dev-webhook-secret',
  
  // Database
  dbPath: process.env.DB_PATH || './receipts.db',
  
  // Public receipt URL base
  publicBaseUrl: process.env.PUBLIC_BASE_URL || 'http://localhost:3001',
  
  // Contract info (for verification)
  contractAddress: process.env.CONTRACT_ADDRESS || 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM',
  contractName: process.env.CONTRACT_NAME || 'proof-of-action',
};
