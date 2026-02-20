# dark mode toggle - Usage Guide

## Quick Start

```bash
# Enable dark mode toggle
export dark-mode-toggle_ENABLED=true

# Start the backend with dark mode toggle support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `dark-mode-toggle_ENABLED` | Enable/disable feature | `true` |
| `dark-mode-toggle_MAX_RETRIES` | Maximum retry attempts | `3` |
| `dark-mode-toggle_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/dark-mode-toggle
POST /api/dark-mode-toggle
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/dark-mode-toggle \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "dark-mode-toggle",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
