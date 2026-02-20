# api versioning - Usage Guide

## Quick Start

```bash
# Enable api versioning
export api-versioning_ENABLED=true

# Start the backend with api versioning support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `api-versioning_ENABLED` | Enable/disable feature | `true` |
| `api-versioning_MAX_RETRIES` | Maximum retry attempts | `3` |
| `api-versioning_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/api-versioning
POST /api/api-versioning
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/api-versioning \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "api-versioning",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
