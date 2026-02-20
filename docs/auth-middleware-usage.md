# auth middleware - Usage Guide

## Quick Start

```bash
# Enable auth middleware
export auth-middleware_ENABLED=true

# Start the backend with auth middleware support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `auth-middleware_ENABLED` | Enable/disable feature | `true` |
| `auth-middleware_MAX_RETRIES` | Maximum retry attempts | `3` |
| `auth-middleware_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/auth-middleware
POST /api/auth-middleware
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/auth-middleware \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "auth-middleware",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
