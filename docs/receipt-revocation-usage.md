# receipt revocation - Usage Guide

## Quick Start

```bash
# Enable receipt revocation
export receipt-revocation_ENABLED=true

# Start the backend with receipt revocation support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-revocation_ENABLED` | Enable/disable feature | `true` |
| `receipt-revocation_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-revocation_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-revocation
POST /api/receipt-revocation
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-revocation \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-revocation",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
