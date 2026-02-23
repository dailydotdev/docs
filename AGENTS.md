# AGENTS.md - AI Agent Instructions

This file provides guidance for AI agents (Claude, GPT, Codex, etc.) working with the daily.dev documentation repository.

## Repository Purpose

This is the official documentation site for daily.dev, a professional network for developers. The docs cover platform features, guides, and community information.

## Quick Reference

| Resource | Location |
|----------|----------|
| Documentation content | `docs/` |
| Machine-readable overview | `static/llms.txt` |
| Feature index (JSON) | `static/api/features.json` |
| Site config | `docusaurus.config.js` |
| Sidebar structure | `sidebars.js` |

## Documentation Structure

```
docs/
├── getting-started/     # Installation guides
├── key-features/        # Core platform features
├── setting-up-your-feed/# Feed configuration
├── customize-your-feed/ # Visual customization
├── squads/              # Community features
├── plus/                # Premium features
├── monetization/        # Cores, awards, boost
├── organizations/       # Team features
├── your-profile/        # Profile management
├── career-mode/         # Job matching
└── for-content-creators/# Creator guidelines
```

## Common Tasks

### Adding Documentation

1. Create `.md` file in appropriate `docs/` subdirectory
2. Add frontmatter:
   ```yaml
   ---
   sidebar_position: N
   description: "Brief description for SEO and previews"
   ---
   ```
3. Use proper heading hierarchy (H1 > H2 > H3)
4. Link related docs with relative paths: `[text](../category/page.md)`

### Updating Feature Docs

When documenting features, verify against:
- `dailydotdev/daily-api` - Backend implementation
- `dailydotdev/apps` - Frontend implementation

Check what's actually shipped vs what's in code but not exposed.

### Style Guidelines

- **Tone**: Professional, clear, developer-friendly
- **Avoid**: Excessive emojis, marketing fluff, exclamation marks
- **Prefer**: Technical clarity, concrete examples, accurate information
- **Images**: Store in `static/img/`, use Cloudinary URLs for screenshots

## API Documentation

The Public API requires Plus subscription:
- Base URL: `https://api.daily.dev/public/v1`
- OpenAPI Spec: `https://api.daily.dev/public/v1/docs/json`
- Docs: `docs/plus/public-api.md`

## Key Files for Agents

### For Understanding the Platform
- `static/llms.txt` - Concise platform overview
- `static/api/features.json` - Structured feature index
- `docs/intro.md` - User-facing introduction

### For Development
- `CLAUDE.md` - Claude-specific dev instructions
- `docusaurus.config.js` - Site configuration
- `package.json` - Dependencies and scripts

## Verification Checklist

Before submitting documentation changes:

- [ ] Frontmatter includes sidebar_position and description
- [ ] Links use relative paths and work correctly
- [ ] Feature description matches current implementation
- [ ] No broken images or missing assets
- [ ] Tone is professional (see CLAUDE.md)

## Related Repositories

- `dailydotdev/daily-api` - Backend API
- `dailydotdev/apps` - Web and extension frontends
- `dailydotdev/daily` - Main monorepo

## Contact

For questions about documentation: open an issue or PR on this repository.
