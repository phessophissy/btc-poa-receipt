# webhook handler - Usage Guide

## Quick Start

```bash
# Enable webhook handler
export webhook-handler_ENABLED=true

# Start the backend with webhook handler support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `webhook-handler_ENABLED` | Enable/disable feature | `true` |
| `webhook-handler_MAX_RETRIES` | Maximum retry attempts | `3` |
| `webhook-handler_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/webhook-handler
POST /api/webhook-handler
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/webhook-handler \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "webhook-handler",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
