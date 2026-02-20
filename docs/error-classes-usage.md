# error classes - Usage Guide

## Quick Start

```bash
# Enable error classes
export error-classes_ENABLED=true

# Start the backend with error classes support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `error-classes_ENABLED` | Enable/disable feature | `true` |
| `error-classes_MAX_RETRIES` | Maximum retry attempts | `3` |
| `error-classes_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/error-classes
POST /api/error-classes
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/error-classes \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "error-classes",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
