# wallet reconnect - Usage Guide

## Quick Start

```bash
# Enable wallet reconnect
export wallet-reconnect_ENABLED=true

# Start the backend with wallet reconnect support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `wallet-reconnect_ENABLED` | Enable/disable feature | `true` |
| `wallet-reconnect_MAX_RETRIES` | Maximum retry attempts | `3` |
| `wallet-reconnect_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/wallet-reconnect
POST /api/wallet-reconnect
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/wallet-reconnect \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "wallet-reconnect",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
