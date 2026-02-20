# favicon loading - Usage Guide

## Quick Start

```bash
# Enable favicon loading
export favicon-loading_ENABLED=true

# Start the backend with favicon loading support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `favicon-loading_ENABLED` | Enable/disable feature | `true` |
| `favicon-loading_MAX_RETRIES` | Maximum retry attempts | `3` |
| `favicon-loading_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/favicon-loading
POST /api/favicon-loading
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/favicon-loading \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "favicon-loading",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
