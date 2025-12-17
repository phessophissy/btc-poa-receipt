import { AppConfig, showConnect, UserSession } from '@stacks/connect';
import { StacksTestnet, StacksMainnet } from '@stacks/network';
import { 
  makeContractCall, 
  bufferCV,
  broadcastTransaction,
  AnchorMode,
  PostConditionMode
} from '@stacks/transactions';

// Configuration
const CONFIG = {
  // Mainnet deployment
  network: 'mainnet',
  contractAddress: 'SP31G2FZ5JN87BATZMP4ZRYE5F7WZQDNEXJ7G7X97',
  contractName: 'proof-of-action',
  appName: 'Bitcoin Proof-of-Action',
  appIcon: window.location.origin + '/favicon.ico',
  backendUrl: window.location.origin,
  fee: 1000 // microSTX (0.001 STX)
};

// App config and user session
const appConfig = new AppConfig(['store_write']);
const userSession = new UserSession({ appConfig });

// Network setup
const network = CONFIG.network === 'mainnet' 
  ? new StacksMainnet() 
  : new StacksTestnet();

// State
let currentHash = null;
let currentDescription = '';

// DOM Elements
const elements = {
  connectBtn: document.getElementById('connect-btn'),
  disconnectBtn: document.getElementById('disconnect-btn'),
  walletStatus: document.getElementById('wallet-status'),
  walletInfo: document.getElementById('wallet-info'),
  userAddress: document.getElementById('user-address'),
  submitSection: document.getElementById('submit-section'),
  proofForm: document.getElementById('proof-form'),
  contentInput: document.getElementById('content'),
  descriptionInput: document.getElementById('description'),
  hashPreview: document.getElementById('hash-preview'),
  computedHash: document.getElementById('computed-hash'),
  submitBtn: document.getElementById('submit-btn'),
  statusSection: document.getElementById('status-section'),
  statusMessage: document.getElementById('status-message'),
  txResult: document.getElementById('tx-result'),
  txLink: document.getElementById('tx-link'),
  receiptSection: document.getElementById('receipt-section'),
  receiptId: document.getElementById('receipt-id'),
  receiptHash: document.getElementById('receipt-hash'),
  receiptBlock: document.getElementById('receipt-block'),
  receiptTimestamp: document.getElementById('receipt-timestamp'),
  receiptUrl: document.getElementById('receipt-url'),
  newProofBtn: document.getElementById('new-proof-btn'),
  verifyForm: document.getElementById('verify-form'),
  verifyContent: document.getElementById('verify-content'),
  verifyResult: document.getElementById('verify-result')
};

// Utility: Hash content using SHA-256
async function sha256(content) {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return new Uint8Array(hashBuffer);
}

// Utility: Convert Uint8Array to hex string
function toHex(bytes) {
  return Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('');
}

// Check if user is logged in
function isLoggedIn() {
  return userSession.isUserSignedIn();
}

// Get user address
function getUserAddress() {
  if (!isLoggedIn()) return null;
  const userData = userSession.loadUserData();
  return CONFIG.network === 'mainnet'
    ? userData.profile.stxAddress.mainnet
    : userData.profile.stxAddress.testnet;
}

// Update UI based on auth state
function updateAuthUI() {
  if (isLoggedIn()) {
    elements.walletStatus.classList.add('hidden');
    elements.walletInfo.classList.remove('hidden');
    elements.userAddress.textContent = getUserAddress();
    elements.submitSection.classList.remove('hidden');
  } else {
    elements.walletStatus.classList.remove('hidden');
    elements.walletInfo.classList.add('hidden');
    elements.submitSection.classList.add('hidden');
    elements.statusSection.classList.add('hidden');
    elements.receiptSection.classList.add('hidden');
  }
}

// Connect wallet
function connectWallet() {
  showConnect({
    appDetails: {
      name: CONFIG.appName,
      icon: CONFIG.appIcon
    },
    redirectTo: '/',
    onFinish: () => {
      updateAuthUI();
    },
    userSession
  });
}

// Disconnect wallet
function disconnectWallet() {
  userSession.signUserOut('/');
  updateAuthUI();
}

// Update hash preview when content changes
async function updateHashPreview() {
  const content = elements.contentInput.value.trim();
  
  if (content) {
    const hashBytes = await sha256(content);
    currentHash = hashBytes;
    elements.computedHash.textContent = '0x' + toHex(hashBytes);
    elements.hashPreview.classList.remove('hidden');
    elements.submitBtn.disabled = false;
  } else {
    currentHash = null;
    elements.hashPreview.classList.add('hidden');
    elements.submitBtn.disabled = true;
  }
}

