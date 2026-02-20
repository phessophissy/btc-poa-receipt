# rate limiting - Usage Guide

## Quick Start

```bash
# Enable rate limiting
export rate-limiting_ENABLED=true

# Start the backend with rate limiting support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `rate-limiting_ENABLED` | Enable/disable feature | `true` |
| `rate-limiting_MAX_RETRIES` | Maximum retry attempts | `3` |
| `rate-limiting_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/rate-limiting
POST /api/rate-limiting
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/rate-limiting \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "rate-limiting",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
