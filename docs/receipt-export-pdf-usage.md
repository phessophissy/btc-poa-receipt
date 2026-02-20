# receipt export pdf - Usage Guide

## Quick Start

```bash
# Enable receipt export pdf
export receipt-export-pdf_ENABLED=true

# Start the backend with receipt export pdf support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `receipt-export-pdf_ENABLED` | Enable/disable feature | `true` |
| `receipt-export-pdf_MAX_RETRIES` | Maximum retry attempts | `3` |
| `receipt-export-pdf_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/receipt-export-pdf
POST /api/receipt-export-pdf
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/receipt-export-pdf \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "receipt-export-pdf",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
