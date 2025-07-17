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

## 🔧 Troubleshooting

### Common Issues

**Node version conflicts:**
```bash
nvm use  # Use the version specified in .nvmrc
```

**Port already in use:**
```bash
npm start -- --port 3001  # Use a different port
```

**Build errors:**
```bash
npm run clear  # Clear Docusaurus cache
npm install    # Reinstall dependencies
```

### Getting Help

- Check existing [Issues](https://github.com/dailydotdev/docs/issues)
- Join our [Discord community](https://discord.gg/daily-dev)
- Visit [daily.dev](https://daily.dev) for general support

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
    <a href="https://twitter.com/dailydotdev">Twitter</a>
  </p>
  
  **Don't forget to ⭐ this repository if you found it helpful!**
</div>
