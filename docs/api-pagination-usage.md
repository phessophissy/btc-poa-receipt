# api pagination - Usage Guide

## Quick Start

```bash
# Enable api pagination
export api-pagination_ENABLED=true

# Start the backend with api pagination support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `api-pagination_ENABLED` | Enable/disable feature | `true` |
| `api-pagination_MAX_RETRIES` | Maximum retry attempts | `3` |
| `api-pagination_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/api-pagination
POST /api/api-pagination
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/api-pagination \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "api-pagination",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
