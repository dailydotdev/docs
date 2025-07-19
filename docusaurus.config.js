// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'daily.dev',
  tagline: 'The complete guide to daily.dev for developers',
  url: 'https://docs.daily.dev/', 
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],
  favicon: 'img/favicon.ico',
  organizationName: 'dailydotdev', // Your GitHub org/user name
  projectName: 'docs', // Your repo name
  
  // SEO metadata
  customFields: {
    metadata: [
      {name: 'keywords', content: 'daily.dev, developer tools, tech news, programming, documentation'},
      {name: 'author', content: 'daily.dev'},
      {name: 'robots', content: 'index, follow'},
    ],
    experimental_faster: true,
  },

  // Resource hints for external assets
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: 'https://www.google-analytics.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: 'https://www.googletagmanager.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'dns-prefetch',
        href: 'https://OFOYRKZKKB-dsn.algolia.net',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preload',
        href: '/img/logo.png',
        as: 'image',
        type: 'image/png',
      },
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/dailydotdev/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/dailydotdev/docs/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'UA-109059578-7',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  // Performance optimizations removed to fix deployment issues
  
  // Bundle analyzer for optimization monitoring

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,   // Increased quality for better visual experience
        max: 1920,     // Higher max resolution for modern screens
        min: 640,      // Min resolution in pixels
        steps: 4,      // More steps for better responsive images
        disableInDev: false,
        name: '[name].[hash:8].[ext]', // Better caching with hashes
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { 
            from: '/docs/key-features/do-not-disturb', 
            to: '/docs/key-features/pause-new-tab' 
          },
          { 
            from: '/docs/settingyourfeed', 
            to: '/docs/setting-up-your-feed/filtering-content-feed' 
          },
          { 
            from: '/docs/settingyourfeed/filtering-content-feed', 
            to: '/docs/setting-up-your-feed/filtering-content-feed' 
          },
          { 
            from: '/docs/settingyourfeed/advanced-filtering-options', 
            to: '/docs/setting-up-your-feed/advanced-filtering-options' 
          },
          { 
            from: '/docs/settingyourfeed/blocking-tags-sources', 
            to: '/docs/setting-up-your-feed/blocking-tags-sources' 
          },
          { 
            from: '/docs/how-does-daily-dev-work/reputation', 
            to: '/docs/your-profile/reputation' 
          },
          { 
            from: '/docs/how-does-daily-dev-work/how-to-get-featured', 
            to: '/docs/for-content-creators/how-to-get-featured' 
          },
          { 
            from: '/docs/key-features/default-feeds', 
            to: '/docs/key-features/feeds' 
          }
        ],
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: false,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: '#25c2a0',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/logo.png',
            color: '#25c2a0',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
        swCustom: require.resolve('./src/registerSW.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'OFOYRKZKKB',
        apiKey: 'f70587b4279fabdac7fd30732de4e5de',
        indexName: 'docs-daily',
        contextualSearch: true,
        searchParameters: {
          hitsPerPage: 25,
        },
        placeholder: 'Search documentation...',
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: 'daily.dev Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          {
            label: 'Changelog',
            href: 'https://app.daily.dev/sources/daily_updates',
            position: 'left',
          },
          {
            href: 'https://github.com/dailydotdev/docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Product',
            items: [
              { label: 'Home', to: 'https://daily.dev/' },
              { label: 'Chrome extension', to: 'https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied' },
              { label: 'Web version', to: 'https://app.daily.dev/' },
              { label: 'Changelog', to: 'https://changelog.daily.dev/' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Open source', to: 'https://github.com/dailydotdev/.github/blob/master/CONTRIBUTING.md' },
              { label: 'Feature requests', to: 'https://github.com/dailydotdev/daily/discussions' },
              { label: 'Online events', to: 'https://www.meetup.com/the-monthly-dev-world-class-talks-by-expert-developers/' },
              { label: 'Swag store', to: 'https://store.daily.dev/' },
            ],
          },
          {
            title: 'Company',
            items: [
              { label: 'Blog', to: 'https://daily.dev/blog' },
              { label: 'Brand book', to: 'https://brand.daily.dev/' },
              { label: 'Contact', to: 'https://daily.dev/contact' },
              { label: 'Privacy', to: 'https://daily.dev/privacy' },
              { label: 'Terms', to: 'https://daily.dev/tos' },
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'Twitter/X', to: 'https://twitter.com/dailydotdev' },
              { label: 'GitHub', to: 'https://github.com/dailydotdev/daily' },
              { label: 'YouTube', to: 'https://www.youtube.com/channel/UCXUjtTfQWJa0G9K_SqRm3jQ' },
              { label: 'Instagram', to: 'https://www.instagram.com/dailydotdev/' },
              { label: 'TikTok', to: 'https://www.tiktok.com/@dailydotdev' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
