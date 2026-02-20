# receipt templates - Usage Guide

## Quick Start

```bash
# Enable receipt templates
export receipt-templates_ENABLED=true

# Start the backend with receipt templates support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-templates_ENABLED` | Enable/disable feature | `true` |
| `receipt-templates_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-templates_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-templates
POST /api/receipt-templates
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-templates \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-templates",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
