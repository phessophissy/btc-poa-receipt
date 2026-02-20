# multi hash algorithms - Usage Guide

## Quick Start

```bash
# Enable multi hash algorithms
export multi-hash-algorithms_ENABLED=true

# Start the backend with multi hash algorithms support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `multi-hash-algorithms_ENABLED` | Enable/disable feature | `true` |
| `multi-hash-algorithms_MAX_RETRIES` | Maximum retry attempts | `3` |
| `multi-hash-algorithms_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/multi-hash-algorithms
POST /api/multi-hash-algorithms
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/multi-hash-algorithms \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "multi-hash-algorithms",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
