# security scanning - Usage Guide

## Quick Start

```bash
# Enable security scanning
export security-scanning_ENABLED=true

# Start the backend with security scanning support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `security-scanning_ENABLED` | Enable/disable feature | `true` |
| `security-scanning_MAX_RETRIES` | Maximum retry attempts | `3` |
| `security-scanning_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/security-scanning
POST /api/security-scanning
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/security-scanning \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "security-scanning",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
