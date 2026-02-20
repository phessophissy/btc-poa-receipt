# security policy - Usage Guide

## Quick Start

```bash
# Enable security policy
export security-policy_ENABLED=true

# Start the backend with security policy support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `security-policy_ENABLED` | Enable/disable feature | `true` |
| `security-policy_MAX_RETRIES` | Maximum retry attempts | `3` |
| `security-policy_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/security-policy
POST /api/security-policy
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/security-policy \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "security-policy",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
