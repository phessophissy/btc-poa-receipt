# data integrity - Usage Guide

## Quick Start

```bash
# Enable data integrity
export data-integrity_ENABLED=true

# Start the backend with data integrity support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `data-integrity_ENABLED` | Enable/disable feature | `true` |
| `data-integrity_MAX_RETRIES` | Maximum retry attempts | `3` |
| `data-integrity_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/data-integrity
POST /api/data-integrity
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/data-integrity \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "data-integrity",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
