# error handling webhook - Usage Guide

## Quick Start

```bash
# Enable error handling webhook
export error-handling-webhook_ENABLED=true

# Start the backend with error handling webhook support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `error-handling-webhook_ENABLED` | Enable/disable feature | `true` |
| `error-handling-webhook_MAX_RETRIES` | Maximum retry attempts | `3` |
| `error-handling-webhook_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/error-handling-webhook
POST /api/error-handling-webhook
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/error-handling-webhook \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "error-handling-webhook",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
