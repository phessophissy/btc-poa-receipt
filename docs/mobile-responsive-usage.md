# mobile responsive - Usage Guide

## Quick Start

```bash
# Enable mobile responsive
export mobile-responsive_ENABLED=true

# Start the backend with mobile responsive support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `mobile-responsive_ENABLED` | Enable/disable feature | `true` |
| `mobile-responsive_MAX_RETRIES` | Maximum retry attempts | `3` |
| `mobile-responsive_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/mobile-responsive
POST /api/mobile-responsive
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/mobile-responsive \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "mobile-responsive",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
