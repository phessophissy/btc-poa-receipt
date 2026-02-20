# constants extraction - Usage Guide

## Quick Start

```bash
# Enable constants extraction
export constants-extraction_ENABLED=true

# Start the backend with constants extraction support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `constants-extraction_ENABLED` | Enable/disable feature | `true` |
| `constants-extraction_MAX_RETRIES` | Maximum retry attempts | `3` |
| `constants-extraction_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/constants-extraction
POST /api/constants-extraction
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/constants-extraction \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "constants-extraction",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
