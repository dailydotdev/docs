---
sidebar_position: 100
sidebar_label: For Developers & AI Agents
description: "Resources for developers building integrations and AI agents working with daily.dev - API access, machine-readable docs, and integration guides."
---

# For Developers & AI Agents

This page provides resources for developers building integrations with daily.dev and AI agents that need to understand or interact with the platform.

## Machine-Readable Resources

| Resource | URL | Description |
|----------|-----|-------------|
| **llms.txt** | [/llms.txt](https://docs.daily.dev/llms.txt) | Concise platform overview for LLMs |
| **Feature Index** | [/api/features.json](https://docs.daily.dev/api/features.json) | Structured JSON index of all features |
| **OpenAPI Spec** | [api.daily.dev/public/v1/docs/json](https://api.daily.dev/public/v1/docs/json) | Full API specification |
| **Sitemap** | [/sitemap.xml](https://docs.daily.dev/sitemap.xml) | All documentation pages |

## Public API

The daily.dev Public API provides programmatic access to feeds, posts, bookmarks, and more.

- **Requires**: [Plus subscription](../plus/plus-overview.md)
- **Base URL**: `https://api.daily.dev/public/v1`
- **Auth**: Bearer token (generate in [API Settings](https://app.daily.dev/settings/api))

[Full API Documentation →](../plus/public-api.md)

### Quick Example

```bash
curl -H "Authorization: Bearer $TOKEN" \
  "https://api.daily.dev/public/v1/feeds"
```

## AI Agent Integrations

daily.dev provides skills/plugins for popular AI coding assistants:

### Claude Code

```bash
claude plugin marketplace add https://github.com/dailydotdev/daily.git
claude plugin install daily.dev@daily.dev
claude "/daily.dev setup"
```

### OpenClaw

```
Install the daily-dev skill from clawdhub and explain my new superpowers
```

Skill available at [clawhub.ai/idoshamun/daily-dev](https://clawhub.ai/idoshamun/daily-dev)

### Codex

```
$skill-installer install the daily.dev skill from https://github.com/dailydotdev/daily.git
```

### Cursor

1. Open Settings → Rules
2. Add Remote Rule from: `https://github.com/dailydotdev/daily.git`
3. Use `/daily.dev` in Agent chat

## Repository Access

For AI agents working with daily.dev codebases:

| Repository | Purpose |
|------------|---------|
| [dailydotdev/docs](https://github.com/dailydotdev/docs) | This documentation site |
| [dailydotdev/apps](https://github.com/dailydotdev/apps) | Web app and browser extension |
| [dailydotdev/daily-api](https://github.com/dailydotdev/daily-api) | Backend API |

Each repository includes:
- `CLAUDE.md` - Instructions for Claude/AI assistants
- `AGENTS.md` - General AI agent guidelines (where applicable)

## Feature Discovery

The [features.json](https://docs.daily.dev/api/features.json) file provides a structured index of all platform features, including:

- Feature descriptions and documentation links
- API endpoints (where applicable)
- Capabilities and limitations
- Plus-only feature flags

### Example: Checking if a feature requires Plus

```javascript
const features = await fetch('https://docs.daily.dev/api/features.json').then(r => r.json());

if (features.features.smart_prompts.plus_only) {
  console.log('Smart Prompts requires Plus subscription');
}
```

## Rate Limits

When using the API programmatically:

| Limit Type | Rate |
|------------|------|
| IP-based | 300 requests/minute |
| User-based | 60 requests/minute |

Check response headers for current limits:
- `x-ratelimit-limit`
- `x-ratelimit-remaining`
- `x-ratelimit-reset`

## Support

- **API Issues**: Open an issue on [dailydotdev/daily-api](https://github.com/dailydotdev/daily-api)
- **Documentation**: Open an issue on [dailydotdev/docs](https://github.com/dailydotdev/docs)
- **General Support**: support@daily.dev
