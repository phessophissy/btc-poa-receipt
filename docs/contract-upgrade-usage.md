# contract upgrade - Usage Guide

## Quick Start

```bash
# Enable contract upgrade
export contract-upgrade_ENABLED=true

# Start the backend with contract upgrade support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `contract-upgrade_ENABLED` | Enable/disable feature | `true` |
| `contract-upgrade_MAX_RETRIES` | Maximum retry attempts | `3` |
| `contract-upgrade_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/contract-upgrade
POST /api/contract-upgrade
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/contract-upgrade \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "contract-upgrade",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
