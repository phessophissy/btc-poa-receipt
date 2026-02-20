# health dashboard - Usage Guide

## Quick Start

```bash
# Enable health dashboard
export health-dashboard_ENABLED=true

# Start the backend with health dashboard support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `health-dashboard_ENABLED` | Enable/disable feature | `true` |
| `health-dashboard_MAX_RETRIES` | Maximum retry attempts | `3` |
| `health-dashboard_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/health-dashboard
POST /api/health-dashboard
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/health-dashboard \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "health-dashboard",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
