# auth flow - Usage Guide

## Quick Start

```bash
# Enable auth flow
export auth-flow_ENABLED=true

# Start the backend with auth flow support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `auth-flow_ENABLED` | Enable/disable feature | `true` |
| `auth-flow_MAX_RETRIES` | Maximum retry attempts | `3` |
| `auth-flow_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/auth-flow
POST /api/auth-flow
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/auth-flow \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "auth-flow",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
