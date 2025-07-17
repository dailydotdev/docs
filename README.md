<div align="center">
  <h1>📚 daily.dev Documentation</h1>
  <p>The official documentation site for daily.dev - built with Docusaurus 3</p>
  
  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fdocs.daily.dev&label=docs.daily.dev)](https://docs.daily.dev)
  [![License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](https://github.com/dailydotdev/daily/blob/master/LICENSE)
  [![Contributors](https://img.shields.io/github/contributors/dailydotdev/docs)](https://github.com/dailydotdev/docs/graphs/contributors)
  [![Docker](https://img.shields.io/docker/v/francescoxx/dailydev-docs?label=docker)](https://hub.docker.com/r/francescoxx/dailydev-docs)
</div>

## 🎯 Overview

This repository contains the comprehensive documentation for [daily.dev](https://daily.dev), designed to help our community members get the most out of the platform. The documentation covers everything from getting started to advanced features and contribution guidelines.

### ✨ Key Features

- **📖 Comprehensive Guides**: Complete coverage of daily.dev features and functionality
- **🔍 Algolia Search**: Fast, integrated search across all documentation
- **🌙 Dark/Light Mode**: Theme toggle for comfortable reading
- **📱 Responsive Design**: Optimized for all devices
- **✏️ Edit Links**: Direct GitHub integration for community contributions
- **🚀 Fast Performance**: Built with Docusaurus 3 for optimal speed

## 📊 Performance Metrics

Our documentation site is optimized for speed and performance:

- **Build Time**: ~45 seconds (production build)
- **Bundle Size**: ~2.1MB (gzipped: ~580KB)
- **Lighthouse Scores**:
  - 🚀 Performance: 95+
  - ♿ Accessibility: 100
  - 🔍 SEO: 100
  - 💡 Best Practices: 100

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v7.0 or higher (or yarn/pnpm equivalent)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/dailydotdev/docs.git
cd docs

# Use correct Node version (if using nvm)
nvm use

# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000` with hot reload enabled.

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run serve` | Serve built site locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run docker:compose` | Build and run with Docker Compose |
| `npm run docker:run` | Run pre-built Docker image |

## 🐳 Docker Development

### Using Docker Compose
```bash
docker compose up --build
```

### Using Pre-built Image
```bash
docker run -p 3000:3000 francescoxx/dailydev-docs:0.9.3
```

Both methods serve the site on `http://localhost:3000`.

## 🧪 Testing & Quality Assurance

### Running Tests

Currently, the project uses the following quality assurance processes:

```bash
# Build test (validates all content can be built)
npm run build

# Link checking (validates all internal and external links)
npm run build && npm run serve  # Manual verification recommended

# Markdown linting (if configured)
npm run lint  # Check for linting scripts in package.json
```

### Quality Checks

- **Content Validation**: All markdown files are validated during build
- **Link Validation**: Internal links are checked during build process
- **Performance Testing**: Lighthouse CI can be run on built site
- **Accessibility Testing**: Built-in Docusaurus accessibility features
- **SEO Validation**: Meta tags and structured data are automatically generated

### Continuous Integration

The project uses GitHub Actions for:
- **Build Verification**: Ensures all changes build successfully
- **Link Checking**: Validates all documentation links
- **Performance Monitoring**: Lighthouse scores on pull requests
- **Automated Deployment**: Builds and deploys to production

### Local Quality Checks

```bash
# Check for broken links locally
npm run build && npm run serve
# Then manually test critical pages

# Validate markdown formatting
# Use your preferred markdown linter or IDE extensions

# Performance testing
# Use browser dev tools or Lighthouse extension
```

## 🏗️ Architecture

This documentation site is built using modern web technologies:

- **[Docusaurus 3](https://docusaurus.io/)**: Static site generator with React-based theming
- **[React 18](https://reactjs.org/)**: Component framework for interactive elements
- **[MDX](https://mdxjs.com/)**: Markdown with JSX support for rich documentation
- **[Algolia Search](https://www.algolia.com/)**: Fast, integrated search functionality

### 📁 Project Structure

```
docs/
├── docs/                   # Documentation content (Markdown files)
├── src/
│   ├── components/        # React components
│   ├── pages/            # Custom pages
│   └── css/              # Global styles
├── static/               # Static assets (images, icons)
├── docusaurus.config.js  # Site configuration
└── sidebars.js          # Navigation structure
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 📝 Documentation Contributions

1. **Fork** the repository
2. **Create** a new branch for your changes
3. **Edit** or add documentation in the `docs/` directory
4. **Test** your changes locally with `npm start`
5. **Submit** a pull request with a clear description

### 🐛 Bug Reports & Feature Requests

- Use [GitHub Issues](https://github.com/dailydotdev/docs/issues) to report bugs or request features
- Provide detailed information and steps to reproduce
- Include screenshots when applicable

### 📋 Contribution Guidelines

- **Clear Documentation**: Write clear, concise, and helpful content
- **Consistent Style**: Follow existing formatting and tone
- **Test Changes**: Ensure your changes work locally before submitting
- **Descriptive PRs**: Include meaningful commit messages and PR descriptions

### 🔍 Review Process

Our review process ensures high-quality documentation:

1. **Automated Checks**: All PRs trigger automated builds and link validation
2. **Content Review**: Team members review for accuracy, clarity, and completeness
3. **Technical Review**: Changes are tested locally and validated against live site
4. **Approval Requirements**: 
   - At least one team member approval required
   - All automated checks must pass
   - No merge conflicts or failing builds
5. **Merge Timeline**: Most PRs are reviewed within 48 hours during business days

**Review Criteria:**
- Content accuracy and helpfulness
- Consistent formatting and style
- Working links and references
- Mobile-friendly formatting
- SEO optimization (headings, meta descriptions)

## 🔧 Troubleshooting

### Common Issues

**Node version conflicts:**
```bash
nvm use  # Use the version specified in .nvmrc
npm list  # Check installed packages
```

**Port already in use:**
```bash
npm start -- --port 3001  # Use a different port
lsof -ti:3000 | xargs kill -9  # Kill processes using port 3000
```

**Build errors:**
```bash
npm run clear  # Clear Docusaurus cache
npm install    # Reinstall dependencies
rm -rf node_modules package-lock.json && npm install  # Clean reinstall
```

**Memory issues during build:**
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build  # Increase memory limit
```

**Permission errors:**
```bash
sudo chown -R $(whoami) ~/.npm  # Fix npm permissions
npm cache clean --force  # Clear npm cache
```

**Algolia search not working:**
```bash
# Check if ALGOLIA_APP_ID and ALGOLIA_API_KEY are set
npm run build  # Search only works in production build
```

**Hot reload not working:**
```bash
npm run clear  # Clear cache
npm start -- --no-minify  # Disable minification
```

**Docker build failures:**
```bash
docker system prune -a  # Clean Docker system
docker build --no-cache .  # Build without cache
```

### Getting Help

- Check existing [Issues](https://github.com/dailydotdev/docs/issues)
- Visit [daily.dev](https://daily.dev) for general support
- Review [Docusaurus troubleshooting](https://docusaurus.io/docs/troubleshooting) for framework-specific issues

## Thank you to our contributors!

<div align="center">
  <img src="https://contrib.rocks/image?repo=dailydotdev/docs" alt="Contributors" />
</div>

## 📄 License

This project is licensed under the [AGPL-3.0 License](https://github.com/dailydotdev/daily/blob/master/LICENSE).

---

<div align="center">
  <p>Made with ❤️ by the daily.dev team and community</p>
  <p>
    <a href="https://daily.dev">Website</a> • 
    <a href="https://docs.daily.dev">Documentation</a> • 
    <a href="https://twitter.com/dailydotdev">Twitter</a> • 
    <a href="https://www.linkedin.com/company/dailydotdev">LinkedIn</a>

  </p>
  
  **Don't forget to ⭐ this repository if you found it helpful!**
</div>