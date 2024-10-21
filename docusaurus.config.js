// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'daily.dev',
  tagline: 'Where developers suffer together',
  url: 'https://docs.daily.dev/', 
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dailydotdev', // Your GitHub org/user name
  projectName: 'docs', // Your repo name

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
          trackingID: ['UA-109059578-7', 'G-Y94RMTGW0M'],
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly', // Sitemap configuration here
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,   // Adjust the image quality level
        max: 1024,     // Max resolution in pixels
        min: 640,      // Min resolution in pixels
        steps: 2,      // Resolutions generated
        disableInDev: false,
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
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
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
      announcementBar: {
        id: 'support_us',
        content: 'Try daily.dev <a target="_blank" rel="noopener noreferrer" href="https://daily.dev"> now!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
