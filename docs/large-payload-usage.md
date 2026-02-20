# large payload - Usage Guide

## Quick Start

```bash
# Enable large payload
export large-payload_ENABLED=true

# Start the backend with large payload support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `large-payload_ENABLED` | Enable/disable feature | `true` |
| `large-payload_MAX_RETRIES` | Maximum retry attempts | `3` |
| `large-payload_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/large-payload
POST /api/large-payload
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/large-payload \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "large-payload",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
