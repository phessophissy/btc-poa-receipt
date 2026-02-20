# api endpoints - Usage Guide

## Quick Start

```bash
# Enable api endpoints
export api-endpoints_ENABLED=true

# Start the backend with api endpoints support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `api-endpoints_ENABLED` | Enable/disable feature | `true` |
| `api-endpoints_MAX_RETRIES` | Maximum retry attempts | `3` |
| `api-endpoints_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/api-endpoints
POST /api/api-endpoints
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/api-endpoints \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "api-endpoints",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
