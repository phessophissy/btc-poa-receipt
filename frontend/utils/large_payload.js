// Frontend utilities for large payload
// BTC Proof-of-Action Receipt System

/**
 * Format a proof hash for display
 * @param {string} hash - Full hash string
 * @param {number} chars - Characters to show at start/end
 * @returns {string} Truncated hash
 */
export function formatHash(hash, chars = 8) {
  if (!hash || hash.length <= chars * 2 + 3) return hash || '';
  return `${hash.slice(0, chars)}...${hash.slice(-chars)}`;
}

/**
 * Format a Stacks address for display
 * @param {string} address - Full Stacks address
 * @returns {string} Truncated address
 */
export function formatAddress(address) {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

/**
 * Format timestamp for display
 * @param {string} isoString - ISO timestamp
 * @returns {string} Formatted date string
 */
export function formatTimestamp(isoString) {
  if (!isoString) return 'N/A';
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

/**
 * Copy text to clipboard with feedback
 * @param {string} text - Text to copy
 * @returns {Promise<boolean>} Success status
 */
export async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Copy failed:', err);
    return false;
  }
}

/**
 * Debounce function for input handling
 * @param {Function} fn - Function to debounce
 * @param {number} delay - Delay in ms
 * @returns {Function} Debounced function
 */
export function debounce(fn, delay = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}
