<div align="center">
  <h1>📚 daily.dev Documentation</h1>
  <p>The official documentation site for daily.dev - built with Docusaurus 3</p>
  
  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fdocs.daily.dev&label=docs.daily.dev)](https://docs.daily.dev)
  [![License](https://img.shields.io/badge/license-AGPL--3.0-blue.svg)](https://github.com/dailydotdev/daily/blob/master/LICENSE)
  [![Contributors](https://img.shields.io/github/contributors/dailydotdev/docs)](https://github.com/dailydotdev/docs/graphs/contributors)
  [![Docker](https://img.shields.io/docker/v/francescoxx/dailydev-docs?label=docker)](https://hub.docker.com/r/francescoxx/dailydev-docs)
  
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
  [![Docusaurus](https://img.shields.io/badge/Docusaurus-3.4.0-3ECC5F?style=flat&logo=facebook&logoColor=white)](https://docusaurus.io/)
  [![Node.js](https://img.shields.io/badge/Node.js-20.12+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
  [![Playwright](https://img.shields.io/badge/Playwright-1.40.0-2EAD33?style=flat&logo=playwright&logoColor=white)](https://playwright.dev/)
  [![ESLint](https://img.shields.io/badge/ESLint-8.57.0-4B32C3?style=flat&logo=eslint&logoColor=white)](https://eslint.org/)
  [![Prettier](https://img.shields.io/badge/Prettier-3.2.5-F7B93E?style=flat&logo=prettier&logoColor=white)](https://prettier.io/)
  
  [![Build Status](https://img.shields.io/github/actions/workflow/status/dailydotdev/docs/ci.yml?branch=main&style=flat&logo=github)](https://github.com/dailydotdev/docs/actions)
  [![Deployment](https://img.shields.io/github/deployments/dailydotdev/docs/production?style=flat&logo=vercel&label=deployment)](https://github.com/dailydotdev/docs/deployments)
  [![Bundle Size](https://img.shields.io/bundlephobia/minzip/dailydev-docs?style=flat&logo=webpack&label=bundle%20size)](https://bundlephobia.com/package/dailydev-docs)
  [![Code Quality](https://img.shields.io/codeclimate/maintainability/dailydotdev/docs?style=flat&logo=codeclimate)](https://codeclimate.com/github/dailydotdev/docs)
</div>

## 🎯 Overview

This repository contains the comprehensive documentation for [daily.dev](https://daily.dev), designed to help our community members get the most out of the platform. The documentation covers everything from getting started to advanced features and contribution guidelines.

<div align="center">
  <a href="https://docs.daily.dev" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Try%20it%20Live-docs.daily.dev-blue?style=for-the-badge&logo=firefox&logoColor=white" alt="Try it Live" />
  </a>
  <a href="https://gitpod.io/#https://github.com/dailydotdev/docs" target="_blank">
    <img src="https://img.shields.io/badge/🛠️%20Open%20in%20Gitpod-ready--to--code-908a85?style=for-the-badge&logo=gitpod" alt="Open in Gitpod" />
  </a>
</div>

### ✨ Key Features

- **Comprehensive Guides**: Complete coverage of daily.dev features and functionality
- **Algolia Search**: Fast, integrated search across all documentation
- **Dark/Light Mode**: Theme toggle for comfortable reading
- **Responsive Design**: Optimized for all devices
- **Edit Links**: Direct GitHub integration for community contributions
- **Fast Performance**: Built with Docusaurus 3 for optimal speed

## 📊 Performance Metrics

Our documentation site is optimized for speed and performance:

<div align="center">
  
  ![Build Time](https://img.shields.io/badge/Build%20Time-~45s-green?style=flat&logo=github-actions)
  ![Bundle Size](https://img.shields.io/badge/Bundle%20Size-~2.1MB-blue?style=flat&logo=webpack)
  ![Gzipped](https://img.shields.io/badge/Gzipped-~580KB-lightgreen?style=flat&logo=7zip)
  
  **🚀 Lighthouse Scores:**
  
  ![Performance](https://img.shields.io/badge/Performance-95+-brightgreen?style=flat&logo=lighthouse)
  ![Accessibility](https://img.shields.io/badge/Accessibility-100-brightgreen?style=flat&logo=lighthouse)
  ![SEO](https://img.shields.io/badge/SEO-100-brightgreen?style=flat&logo=lighthouse)
  ![Best Practices](https://img.shields.io/badge/Best%20Practices-100-brightgreen?style=flat&logo=lighthouse)
  
</div>

## 🚀 Quick Start

### Prerequisites

- **Node.js**: v20.12 or higher
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

### 🛠️ Developer Experience

**One-Click Setup:**
- [![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/dailydotdev/docs)
- [![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/dailydotdev/docs)

**VSCode Integration:**
```bash
# Recommended extensions are auto-suggested
# Settings and tasks are pre-configured in .vscode/
code .
```

**Development Tools:**
- 🔥 Hot reload with instant feedback
- 🔍 Built-in link validation
- 📝 MDX syntax highlighting
- 🎨 Real-time preview
- 🧪 Integrated testing with Playwright

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run build:optimized` | Build with optimizations |
| `npm run serve` | Serve built site locally |
| `npm run clear` | Clear Docusaurus cache |
| `npm run docker:compose` | Build and run with Docker Compose |
| `npm run docker:run` | Run pre-built Docker image |
| `npm test` | Run Playwright tests |
| `npm run test:headed` | Run Playwright tests in headed mode |
| `npm run test:ui` | Run Playwright tests with UI |
| `npm run lint` | Run ESLint on source files |
| `npm run lint:fix` | Run ESLint with auto-fix |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🐳 Docker Development

### Using Docker Compose
```bash
docker compose up --build
```

### Using Pre-built Image
```bash
docker run -p 3000:3000 francescoxx/dailydev-docs:0.19.0
```

Both methods serve the site on `http://localhost:3000`.

## 🧪 Testing & Quality Assurance

### Running Tests

The project uses Playwright for end-to-end testing and additional quality assurance processes:

```bash
# Run Playwright tests
npm test

# Run tests in headed mode (with browser UI)
npm run test:headed

# Run tests with Playwright UI
npm run test:ui

# Build test (validates all content can be built)
npm run build

# Code linting and formatting
npm run lint
npm run format:check
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