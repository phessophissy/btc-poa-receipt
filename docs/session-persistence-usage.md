# session persistence - Usage Guide

## Quick Start

```bash
# Enable session persistence
export session-persistence_ENABLED=true

# Start the backend with session persistence support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `session-persistence_ENABLED` | Enable/disable feature | `true` |
| `session-persistence_MAX_RETRIES` | Maximum retry attempts | `3` |
| `session-persistence_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/session-persistence
POST /api/session-persistence
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/session-persistence \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "session-persistence",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
