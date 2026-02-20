# webhook integration - Usage Guide

## Quick Start

```bash
# Enable webhook integration
export webhook-integration_ENABLED=true

# Start the backend with webhook integration support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `webhook-integration_ENABLED` | Enable/disable feature | `true` |
| `webhook-integration_MAX_RETRIES` | Maximum retry attempts | `3` |
| `webhook-integration_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/webhook-integration
POST /api/webhook-integration
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/webhook-integration \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "webhook-integration",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
