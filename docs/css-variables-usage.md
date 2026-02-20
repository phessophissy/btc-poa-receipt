# css variables - Usage Guide

## Quick Start

```bash
# Enable css variables
export css-variables_ENABLED=true

# Start the backend with css variables support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `css-variables_ENABLED` | Enable/disable feature | `true` |
| `css-variables_MAX_RETRIES` | Maximum retry attempts | `3` |
| `css-variables_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/css-variables
POST /api/css-variables
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/css-variables \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "css-variables",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
