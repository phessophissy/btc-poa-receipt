# load testing - Usage Guide

## Quick Start

```bash
# Enable load testing
export load-testing_ENABLED=true

# Start the backend with load testing support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `load-testing_ENABLED` | Enable/disable feature | `true` |
| `load-testing_MAX_RETRIES` | Maximum retry attempts | `3` |
| `load-testing_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/load-testing
POST /api/load-testing
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/load-testing \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "load-testing",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
