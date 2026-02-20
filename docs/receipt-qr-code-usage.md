# receipt qr code - Usage Guide

## Quick Start

```bash
# Enable receipt qr code
export receipt-qr-code_ENABLED=true

# Start the backend with receipt qr code support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-qr-code_ENABLED` | Enable/disable feature | `true` |
| `receipt-qr-code_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-qr-code_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-qr-code
POST /api/receipt-qr-code
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-qr-code \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-qr-code",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
