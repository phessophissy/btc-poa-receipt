# http client - Usage Guide

## Quick Start

```bash
# Enable http client
export http-client_ENABLED=true

# Start the backend with http client support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `http-client_ENABLED` | Enable/disable feature | `true` |
| `http-client_MAX_RETRIES` | Maximum retry attempts | `3` |
| `http-client_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/http-client
POST /api/http-client
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/http-client \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "http-client",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
