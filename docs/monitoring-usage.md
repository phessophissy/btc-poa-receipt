# monitoring - Usage Guide

## Quick Start

```bash
# Enable monitoring
export monitoring_ENABLED=true

# Start the backend with monitoring support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `monitoring_ENABLED` | Enable/disable feature | `true` |
| `monitoring_MAX_RETRIES` | Maximum retry attempts | `3` |
| `monitoring_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/monitoring
POST /api/monitoring
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/monitoring \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "monitoring",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
