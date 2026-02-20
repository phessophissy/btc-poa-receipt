# memory leak polling - Usage Guide

## Quick Start

```bash
# Enable memory leak polling
export memory-leak-polling_ENABLED=true

# Start the backend with memory leak polling support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `memory-leak-polling_ENABLED` | Enable/disable feature | `true` |
| `memory-leak-polling_MAX_RETRIES` | Maximum retry attempts | `3` |
| `memory-leak-polling_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/memory-leak-polling
POST /api/memory-leak-polling
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/memory-leak-polling \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "memory-leak-polling",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
