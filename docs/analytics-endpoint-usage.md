# analytics endpoint - Usage Guide

## Quick Start

```bash
# Enable analytics endpoint
export analytics-endpoint_ENABLED=true

# Start the backend with analytics endpoint support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `analytics-endpoint_ENABLED` | Enable/disable feature | `true` |
| `analytics-endpoint_MAX_RETRIES` | Maximum retry attempts | `3` |
| `analytics-endpoint_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/analytics-endpoint
POST /api/analytics-endpoint
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/analytics-endpoint \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "analytics-endpoint",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
