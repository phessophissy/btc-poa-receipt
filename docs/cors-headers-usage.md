# cors headers - Usage Guide

## Quick Start

```bash
# Enable cors headers
export cors-headers_ENABLED=true

# Start the backend with cors headers support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `cors-headers_ENABLED` | Enable/disable feature | `true` |
| `cors-headers_MAX_RETRIES` | Maximum retry attempts | `3` |
| `cors-headers_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/cors-headers
POST /api/cors-headers
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/cors-headers \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "cors-headers",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
