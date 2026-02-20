# compliance - Usage Guide

## Quick Start

```bash
# Enable compliance
export compliance_ENABLED=true

# Start the backend with compliance support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `compliance_ENABLED` | Enable/disable feature | `true` |
| `compliance_MAX_RETRIES` | Maximum retry attempts | `3` |
| `compliance_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/compliance
POST /api/compliance
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/compliance \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "compliance",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
