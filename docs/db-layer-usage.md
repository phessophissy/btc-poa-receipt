# db layer - Usage Guide

## Quick Start

```bash
# Enable db layer
export db-layer_ENABLED=true

# Start the backend with db layer support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `db-layer_ENABLED` | Enable/disable feature | `true` |
| `db-layer_MAX_RETRIES` | Maximum retry attempts | `3` |
| `db-layer_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/db-layer
POST /api/db-layer
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/db-layer \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "db-layer",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
