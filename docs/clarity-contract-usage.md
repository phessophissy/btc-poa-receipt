# clarity contract - Usage Guide

## Quick Start

```bash
# Enable clarity contract
export clarity-contract_ENABLED=true

# Start the backend with clarity contract support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `clarity-contract_ENABLED` | Enable/disable feature | `true` |
| `clarity-contract_MAX_RETRIES` | Maximum retry attempts | `3` |
| `clarity-contract_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/clarity-contract
POST /api/clarity-contract
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/clarity-contract \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "clarity-contract",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
