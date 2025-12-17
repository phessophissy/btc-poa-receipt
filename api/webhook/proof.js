import { storeReceipt } from '../_lib/db.js';

const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET || 'dev-webhook-secret';

// Extract print event data from Chainhook payload (handles multiple formats)
function extractProofEvent(payload) {
  try {
    // Log payload structure for debugging
    console.log('Webhook payload:', JSON.stringify(payload).slice(0, 500));
    
    const apply = payload.apply || [];
    
    for (const block of apply) {
      const transactions = block.transactions || [];
      
      for (const tx of transactions) {
        // Try multiple event paths (Hiro Platform format varies)
        const eventSources = [
          tx.metadata?.receipt?.events,
          tx.operations,
          tx.events
        ].filter(Boolean);
        
        for (const events of eventSources) {
          for (const event of events) {
            // Handle different event type names
            const isContractEvent = 
              event.type === 'SmartContractEvent' || 
              event.type === 'print_event' ||
              event.type === 'contract_event';
            
            if (isContractEvent) {
              // Try different data paths
              const data = 
                event.data?.value || 
                event.contract_event?.value ||
                event.value;
              
              if (data && data.event === 'proof-submitted') {
                return {
                  txid: tx.transaction_identifier?.hash || tx.tx_id || tx.txid,
                  userAddress: data.user,
                  proofHash: data.hash,
                  blockHeight: data['block-height'] || block.block_identifier?.index || block.index,
                  submissionId: data['submission-id']
                };
              }
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

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  
  // Verify webhook auth
  const authHeader = req.headers['authorization'];
  if (!authHeader || authHeader.replace('Bearer ', '') !== WEBHOOK_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  try {
    const payload = req.body;
    const proofData = extractProofEvent(payload);
    
    if (!proofData) {
      return res.status(200).json({ status: 'ignored', message: 'No proof event found' });
    }
    
    const receipt = await storeReceipt(proofData);
    console.log(`Stored receipt: ${receipt.id} for txid: ${receipt.txid}`);
    
    return res.status(200).json({
      status: 'success',
      receiptId: receipt.id,
      receiptUrl: `${process.env.VERCEL_URL || 'https://btc-poa.vercel.app'}/api/receipt/${receipt.id}`
    });
  } catch (err) {
    console.error('Webhook error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
