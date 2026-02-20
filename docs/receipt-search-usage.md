# receipt search - Usage Guide

## Quick Start

```bash
# Enable receipt search
export receipt-search_ENABLED=true

# Start the backend with receipt search support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-search_ENABLED` | Enable/disable feature | `true` |
| `receipt-search_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-search_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-search
POST /api/receipt-search
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-search \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-search",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
