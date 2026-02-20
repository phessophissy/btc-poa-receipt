# bulk verify - Usage Guide

## Quick Start

```bash
# Enable bulk verify
export bulk-verify_ENABLED=true

# Start the backend with bulk verify support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `bulk-verify_ENABLED` | Enable/disable feature | `true` |
| `bulk-verify_MAX_RETRIES` | Maximum retry attempts | `3` |
| `bulk-verify_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/bulk-verify
POST /api/bulk-verify
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/bulk-verify \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "bulk-verify",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
