# explorer links - Usage Guide

## Quick Start

```bash
# Enable explorer links
export explorer-links_ENABLED=true

# Start the backend with explorer links support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `explorer-links_ENABLED` | Enable/disable feature | `true` |
| `explorer-links_MAX_RETRIES` | Maximum retry attempts | `3` |
| `explorer-links_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/explorer-links
POST /api/explorer-links
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/explorer-links \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "explorer-links",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
