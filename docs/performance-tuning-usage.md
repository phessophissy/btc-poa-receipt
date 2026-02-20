# performance tuning - Usage Guide

## Quick Start

```bash
# Enable performance tuning
export performance-tuning_ENABLED=true

# Start the backend with performance tuning support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `performance-tuning_ENABLED` | Enable/disable feature | `true` |
| `performance-tuning_MAX_RETRIES` | Maximum retry attempts | `3` |
| `performance-tuning_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/performance-tuning
POST /api/performance-tuning
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/performance-tuning \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "performance-tuning",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
