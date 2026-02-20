# webhook retry - Usage Guide

## Quick Start

```bash
# Enable webhook retry
export webhook-retry_ENABLED=true

# Start the backend with webhook retry support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `webhook-retry_ENABLED` | Enable/disable feature | `true` |
| `webhook-retry_MAX_RETRIES` | Maximum retry attempts | `3` |
| `webhook-retry_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/webhook-retry
POST /api/webhook-retry
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/webhook-retry \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "webhook-retry",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
