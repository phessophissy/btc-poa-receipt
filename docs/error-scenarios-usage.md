# error scenarios - Usage Guide

## Quick Start

```bash
# Enable error scenarios
export error-scenarios_ENABLED=true

# Start the backend with error scenarios support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `error-scenarios_ENABLED` | Enable/disable feature | `true` |
| `error-scenarios_MAX_RETRIES` | Maximum retry attempts | `3` |
| `error-scenarios_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/error-scenarios
POST /api/error-scenarios
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/error-scenarios \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "error-scenarios",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
