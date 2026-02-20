# concurrent writes - Usage Guide

## Quick Start

```bash
# Enable concurrent writes
export concurrent-writes_ENABLED=true

# Start the backend with concurrent writes support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `concurrent-writes_ENABLED` | Enable/disable feature | `true` |
| `concurrent-writes_MAX_RETRIES` | Maximum retry attempts | `3` |
| `concurrent-writes_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/concurrent-writes
POST /api/concurrent-writes
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/concurrent-writes \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "concurrent-writes",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
