# batch submissions - Usage Guide

## Quick Start

```bash
# Enable batch submissions
export batch-submissions_ENABLED=true

# Start the backend with batch submissions support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `batch-submissions_ENABLED` | Enable/disable feature | `true` |
| `batch-submissions_MAX_RETRIES` | Maximum retry attempts | `3` |
| `batch-submissions_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/batch-submissions
POST /api/batch-submissions
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/batch-submissions \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "batch-submissions",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
