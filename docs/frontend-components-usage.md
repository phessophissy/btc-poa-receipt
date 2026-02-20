# frontend components - Usage Guide

## Quick Start

```bash
# Enable frontend components
export frontend-components_ENABLED=true

# Start the backend with frontend components support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `frontend-components_ENABLED` | Enable/disable feature | `true` |
| `frontend-components_MAX_RETRIES` | Maximum retry attempts | `3` |
| `frontend-components_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/frontend-components
POST /api/frontend-components
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/frontend-components \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "frontend-components",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
