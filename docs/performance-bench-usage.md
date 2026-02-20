# performance bench - Usage Guide

## Quick Start

```bash
# Enable performance bench
export performance-bench_ENABLED=true

# Start the backend with performance bench support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `performance-bench_ENABLED` | Enable/disable feature | `true` |
| `performance-bench_MAX_RETRIES` | Maximum retry attempts | `3` |
| `performance-bench_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/performance-bench
POST /api/performance-bench
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/performance-bench \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "performance-bench",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
