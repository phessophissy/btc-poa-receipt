# changelog - Usage Guide

## Quick Start

```bash
# Enable changelog
export changelog_ENABLED=true

# Start the backend with changelog support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `changelog_ENABLED` | Enable/disable feature | `true` |
| `changelog_MAX_RETRIES` | Maximum retry attempts | `3` |
| `changelog_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/changelog
POST /api/changelog
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/changelog \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "changelog",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
