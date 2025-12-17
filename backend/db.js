import fs from 'fs';
import crypto from 'crypto';
import { config } from './config.js';

// Simple JSON file-based storage (production: use a real database)
const DB_FILE = config.dbPath.replace('.db', '.json');

// In-memory store with file persistence
let receipts = [];
let indexes = {
  byId: new Map(),
  byTxid: new Map(),
  byHash: new Map(),
  byUser: new Map()
};

// Load from file on startup
function loadDb() {
  try {
    if (fs.existsSync(DB_FILE)) {
      const data = JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
      receipts = data.receipts || [];
      rebuildIndexes();
    }
  } catch (err) {
    console.error('Error loading database:', err);
    receipts = [];
  }
}

// Save to file
function saveDb() {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify({ receipts }, null, 2));
  } catch (err) {
    console.error('Error saving database:', err);
  }
}

// Rebuild in-memory indexes
function rebuildIndexes() {
  indexes = {
    byId: new Map(),
    byTxid: new Map(),
    byHash: new Map(),
    byUser: new Map()
  };
  
  for (const receipt of receipts) {
    indexes.byId.set(receipt.id, receipt);
    indexes.byTxid.set(receipt.txid, receipt);
    indexes.byHash.set(receipt.proof_hash, receipt);
    
    if (!indexes.byUser.has(receipt.user_address)) {
      indexes.byUser.set(receipt.user_address, []);
    }
    indexes.byUser.get(receipt.user_address).push(receipt);
  }
}

// Initialize database
loadDb();

// Generate a short, URL-friendly receipt ID
function generateReceiptId() {
  return crypto.randomBytes(8).toString('base64url');
}

// Store a new receipt
export function storeReceipt(data) {
  const { txid, userAddress, proofHash, blockHeight, submissionId } = data;
  
  // Check if already exists
  if (indexes.byTxid.has(txid)) {
    return indexes.byTxid.get(txid);
  }
  
  const id = generateReceiptId();
  const timestamp = new Date().toISOString();
  
  const receipt = {
    id,
    txid,
    user_address: userAddress,
    proof_hash: proofHash,
    block_height: blockHeight,
    submission_id: submissionId,
    timestamp,
    created_at: timestamp
  };
  
  receipts.push(receipt);
  indexes.byId.set(id, receipt);
  indexes.byTxid.set(txid, receipt);
  indexes.byHash.set(proofHash, receipt);
  
  if (!indexes.byUser.has(userAddress)) {
    indexes.byUser.set(userAddress, []);
  }
  indexes.byUser.get(userAddress).push(receipt);
  
  saveDb();
  
  return receipt;
}

// Get receipt by ID
export function getReceiptById(id) {
  return indexes.byId.get(id) || null;
}

// Get receipt by txid
export function getReceiptByTxid(txid) {
  return indexes.byTxid.get(txid) || null;
}

// Get receipts by user address
export function getReceiptsByUser(userAddress, limit = 50) {
  const userReceipts = indexes.byUser.get(userAddress) || [];
  return userReceipts
    .sort((a, b) => b.block_height - a.block_height)
    .slice(0, limit);
}

// Get receipt by proof hash
export function getReceiptByHash(proofHash) {
  return indexes.byHash.get(proofHash) || null;
}

// Verify a proof exists
export function verifyProof(proofHash) {
  const receipt = getReceiptByHash(proofHash);
  return receipt ? { verified: true, receipt } : { verified: false };
}
