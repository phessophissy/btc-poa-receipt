# json parsing - Usage Guide

## Quick Start

```bash
# Enable json parsing
export json-parsing_ENABLED=true

# Start the backend with json parsing support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `json-parsing_ENABLED` | Enable/disable feature | `true` |
| `json-parsing_MAX_RETRIES` | Maximum retry attempts | `3` |
| `json-parsing_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/json-parsing
POST /api/json-parsing
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/json-parsing \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "json-parsing",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
