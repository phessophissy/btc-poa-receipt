# user dashboard - Usage Guide

## Quick Start

```bash
# Enable user dashboard
export user-dashboard_ENABLED=true

# Start the backend with user dashboard support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `user-dashboard_ENABLED` | Enable/disable feature | `true` |
| `user-dashboard_MAX_RETRIES` | Maximum retry attempts | `3` |
| `user-dashboard_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/user-dashboard
POST /api/user-dashboard
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/user-dashboard \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "user-dashboard",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
