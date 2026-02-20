# deployment guide - Usage Guide

## Quick Start

```bash
# Enable deployment guide
export deployment-guide_ENABLED=true

# Start the backend with deployment guide support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `deployment-guide_ENABLED` | Enable/disable feature | `true` |
| `deployment-guide_MAX_RETRIES` | Maximum retry attempts | `3` |
| `deployment-guide_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/deployment-guide
POST /api/deployment-guide
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/deployment-guide \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "deployment-guide",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
