# frontend modules - Usage Guide

## Quick Start

```bash
# Enable frontend modules
export frontend-modules_ENABLED=true

# Start the backend with frontend modules support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `frontend-modules_ENABLED` | Enable/disable feature | `true` |
| `frontend-modules_MAX_RETRIES` | Maximum retry attempts | `3` |
| `frontend-modules_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/frontend-modules
POST /api/frontend-modules
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/frontend-modules \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "frontend-modules",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
