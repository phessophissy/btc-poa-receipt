# faq - Usage Guide

## Quick Start

```bash
# Enable faq
export faq_ENABLED=true

# Start the backend with faq support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `faq_ENABLED` | Enable/disable feature | `true` |
| `faq_MAX_RETRIES` | Maximum retry attempts | `3` |
| `faq_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/faq
POST /api/faq
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/faq \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "faq",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
