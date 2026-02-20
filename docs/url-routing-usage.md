# url routing - Usage Guide

## Quick Start

```bash
# Enable url routing
export url-routing_ENABLED=true

# Start the backend with url routing support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `url-routing_ENABLED` | Enable/disable feature | `true` |
| `url-routing_MAX_RETRIES` | Maximum retry attempts | `3` |
| `url-routing_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/url-routing
POST /api/url-routing
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/url-routing \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "url-routing",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
