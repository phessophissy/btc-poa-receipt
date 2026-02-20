# bulk operations - Usage Guide

## Quick Start

```bash
# Enable bulk operations
export bulk-operations_ENABLED=true

# Start the backend with bulk operations support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `bulk-operations_ENABLED` | Enable/disable feature | `true` |
| `bulk-operations_MAX_RETRIES` | Maximum retry attempts | `3` |
| `bulk-operations_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/bulk-operations
POST /api/bulk-operations
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/bulk-operations \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "bulk-operations",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
