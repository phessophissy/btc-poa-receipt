# receipt formatter - Usage Guide

## Quick Start

```bash
# Enable receipt formatter
export receipt-formatter_ENABLED=true

# Start the backend with receipt formatter support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-formatter_ENABLED` | Enable/disable feature | `true` |
| `receipt-formatter_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-formatter_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-formatter
POST /api/receipt-formatter
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-formatter \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-formatter",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
