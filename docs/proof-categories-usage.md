# proof categories - Usage Guide

## Quick Start

```bash
# Enable proof categories
export proof-categories_ENABLED=true

# Start the backend with proof categories support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `proof-categories_ENABLED` | Enable/disable feature | `true` |
| `proof-categories_MAX_RETRIES` | Maximum retry attempts | `3` |
| `proof-categories_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/proof-categories
POST /api/proof-categories
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/proof-categories \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "proof-categories",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
