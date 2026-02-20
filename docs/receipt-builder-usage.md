# receipt builder - Usage Guide

## Quick Start

```bash
# Enable receipt builder
export receipt-builder_ENABLED=true

# Start the backend with receipt builder support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-builder_ENABLED` | Enable/disable feature | `true` |
| `receipt-builder_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-builder_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-builder
POST /api/receipt-builder
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-builder \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-builder",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
