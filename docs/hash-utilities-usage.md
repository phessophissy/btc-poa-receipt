# hash utilities - Usage Guide

## Quick Start

```bash
# Enable hash utilities
export hash-utilities_ENABLED=true

# Start the backend with hash utilities support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `hash-utilities_ENABLED` | Enable/disable feature | `true` |
| `hash-utilities_MAX_RETRIES` | Maximum retry attempts | `3` |
| `hash-utilities_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/hash-utilities
POST /api/hash-utilities
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/hash-utilities \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "hash-utilities",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
