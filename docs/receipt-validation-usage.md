# receipt validation - Usage Guide

## Quick Start

```bash
# Enable receipt validation
export receipt-validation_ENABLED=true

# Start the backend with receipt validation support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-validation_ENABLED` | Enable/disable feature | `true` |
| `receipt-validation_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-validation_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-validation
POST /api/receipt-validation
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-validation \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-validation",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
