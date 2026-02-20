# input sanitization - Usage Guide

## Quick Start

```bash
# Enable input sanitization
export input-sanitization_ENABLED=true

# Start the backend with input sanitization support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `input-sanitization_ENABLED` | Enable/disable feature | `true` |
| `input-sanitization_MAX_RETRIES` | Maximum retry attempts | `3` |
| `input-sanitization_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/input-sanitization
POST /api/input-sanitization
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/input-sanitization \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "input-sanitization",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
