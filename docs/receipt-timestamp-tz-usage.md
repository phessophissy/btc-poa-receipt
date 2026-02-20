# receipt timestamp tz - Usage Guide

## Quick Start

```bash
# Enable receipt timestamp tz
export receipt-timestamp-tz_ENABLED=true

# Start the backend with receipt timestamp tz support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-timestamp-tz_ENABLED` | Enable/disable feature | `true` |
| `receipt-timestamp-tz_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-timestamp-tz_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-timestamp-tz
POST /api/receipt-timestamp-tz
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-timestamp-tz \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-timestamp-tz",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
