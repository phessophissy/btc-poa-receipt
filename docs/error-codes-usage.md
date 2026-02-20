# error codes - Usage Guide

## Quick Start

```bash
# Enable error codes
export error-codes_ENABLED=true

# Start the backend with error codes support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `error-codes_ENABLED` | Enable/disable feature | `true` |
| `error-codes_MAX_RETRIES` | Maximum retry attempts | `3` |
| `error-codes_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/error-codes
POST /api/error-codes
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/error-codes \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "error-codes",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
