# receipt format - Usage Guide

## Quick Start

```bash
# Enable receipt format
export receipt-format_ENABLED=true

# Start the backend with receipt format support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-format_ENABLED` | Enable/disable feature | `true` |
| `receipt-format_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-format_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-format
POST /api/receipt-format
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-format \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-format",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
