# receipt ordering - Usage Guide

## Quick Start

```bash
# Enable receipt ordering
export receipt-ordering_ENABLED=true

# Start the backend with receipt ordering support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-ordering_ENABLED` | Enable/disable feature | `true` |
| `receipt-ordering_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-ordering_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-ordering
POST /api/receipt-ordering
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-ordering \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-ordering",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
