# frontend utils - Usage Guide

## Quick Start

```bash
# Enable frontend utils
export frontend-utils_ENABLED=true

# Start the backend with frontend utils support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `frontend-utils_ENABLED` | Enable/disable feature | `true` |
| `frontend-utils_MAX_RETRIES` | Maximum retry attempts | `3` |
| `frontend-utils_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/frontend-utils
POST /api/frontend-utils
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/frontend-utils \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "frontend-utils",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
