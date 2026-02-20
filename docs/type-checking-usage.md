# type checking - Usage Guide

## Quick Start

```bash
# Enable type checking
export type-checking_ENABLED=true

# Start the backend with type checking support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `type-checking_ENABLED` | Enable/disable feature | `true` |
| `type-checking_MAX_RETRIES` | Maximum retry attempts | `3` |
| `type-checking_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/type-checking
POST /api/type-checking
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/type-checking \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "type-checking",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
