# Contributing to Bitcoin Proof-of-Action Receipt System

Thank you for your interest in contributing! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Code Style Guidelines](#code-style-guidelines)
- [Security Guidelines](#security-guidelines)
- [Testing](#testing)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on the issue, not the person
- Help others learn and grow

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/btc-poa-receipt.git
   cd btc-poa-receipt
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/phessophissy/btc-poa-receipt.git
   ```

## Development Setup

### Prerequisites

- Node.js 18+
- [Clarinet](https://github.com/hirosystems/clarinet) for Clarity contract development
- A Stacks wallet (Leather or Xverse) for testing

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your settings
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Smart Contract Development

```bash
# Install Clarinet
brew install clarinet  # macOS
# See https://github.com/hirosystems/clarinet for other OS

# Run tests
cd contracts
clarinet test

# Check contract syntax
clarinet check
```

## How to Contribute

### Reporting Bugs

Before creating a bug report:
1. Check existing issues to avoid duplicates
2. Use the bug report template
3. Include:
   - Clear, descriptive title
   - Steps to reproduce
   - Expected vs actual behavior
   - Environment details (OS, Node version, browser)
   - Screenshots if applicable

### Suggesting Features

1. Check if the feature already exists or is planned
2. Use the feature request template
3. Explain the use case and benefits
4. Consider implementation complexity

### Code Contributions

1. Look for issues labeled `good first issue` or `help wanted`
2. Comment on the issue to express interest
3. Wait for maintainer assignment before starting work
4. Follow the pull request process below

## Pull Request Process

### Branch Naming

Use descriptive branch names:
- `fix/issue-description` - Bug fixes
- `feat/feature-name` - New features
- `docs/what-changed` - Documentation
- `refactor/what-changed` - Code refactoring
- `test/what-tested` - Adding tests

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run tests** (when available):
   ```bash
   # Backend tests
   cd backend && npm test
   
   # Contract tests
   cd contracts && clarinet test
   ```

3. **Check code style**:
   - No linting errors
   - Consistent formatting
   - No console.log statements in production code

### PR Requirements

- [ ] Clear, descriptive title
- [ ] Reference related issue(s): `Fixes #123` or `Relates to #123`
- [ ] Description of changes and motivation
- [ ] Tests added/updated (if applicable)
- [ ] Documentation updated (if applicable)
- [ ] No breaking changes (or clearly documented)

### Review Process

1. Maintainers will review within 1-2 weeks
2. Address requested changes promptly
3. Be open to feedback and discussion
4. Squash commits before final merge if requested

## Code Style Guidelines

### JavaScript/TypeScript

- Use ES6+ features (const/let, arrow functions, async/await)
- Prefer descriptive variable names over comments
- Use camelCase for variables and functions
- Use PascalCase for classes
- Keep functions small and focused
- Handle errors appropriately

```javascript
// Good
async function fetchReceipt(receiptId) {
  if (!receiptId) {
    throw new Error('Receipt ID is required');
  }
  
  const response = await fetch(`/api/receipt/${receiptId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch receipt: ${response.status}`);
  }
  
  return response.json();
}

// Avoid
async function get(id) {
  return await fetch('/api/receipt/' + id).then(r => r.json());
}
```

### Clarity Smart Contracts

- Use descriptive constant names with `err-` prefix for errors
- Document public functions with comments
- Keep functions focused on single responsibility
- Validate inputs at function entry
- Use meaningful error codes

```clarity
;; Good - Clear naming, validation, documentation
;; Submit a proof hash to the blockchain
;; @param hash: 32-byte SHA-256 hash of content
;; @returns: submission ID on success
(define-public (submit-proof (hash (buff 32)))
  (begin
    (asserts! (> (len hash) u0) err-invalid-hash)
    ;; ... implementation
  )
)
```

### CSS

- Use CSS custom properties for theming
- Mobile-first responsive design
- Use meaningful class names
- Group related properties

## Security Guidelines

### Critical: Smart Contract Security

When modifying Clarity contracts:

1. **`as-contract` Context Switching**
   - Always capture `tx-sender` BEFORE entering `as-contract` block
   - Inside `as-contract`, `tx-sender` becomes the contract principal
   
   ```clarity
   ;; CORRECT
   (let ((user tx-sender))
     (try! (as-contract (stx-transfer? amount tx-sender user)))
   )
   
   ;; WRONG - sends to contract itself!
   (try! (as-contract (stx-transfer? amount tx-sender tx-sender)))
   ```

2. **Input Validation**
   - Validate all user inputs
   - Check buffer lengths
   - Verify principals when needed

3. **Reentrancy**
   - Update state before external calls
   - Use checks-effects-interactions pattern

### Backend Security

1. **Authentication**
   - Always verify webhook authorization
   - Use secure token comparison (timing-safe)
   - Never log sensitive tokens

2. **Input Validation**
   - Validate and sanitize all inputs
   - Use parameterized queries for database
   - Limit request body size

3. **Data Handling**
   - Never store raw content on-chain
   - Hash sensitive data client-side
   - Use cryptographically secure random generators

```javascript
// Good - Cryptographically secure ID
import crypto from 'crypto';
const id = crypto.randomBytes(8).toString('base64url');

// Bad - Predictable
const id = Math.random().toString(36).substring(2);
```

### Frontend Security

1. **Never trust client-side validation alone**
2. **Sanitize displayed user content**
3. **Use CSP headers**
4. **Avoid inline scripts**

## Testing

### Smart Contract Tests

Use Clarinet for Clarity testing:

```typescript
// tests/proof-of-action_test.ts
import { Clarinet, Tx, Chain, Account, types } from 'clarinet-sdk';

Clarinet.test({
  name: "submit-proof transfers fee to owner",
  async fn(chain: Chain, accounts: Map<string, Account>) {
    const deployer = accounts.get('deployer')!;
    const user = accounts.get('wallet_1')!;
    
    const hash = new Uint8Array(32).fill(1);
    
    const block = chain.mineBlock([
      Tx.contractCall('proof-of-action', 'submit-proof', 
        [types.buff(hash)], 
        user.address
      )
    ]);
    
    block.receipts[0].result.expectOk();
  }
});
```

### Backend Tests

```javascript
// tests/db.test.js
import { storeReceipt, getReceiptById } from '../db.js';

describe('Receipt Storage', () => {
  test('stores and retrieves receipt', () => {
    const data = {
      txid: '0x123',
      userAddress: 'ST123...',
      proofHash: '0xabc...',
      blockHeight: 100,
      submissionId: 1
    };
    
    const receipt = storeReceipt(data);
    expect(receipt.id).toBeDefined();
    
    const retrieved = getReceiptById(receipt.id);
    expect(retrieved.txid).toBe(data.txid);
  });
});
```

## Questions?

- Open a [Discussion](https://github.com/phessophissy/btc-poa-receipt/discussions) for general questions
- Check existing issues and discussions first
- Be patient - maintainers are volunteers

---

Thank you for contributing to Bitcoin Proof-of-Action Receipt System! 🚀
