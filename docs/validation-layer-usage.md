# validation layer - Usage Guide

## Quick Start

```bash
# Enable validation layer
export validation-layer_ENABLED=true

# Start the backend with validation layer support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `validation-layer_ENABLED` | Enable/disable feature | `true` |
| `validation-layer_MAX_RETRIES` | Maximum retry attempts | `3` |
| `validation-layer_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/validation-layer
POST /api/validation-layer
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/validation-layer \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "validation-layer",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