// Submit proof to blockchain
async function submitProof(e) {
  e.preventDefault();
  
  if (!currentHash || !isLoggedIn()) return;
  
  currentDescription = elements.descriptionInput.value.trim();
  
  // Show status section
  elements.statusSection.classList.remove('hidden');
  elements.txResult.classList.add('hidden');
  elements.statusMessage.textContent = 'Preparing transaction...';
  
  try {
    const txOptions = {
      contractAddress: CONFIG.contractAddress,
      contractName: CONFIG.contractName,
      functionName: 'submit-proof',
      functionArgs: [bufferCV(currentHash)],
      network,
      anchorMode: AnchorMode.Any,
      postConditionMode: PostConditionMode.Allow,
      onFinish: (data) => {
        handleTransactionSubmitted(data.txId);
      },
      onCancel: () => {
        elements.statusMessage.textContent = 'Transaction cancelled by user';
      }
    };
    
    // Use openContractCall from @stacks/connect for wallet signing
    const { openContractCall } = await import('@stacks/connect');
    await openContractCall(txOptions);
    
  } catch (error) {
    console.error('Submit error:', error);
    elements.statusMessage.textContent = `Error: ${error.message}`;
  }
}

// Handle successful transaction submission
function handleTransactionSubmitted(txId) {
  elements.statusMessage.textContent = 'Transaction submitted! Waiting for confirmation...';
  elements.txResult.classList.remove('hidden');
  
  const explorerUrl = CONFIG.network === 'mainnet'
    ? `https://explorer.stacks.co/txid/${txId}`
    : `https://explorer.stacks.co/txid/${txId}?chain=testnet`;
  
  elements.txLink.href = explorerUrl;
  elements.txLink.textContent = txId;
  
  // Poll for receipt (backend will create it when Chainhook fires)
  pollForReceipt(txId);
}

// Poll Stacks API directly for transaction confirmation
async function pollForReceipt(txId) {
  const maxAttempts = 60; // 5 minutes max
  let attempts = 0;
  
  const normalizedTxId = txId.startsWith('0x') ? txId : `0x${txId}`;
  const apiBase = CONFIG.network === 'mainnet' 
    ? 'https://api.mainnet.hiro.so' 
    : 'https://api.testnet.hiro.so';
  
  elements.statusMessage.textContent = 'Transaction submitted. Receipt may take a few minutes to generate.';
  
  const poll = async () => {
    try {
      // Poll Stacks API directly for tx status
      const txResponse = await fetch(`${apiBase}/extended/v1/tx/${normalizedTxId}`);
      
      if (txResponse.ok) {
        const txData = await txResponse.json();
        
        if (txData.tx_status === 'success') {
          // Transaction confirmed! Build receipt from chain data
          const receipt = {
            id: normalizedTxId.slice(2, 18), // First 16 chars as ID
            submission_id: normalizedTxId,
            proof_hash: extractProofHash(txData),
            block_height: txData.block_height,
            timestamp: txData.burn_block_time_iso || new Date().toISOString(),
            sender: txData.sender_address,
            tx_id: normalizedTxId
          };
          displayReceipt(receipt);
          return;
        } else if (txData.tx_status === 'pending') {
          attempts++;
          if (attempts < maxAttempts) {
            elements.statusMessage.textContent = `Transaction pending... (${attempts * 5}s)`;
            setTimeout(poll, 5000);
          }
        } else if (txData.tx_status === 'abort_by_response' || txData.tx_status === 'abort_by_post_condition') {
          elements.statusMessage.textContent = `Transaction failed: ${txData.tx_status}`;
        }
      } else {
        // Transaction not found yet, keep polling
        attempts++;
        if (attempts < maxAttempts) {
          elements.statusMessage.textContent = `Waiting for transaction... (${attempts * 5}s)`;
          setTimeout(poll, 5000);
        }
      }
    } catch (error) {
      console.error('Poll error:', error);
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(poll, 5000);
      }
    }
  };
  
  // Start polling after a short delay
  setTimeout(poll, 5000);
}

// Extract proof hash from transaction data
function extractProofHash(txData) {
  try {
    if (txData.contract_call && txData.contract_call.function_args) {
      const hashArg = txData.contract_call.function_args.find(arg => arg.name === 'hash');
      if (hashArg) {
        return hashArg.repr || hashArg.hex;
      }
    }
    // Fallback: use current hash if available
    if (currentHash) {
      return '0x' + toHex(currentHash);
    }
  } catch (e) {
    console.error('Error extracting hash:', e);
  }
  return 'Unknown';
}

