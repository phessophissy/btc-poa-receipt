# state management - Usage Guide

## Quick Start

```bash
# Enable state management
export state-management_ENABLED=true

# Start the backend with state management support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `state-management_ENABLED` | Enable/disable feature | `true` |
| `state-management_MAX_RETRIES` | Maximum retry attempts | `3` |
| `state-management_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/state-management
POST /api/state-management
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/state-management \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "state-management",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
