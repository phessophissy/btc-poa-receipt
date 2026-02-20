# receipt lifecycle - Usage Guide

## Quick Start

```bash
# Enable receipt lifecycle
export receipt-lifecycle_ENABLED=true

# Start the backend with receipt lifecycle support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-lifecycle_ENABLED` | Enable/disable feature | `true` |
| `receipt-lifecycle_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-lifecycle_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-lifecycle
POST /api/receipt-lifecycle
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-lifecycle \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-lifecycle",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
