# db race condition - Usage Guide

## Quick Start

```bash
# Enable db race condition
export db-race-condition_ENABLED=true

# Start the backend with db race condition support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `db-race-condition_ENABLED` | Enable/disable feature | `true` |
| `db-race-condition_MAX_RETRIES` | Maximum retry attempts | `3` |
| `db-race-condition_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/db-race-condition
POST /api/db-race-condition
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/db-race-condition \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "db-race-condition",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