// Display the receipt
function displayReceipt(receipt) {
  elements.statusSection.classList.add('hidden');
  elements.receiptSection.classList.remove('hidden');
  
  elements.receiptId.textContent = receipt.id || receipt.submission_id;
  elements.receiptHash.textContent = receipt.proof_hash || receipt.proofHash;
  elements.receiptBlock.textContent = receipt.block_height || receipt.blockHeight;
  elements.receiptTimestamp.textContent = new Date(receipt.timestamp).toLocaleString();
  
  const receiptUrl = `${CONFIG.backendUrl}/receipt/${receipt.id}`;
  elements.receiptUrl.href = receiptUrl;
  elements.receiptUrl.textContent = receiptUrl;
}

// Reset form for new submission
function resetForm() {
  elements.proofForm.reset();
  elements.hashPreview.classList.add('hidden');
  elements.submitBtn.disabled = true;
  elements.statusSection.classList.add('hidden');
  elements.receiptSection.classList.add('hidden');
  currentHash = null;
  currentDescription = '';
}

// Verify a proof - check blockchain directly
async function verifyProof(e) {
  e.preventDefault();
  
  const content = elements.verifyContent.value.trim();
  if (!content) return;
  
  const hashBytes = await sha256(content);
  const hashHex = '0x' + toHex(hashBytes);
  
  elements.verifyResult.classList.remove('hidden', 'success', 'not-found');
  elements.verifyResult.innerHTML = '<strong>🔍 Searching blockchain...</strong>';
  
  try {
    // Query the smart contract directly for this hash
    const apiBase = CONFIG.network === 'mainnet' 
      ? 'https://api.mainnet.hiro.so' 
      : 'https://api.testnet.hiro.so';
    
    // Search for contract call transactions with this hash
    const searchUrl = `${apiBase}/extended/v1/address/${CONFIG.contractAddress}.${CONFIG.contractName}/transactions?limit=50`;
    const response = await fetch(searchUrl);
    
    if (response.ok) {
      const data = await response.json();
      
      // Look for a transaction with matching hash in function args
      const matchingTx = data.results?.find(tx => {
        if (tx.tx_type === 'contract_call' && tx.contract_call?.function_name === 'submit-proof') {
          const hashArg = tx.contract_call.function_args?.find(arg => arg.name === 'hash');
          if (hashArg) {
            const txHash = hashArg.repr || '';
            return txHash.toLowerCase() === hashHex.toLowerCase();
          }
        }
        return false;
      });
      
      if (matchingTx && matchingTx.tx_status === 'success') {
        elements.verifyResult.classList.add('success');
        elements.verifyResult.innerHTML = `
          <strong>✅ Proof Verified on Blockchain!</strong><br>
          Block Height: ${matchingTx.block_height}<br>
          Timestamp: ${new Date(matchingTx.burn_block_time_iso).toLocaleString()}<br>
          Sender: ${matchingTx.sender_address}<br>
          <a href="https://explorer.stacks.co/txid/${matchingTx.tx_id}?chain=${CONFIG.network}" target="_blank">View on Explorer</a>
        `;
        return;
      }
    }
    
    // No match found
    elements.verifyResult.classList.add('not-found');
    elements.verifyResult.innerHTML = `
      <strong>❌ No proof found for this content</strong><br>
      <small>Hash: ${hashHex}</small>
    `;
  } catch (error) {
    console.error('Verify error:', error);
    elements.verifyResult.classList.add('not-found');
    elements.verifyResult.innerHTML = `<strong>Error verifying proof: ${error.message}</strong>`;
  }
}

// Initialize app
function init() {
  // Check for pending auth
  if (userSession.isSignInPending()) {
    userSession.handlePendingSignIn().then(() => {
      updateAuthUI();
    });
  } else {
    updateAuthUI();
  }
  
  // Event listeners
  elements.connectBtn.addEventListener('click', connectWallet);
  elements.disconnectBtn.addEventListener('click', disconnectWallet);
  elements.contentInput.addEventListener('input', updateHashPreview);
  elements.proofForm.addEventListener('submit', submitProof);
  elements.newProofBtn.addEventListener('click', resetForm);
  elements.verifyForm.addEventListener('submit', verifyProof);
}

// Start app
init();
