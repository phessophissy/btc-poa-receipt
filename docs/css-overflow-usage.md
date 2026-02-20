# css overflow - Usage Guide

## Quick Start

```bash
# Enable css overflow
export css-overflow_ENABLED=true

# Start the backend with css overflow support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `css-overflow_ENABLED` | Enable/disable feature | `true` |
| `css-overflow_MAX_RETRIES` | Maximum retry attempts | `3` |
| `css-overflow_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/css-overflow
POST /api/css-overflow
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/css-overflow \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "css-overflow",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
