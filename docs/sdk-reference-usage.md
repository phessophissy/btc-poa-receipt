# sdk reference - Usage Guide

## Quick Start

```bash
# Enable sdk reference
export sdk-reference_ENABLED=true

# Start the backend with sdk reference support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `sdk-reference_ENABLED` | Enable/disable feature | `true` |
| `sdk-reference_MAX_RETRIES` | Maximum retry attempts | `3` |
| `sdk-reference_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/sdk-reference
POST /api/sdk-reference
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/sdk-reference \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "sdk-reference",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
