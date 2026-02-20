# contract unit - Usage Guide

## Quick Start

```bash
# Enable contract unit
export contract-unit_ENABLED=true

# Start the backend with contract unit support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `contract-unit_ENABLED` | Enable/disable feature | `true` |
| `contract-unit_MAX_RETRIES` | Maximum retry attempts | `3` |
| `contract-unit_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/contract-unit
POST /api/contract-unit
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/contract-unit \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "contract-unit",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
