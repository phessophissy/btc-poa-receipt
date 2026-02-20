# testing guide - Usage Guide

## Quick Start

```bash
# Enable testing guide
export testing-guide_ENABLED=true

# Start the backend with testing guide support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `testing-guide_ENABLED` | Enable/disable feature | `true` |
| `testing-guide_MAX_RETRIES` | Maximum retry attempts | `3` |
| `testing-guide_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/testing-guide
POST /api/testing-guide
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/testing-guide \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "testing-guide",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
