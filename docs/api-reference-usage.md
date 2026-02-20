# api reference - Usage Guide

## Quick Start

```bash
# Enable api reference
export api-reference_ENABLED=true

# Start the backend with api reference support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `api-reference_ENABLED` | Enable/disable feature | `true` |
| `api-reference_MAX_RETRIES` | Maximum retry attempts | `3` |
| `api-reference_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/api-reference
POST /api/api-reference
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/api-reference \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "api-reference",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
