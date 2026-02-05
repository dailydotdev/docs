---
sidebar_position: 7
description: "Access your daily.dev feed programmatically with the Public API. Build integrations with AI coding assistants, automate workflows, and access personalized developer content via REST API."
---

# Public API

The daily.dev Public API is a REST API that enables AI agents, automation tools, and custom integrations to access personalized developer content. Whether you're building with Claude Code, OpenClaw, or creating your own integration, the API provides programmatic access to your feeds, bookmarks, posts, and more.

:::info Plus Required
The Public API requires an active [Plus subscription](https://app.daily.dev/plus).
:::

## Getting Started

### Generate a Personal Access Token

1. Go to [API Settings](https://app.daily.dev/settings/api)
2. Click "Generate new token"
3. Give your token a descriptive name (e.g., "My AI Agent")
4. Choose an expiration period (never, 30 days, 90 days, or 1 year)
5. Copy and securely store your token - it will only be shown once

### Security Best Practices

- Never commit tokens to version control
- Store tokens in environment variables or secure vaults
- Revoke tokens you no longer need from the settings page

## Authentication

All API requests require Bearer token authentication.

**Header format:**

```
Authorization: Bearer <your-token>
```

**Example request:**

```bash
curl -H "Authorization: Bearer your-token-here" \
  https://api.daily.dev/public/v1/feeds
```

**Error responses:**

- `401 Unauthorized` - Missing or invalid token

## Base URL & API Reference

- **Base URL:** `https://api.daily.dev/public/v1`
- **OpenAPI Specification (JSON):** [https://api.daily.dev/public/v1/docs/json](https://api.daily.dev/public/v1/docs/json)
- **OpenAPI Specification (YAML):** [https://api.daily.dev/public/v1/docs/yaml](https://api.daily.dev/public/v1/docs/yaml)

The OpenAPI spec provides complete endpoint documentation including request/response schemas, and can be imported into tools like Postman or used to generate client libraries.

## Available Endpoints

### Feeds

Access your personalized content streams. Get your "For You" feed tailored to your interests, browse popular posts across the platform, discover content by specific tags or sources, or see what's generating the most discussion in the community.

- Get your personalized "For You" feed
- Browse trending and popular posts
- Filter content by tags or sources
- View most discussed posts

### Posts

Dive deeper into individual articles. Retrieve full details about any post including its summary, engagement metrics, and metadata. Access the discussion by fetching comments and replies.

- Get detailed information about any post
- Fetch comments and discussions

### Search

Find exactly what you're looking for. Search across posts to discover articles on specific topics, find tags to follow, or discover new content sources to add to your feed.

- Search posts by keywords
- Find tags matching your query
- Discover content sources

### Bookmarks

Access your saved content library. Retrieve bookmarks you've saved, search through them, and organize them into folders for easy access later.

- List your saved bookmarks
- Search within your bookmarks
- Manage bookmark folders (create, list, delete)
- Add or remove bookmarks programmatically

### Custom Feeds

Build laser-focused content streams for specific topics or workflows. Create custom feeds with specific filters, set engagement thresholds, and configure advanced content settings to surface exactly the content you need.

- List and view your custom feeds
- Create new custom feeds with specific criteria
- Update or delete existing feeds
- Configure advanced settings like minimum upvotes or view counts

### Feed Filters

Fine-tune what appears in your feeds. Manage the tags, sources, and content types that appear in your personalized or custom feeds. Add or remove filters to shape your content experience.

- View current filter settings
- Add tags or sources to follow
- Block unwanted tags or sources
- Apply filters to specific feeds or globally

### Notifications

Stay on top of your daily.dev activity. Access your notification feed, check unread counts, and mark notifications as read.

- List your notifications
- Get unread notification count
- Mark notifications as read

### Profile

Access and update your daily.dev profile information programmatically.

- Get your profile details
- Update profile information

### Tech Stack

Showcase the tools you use. Manage your technology stack that appears on your profile - add tools, update descriptions, reorder items, and search for tools to add.

- View your current tech stack
- Add new tools to your stack
- Update or remove existing items
- Search available tools
- Reorder your stack display

For complete endpoint details, parameters, and response schemas, see the [OpenAPI specification](https://api.daily.dev/public/v1/docs/json).

## Rate Limiting

The API implements two layers of rate limiting:

| Limit Type | Rate | Purpose |
| --- | --- | --- |
| IP-based | 300 requests/minute | Protection against abuse |
| User-based | 60 requests/minute | Fair usage quota |

**Rate limit headers in responses:**

- `x-ratelimit-limit` - Your rate limit ceiling
- `x-ratelimit-remaining` - Requests remaining in current window
- `x-ratelimit-reset` - When the rate limit resets

**When rate limited (HTTP 429):**

- `retry-after` header indicates seconds to wait
- Back off and retry after the indicated time

## Response Format

All responses use JSON with a consistent structure.

**Paginated responses:**

```json
{
  "data": [...],
  "pagination": {
    "hasNextPage": true,
    "endCursor": "cursor-string"
  }
}
```

**Pagination:** Use cursor-based pagination by passing the `endCursor` value as the `cursor` parameter in subsequent requests.

## AI Agent Integrations

### Claude Code

Add daily.dev to Claude Code as a plugin with these commands:

```bash
claude plugin marketplace add https://github.com/dailydotdev/daily.git
claude plugin install daily.dev@daily.dev
claude "/daily.dev setup"
```

After installation, use the `/daily.dev` skill to interact with your daily.dev feed and other features.

### OpenClaw

Copy this instruction to your agent to get started:

```
Install the daily-dev skill from clawdhub and explain my new superpowers
```

The skill is available on ClawHub at [https://clawhub.ai/idoshamun/daily-dev](https://clawhub.ai/idoshamun/daily-dev)

### Codex

Install the daily.dev skill in Codex with this command:

```
$skill-installer install the daily.dev skill from https://github.com/dailydotdev/daily.git
```

Restart Codex after installation, then use `$daily.dev` to interact with your feed.

### Cursor

Add daily.dev as a remote rule in Cursor:

1. Open Cursor Settings → Rules (Cmd+Shift+J on Mac, Ctrl+Shift+J on Windows/Linux)
2. Click "Add Rule" → "Remote Rule (Github)"
3. Enter the repository URL: `https://github.com/dailydotdev/daily.git`

Use `/daily.dev` in Agent chat to interact with your feed.

### Direct API Integration

For custom integrations, use the OpenAPI specification to generate client libraries or make direct HTTP requests. The specification is available at:

- JSON: [https://api.daily.dev/public/v1/docs/json](https://api.daily.dev/public/v1/docs/json)
- YAML: [https://api.daily.dev/public/v1/docs/yaml](https://api.daily.dev/public/v1/docs/yaml)

## Example: Fetching Your Feed

```bash
# Get your personalized feed
curl -H "Authorization: Bearer $DAILY_DEV_TOKEN" \
  "https://api.daily.dev/public/v1/feeds"

# Get the next page using cursor
curl -H "Authorization: Bearer $DAILY_DEV_TOKEN" \
  "https://api.daily.dev/public/v1/feeds?cursor=cursor-from-previous-response"
```

## Related Documentation

- [Plus Overview](plus-overview.md) - Learn about all Plus features
- [Custom Feeds](custom-feeds.md) - Create feeds to access via API
