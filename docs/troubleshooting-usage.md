# troubleshooting - Usage Guide

## Quick Start

```bash
# Enable troubleshooting
export troubleshooting_ENABLED=true

# Start the backend with troubleshooting support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `troubleshooting_ENABLED` | Enable/disable feature | `true` |
| `troubleshooting_MAX_RETRIES` | Maximum retry attempts | `3` |
| `troubleshooting_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/troubleshooting
POST /api/troubleshooting
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/troubleshooting \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "troubleshooting",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
