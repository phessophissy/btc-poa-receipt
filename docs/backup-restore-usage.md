# backup restore - Usage Guide

## Quick Start

```bash
# Enable backup restore
export backup-restore_ENABLED=true

# Start the backend with backup restore support
cd backend && npm start
```

## Configuration

| Variable | Description | Default |
|----------|-------------|---------|
| `backup-restore_ENABLED` | Enable/disable feature | `true` |
| `backup-restore_MAX_RETRIES` | Maximum retry attempts | `3` |
| `backup-restore_TIMEOUT` | Operation timeout (ms) | `5000` |

## API Usage

### Endpoint
```
GET /api/backup-restore
POST /api/backup-restore
```

### Example Request
```bash
curl -X GET http://localhost:3001/api/backup-restore \
  -H "Content-Type: application/json"
```

### Example Response
```json
{
  "status": "ok",
  "module": "backup-restore",
  "timestamp": "2026-02-20T00:00:00.000Z"
}
```

## Integration with PoA System

This module integrates with the proof submission pipeline and receipt generation flow.
