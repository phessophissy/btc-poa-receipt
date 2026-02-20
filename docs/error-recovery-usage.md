# error recovery - Usage Guide

## Quick Start

```bash
# Enable error recovery
export error-recovery_ENABLED=true

# Start the backend with error recovery support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `error-recovery_ENABLED` | Enable/disable feature | `true` |
| `error-recovery_MAX_RETRIES` | Maximum retry attempts | `3` |
| `error-recovery_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/error-recovery
POST /api/error-recovery
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/error-recovery \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "error-recovery",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
