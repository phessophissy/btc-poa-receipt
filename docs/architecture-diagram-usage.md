# architecture diagram - Usage Guide

## Quick Start

```bash
# Enable architecture diagram
export architecture-diagram_ENABLED=true

# Start the backend with architecture diagram support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `architecture-diagram_ENABLED` | Enable/disable feature | `true` |
| `architecture-diagram_MAX_RETRIES` | Maximum retry attempts | `3` |
| `architecture-diagram_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/architecture-diagram
POST /api/architecture-diagram
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/architecture-diagram \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "architecture-diagram",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
