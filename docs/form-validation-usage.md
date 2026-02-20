# form validation - Usage Guide

## Quick Start

```bash
# Enable form validation
export form-validation_ENABLED=true

# Start the backend with form validation support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `form-validation_ENABLED` | Enable/disable feature | `true` |
| `form-validation_MAX_RETRIES` | Maximum retry attempts | `3` |
| `form-validation_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/form-validation
POST /api/form-validation
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/form-validation \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "form-validation",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
