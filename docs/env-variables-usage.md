# env variables - Usage Guide

## Quick Start

```bash
# Enable env variables
export env-variables_ENABLED=true

# Start the backend with env variables support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `env-variables_ENABLED` | Enable/disable feature | `true` |
| `env-variables_MAX_RETRIES` | Maximum retry attempts | `3` |
| `env-variables_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/env-variables
POST /api/env-variables
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/env-variables \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "env-variables",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
