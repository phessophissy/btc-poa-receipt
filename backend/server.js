import http from 'http';
import { config } from './config.js';
import { storeReceipt, getReceiptById, getReceiptByTxid, getReceiptsByUser, verifyProof } from './db.js';

// Parse JSON body from request
async function parseBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (e) {
        reject(new Error('Invalid JSON'));
      }
    });
    req.on('error', reject);
  });
}

// Send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// Verify webhook authorization
function verifyWebhookAuth(req) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return false;
  const token = authHeader.replace('Bearer ', '');
  return token === config.webhookSecret;
}

// Extract print event data from Chainhook payload
function extractProofEvent(payload) {
  try {
    // Chainhook payload structure
    const apply = payload.apply || [];
    
    for (const block of apply) {
      const transactions = block.transactions || [];
      
      for (const tx of transactions) {
        const events = tx.metadata?.receipt?.events || [];
        
        for (const event of events) {
          if (event.type === 'SmartContractEvent' || event.type === 'print_event') {
            const data = event.data?.value || event.contract_event?.value;
            
            // Check if this is our proof-submitted event
            if (data && data.event === 'proof-submitted') {
              return {
                txid: tx.transaction_identifier?.hash || tx.txid,
                userAddress: data.user,
                proofHash: data.hash,
                blockHeight: data['block-height'] || block.block_identifier?.index,
                submissionId: data['submission-id']
              };
            }
          }
        }
      }
    }
    return null;
  } catch (err) {
    console.error('Error extracting proof event:', err);
    return null;
  }
}

// Route handler
async function handleRequest(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method;
  
  // CORS preflight
  if (method === 'OPTIONS') {
    sendJson(res, 204, {});
    return;
  }
  
  // Health check
  if (path === '/health' && method === 'GET') {
    sendJson(res, 200, { status: 'ok', timestamp: new Date().toISOString() });
    return;
  }
  
  // Webhook endpoint for Chainhook
  if (path === '/api/webhook/proof' && method === 'POST') {
    if (!verifyWebhookAuth(req)) {
      sendJson(res, 401, { error: 'Unauthorized' });
      return;
    }
    
    try {
      const payload = await parseBody(req);
      const proofData = extractProofEvent(payload);
      
      if (!proofData) {
        sendJson(res, 200, { status: 'ignored', message: 'No proof event found' });
        return;
      }
      
      const receipt = storeReceipt(proofData);
      console.log(`Stored receipt: ${receipt.id} for txid: ${receipt.txid}`);
      
      sendJson(res, 200, {
        status: 'success',
        receiptId: receipt.id,
        receiptUrl: `${config.publicBaseUrl}/receipt/${receipt.id}`
      });
    } catch (err) {
      console.error('Webhook error:', err);
      sendJson(res, 500, { error: 'Internal server error' });
    }
    return;
  }
  
  // Get receipt by ID
  if (path.startsWith('/receipt/') && method === 'GET') {
    const id = path.split('/')[2];
    const receipt = getReceiptById(id);
    
    if (!receipt) {
      sendJson(res, 404, { error: 'Receipt not found' });
      return;
    }
    
    sendJson(res, 200, {
      id: receipt.id,
      txid: receipt.txid,
      userAddress: receipt.user_address,
      proofHash: receipt.proof_hash,
      blockHeight: receipt.block_height,
      submissionId: receipt.submission_id,
      timestamp: receipt.timestamp,
      verifyUrl: `https://explorer.stacks.co/txid/${receipt.txid}`
    });
    return;
  }
  
  // Get receipt by txid
  if (path === '/api/receipt/by-txid' && method === 'GET') {
    const txid = url.searchParams.get('txid');
    if (!txid) {
      sendJson(res, 400, { error: 'txid parameter required' });
      return;
    }
    
    const receipt = getReceiptByTxid(txid);
    if (!receipt) {
      sendJson(res, 404, { error: 'Receipt not found' });
      return;
    }
    
    sendJson(res, 200, receipt);
    return;
  }
  
  // Get receipts by user
  if (path === '/api/receipts/by-user' && method === 'GET') {
    const user = url.searchParams.get('address');
    if (!user) {
      sendJson(res, 400, { error: 'address parameter required' });
      return;
    }
    
    const receipts = getReceiptsByUser(user);
    sendJson(res, 200, { receipts });
    return;
  }
  
  // Verify a proof hash
  if (path === '/api/verify' && method === 'GET') {
    const hash = url.searchParams.get('hash');
    if (!hash) {
      sendJson(res, 400, { error: 'hash parameter required' });
      return;
    }
    
    const result = verifyProof(hash);
    sendJson(res, 200, result);
    return;
  }
  
  // 404 for unknown routes
  sendJson(res, 404, { error: 'Not found' });
}

// Create and start server
const server = http.createServer(handleRequest);

server.listen(config.port, config.host, () => {
  console.log(`🚀 PoA Receipt Backend running at http://${config.host}:${config.port}`);
  console.log(`📝 Webhook endpoint: http://${config.host}:${config.port}/api/webhook/proof`);
});
