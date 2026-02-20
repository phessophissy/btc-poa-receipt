# integration flow - Usage Guide

## Quick Start

```bash
# Enable integration flow
export integration-flow_ENABLED=true

# Start the backend with integration flow support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `integration-flow_ENABLED` | Enable/disable feature | `true` |
| `integration-flow_MAX_RETRIES` | Maximum retry attempts | `3` |
| `integration-flow_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/integration-flow
POST /api/integration-flow
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/integration-flow \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "integration-flow",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
