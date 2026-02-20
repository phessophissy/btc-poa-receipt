# config loading - Usage Guide

## Quick Start

```bash
# Enable config loading
export config-loading_ENABLED=true

# Start the backend with config loading support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `config-loading_ENABLED` | Enable/disable feature | `true` |
| `config-loading_MAX_RETRIES` | Maximum retry attempts | `3` |
| `config-loading_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/config-loading
POST /api/config-loading
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/config-loading \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "config-loading",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
