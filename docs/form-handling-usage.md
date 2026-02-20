# form handling - Usage Guide

## Quick Start

```bash
# Enable form handling
export form-handling_ENABLED=true

# Start the backend with form handling support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `form-handling_ENABLED` | Enable/disable feature | `true` |
| `form-handling_MAX_RETRIES` | Maximum retry attempts | `3` |
| `form-handling_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/form-handling
POST /api/form-handling
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/form-handling \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "form-handling",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
