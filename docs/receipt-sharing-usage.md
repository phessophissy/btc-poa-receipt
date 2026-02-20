# receipt sharing - Usage Guide

## Quick Start

```bash
# Enable receipt sharing
export receipt-sharing_ENABLED=true

# Start the backend with receipt sharing support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-sharing_ENABLED` | Enable/disable feature | `true` |
| `receipt-sharing_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-sharing_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-sharing
POST /api/receipt-sharing
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-sharing \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-sharing",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
