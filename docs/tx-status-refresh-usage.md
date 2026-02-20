# tx status refresh - Usage Guide

## Quick Start

```bash
# Enable tx status refresh
export tx-status-refresh_ENABLED=true

# Start the backend with tx status refresh support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `tx-status-refresh_ENABLED` | Enable/disable feature | `true` |
| `tx-status-refresh_MAX_RETRIES` | Maximum retry attempts | `3` |
| `tx-status-refresh_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/tx-status-refresh
POST /api/tx-status-refresh
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/tx-status-refresh \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "tx-status-refresh",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
