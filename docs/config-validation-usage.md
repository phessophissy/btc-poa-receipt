# config validation - Usage Guide

## Quick Start

```bash
# Enable config validation
export config-validation_ENABLED=true

# Start the backend with config validation support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `config-validation_ENABLED` | Enable/disable feature | `true` |
| `config-validation_MAX_RETRIES` | Maximum retry attempts | `3` |
| `config-validation_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/config-validation
POST /api/config-validation
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/config-validation \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "config-validation",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
