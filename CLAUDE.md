# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official documentation site for daily.dev, built using Docusaurus 3. It serves as a comprehensive resource for daily.dev users covering features, guides, and community information.

## Development Commands

### Local Development
```bash
npm start          # Start development server at localhost:3000
npm run build      # Build for production  
npm run serve      # Serve built site locally
npm run clear      # Clear Docusaurus cache
```

### Docker Development
```bash
npm run docker:compose    # Build and run with docker-compose
npm run docker:run        # Run pre-built image
```

## Architecture

### Core Framework
- **Docusaurus 3**: Static site generator with React-based theming
- **React 18**: Component framework
- **MDX**: Markdown with JSX support for interactive documentation

### Key Configuration Files
- `docusaurus.config.js`: Main site configuration including navbar, footer, plugins, and theme settings
- `sidebars.js`: Documentation sidebar structure (auto-generated from docs folder)
- `src/pages/index.js`: Custom homepage component
- `src/css/custom.css`: Global styles and theming

### Content Structure
- `docs/`: All documentation markdown files organized by category
- `static/`: Static assets (images, icons, etc.)
- `src/components/`: React components for homepage and custom elements
- `src/pages/`: Custom pages outside the docs structure

### Important Features
- **Algolia Search**: Integrated search functionality
- **Dark Mode**: Default dark theme with light mode toggle
- **Image Optimization**: @docusaurus/plugin-ideal-image for responsive images
- **Analytics**: Google Analytics integration
- **Edit Links**: Direct GitHub edit links for all documentation

### Content Categories
The documentation is organized into main categories:
- Getting Started
- Key Features  
- Setting Up Your Feed
- Customization
- Squads
- Plus Features
- Monetization
- Community
- Your Profile
- For Content Creators
- For OSS Contributors

## Development Notes

### Adding New Documentation
- Create `.md` files in appropriate `docs/` subdirectories
- Use `_category_.json` files to configure category metadata
- Sidebar is auto-generated from folder structure
- **IMPORTANT**: When adding new feature documentation, also update the homepage navigation in `src/components/homepage/homeNavBoxes.js` to add a link to the new feature in the appropriate section (e.g., Plus, Key features, etc.)

### Component Development
- Homepage components are in `src/components/homepage/`
- Feature components follow React functional component patterns
- CSS modules are used for component styling

### Asset Management
- Icons and images should be placed in `static/img/`
- Use SVG format for icons when possible
- Images are optimized automatically by the ideal-image plugin

### Deployment
- Production builds are generated in `build/` directory
- Site is configured for deployment to docs.daily.dev
- Vercel configuration is available in `vercel.json`