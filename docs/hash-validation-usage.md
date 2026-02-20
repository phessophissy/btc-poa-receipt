# hash validation - Usage Guide

## Quick Start

```bash
# Enable hash validation
export hash-validation_ENABLED=true

# Start the backend with hash validation support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `hash-validation_ENABLED` | Enable/disable feature | `true` |
| `hash-validation_MAX_RETRIES` | Maximum retry attempts | `3` |
| `hash-validation_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/hash-validation
POST /api/hash-validation
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/hash-validation \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "hash-validation",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
