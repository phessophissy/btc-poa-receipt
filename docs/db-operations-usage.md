# db operations - Usage Guide

## Quick Start

```bash
# Enable db operations
export db-operations_ENABLED=true

# Start the backend with db operations support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `db-operations_ENABLED` | Enable/disable feature | `true` |
| `db-operations_MAX_RETRIES` | Maximum retry attempts | `3` |
| `db-operations_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/db-operations
POST /api/db-operations
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/db-operations \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "db-operations",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
