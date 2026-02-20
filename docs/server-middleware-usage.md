# server middleware - Usage Guide

## Quick Start

```bash
# Enable server middleware
export server-middleware_ENABLED=true

# Start the backend with server middleware support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `server-middleware_ENABLED` | Enable/disable feature | `true` |
| `server-middleware_MAX_RETRIES` | Maximum retry attempts | `3` |
| `server-middleware_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/server-middleware
POST /api/server-middleware
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/server-middleware \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "server-middleware",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
