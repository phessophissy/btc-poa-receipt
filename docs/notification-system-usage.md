# notification system - Usage Guide

## Quick Start

```bash
# Enable notification system
export notification-system_ENABLED=true

# Start the backend with notification system support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `notification-system_ENABLED` | Enable/disable feature | `true` |
| `notification-system_MAX_RETRIES` | Maximum retry attempts | `3` |
| `notification-system_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/notification-system
POST /api/notification-system
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/notification-system \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "notification-system",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
