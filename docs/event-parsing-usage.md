# event parsing - Usage Guide

## Quick Start

```bash
# Enable event parsing
export event-parsing_ENABLED=true

# Start the backend with event parsing support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `event-parsing_ENABLED` | Enable/disable feature | `true` |
| `event-parsing_MAX_RETRIES` | Maximum retry attempts | `3` |
| `event-parsing_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/event-parsing
POST /api/event-parsing
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/event-parsing \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "event-parsing",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
