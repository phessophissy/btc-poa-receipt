# webhook idempotency - Usage Guide

## Quick Start

```bash
# Enable webhook idempotency
export webhook-idempotency_ENABLED=true

# Start the backend with webhook idempotency support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `webhook-idempotency_ENABLED` | Enable/disable feature | `true` |
| `webhook-idempotency_MAX_RETRIES` | Maximum retry attempts | `3` |
| `webhook-idempotency_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/webhook-idempotency
POST /api/webhook-idempotency
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/webhook-idempotency \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "webhook-idempotency",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
