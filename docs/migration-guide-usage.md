# migration guide - Usage Guide

## Quick Start

```bash
# Enable migration guide
export migration-guide_ENABLED=true

# Start the backend with migration guide support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `migration-guide_ENABLED` | Enable/disable feature | `true` |
| `migration-guide_MAX_RETRIES` | Maximum retry attempts | `3` |
| `migration-guide_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/migration-guide
POST /api/migration-guide
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/migration-guide \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "migration-guide",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
