# response helpers - Usage Guide

## Quick Start

```bash
# Enable response helpers
export response-helpers_ENABLED=true

# Start the backend with response helpers support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `response-helpers_ENABLED` | Enable/disable feature | `true` |
| `response-helpers_MAX_RETRIES` | Maximum retry attempts | `3` |
| `response-helpers_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/response-helpers
POST /api/response-helpers
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/response-helpers \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "response-helpers",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
