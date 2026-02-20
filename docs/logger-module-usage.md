# logger module - Usage Guide

## Quick Start

```bash
# Enable logger module
export logger-module_ENABLED=true

# Start the backend with logger module support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `logger-module_ENABLED` | Enable/disable feature | `true` |
| `logger-module_MAX_RETRIES` | Maximum retry attempts | `3` |
| `logger-module_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/logger-module
POST /api/logger-module
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/logger-module \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "logger-module",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
