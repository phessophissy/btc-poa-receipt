# event emitter - Usage Guide

## Quick Start

```bash
# Enable event emitter
export event-emitter_ENABLED=true

# Start the backend with event emitter support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `event-emitter_ENABLED` | Enable/disable feature | `true` |
| `event-emitter_MAX_RETRIES` | Maximum retry attempts | `3` |
| `event-emitter_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/event-emitter
POST /api/event-emitter
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/event-emitter \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "event-emitter",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
