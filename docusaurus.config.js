// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Daily.dev',
  tagline: 'ALL DEVELOPER NEWS IN ONE PLACE',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'dailydotdev', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/dailydotdev/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dailydotdev/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        // title: 'My Site',
        logo: {
          alt: 'Daily.dev Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Docs',
            type: 'doc',
            docId: 'intro',
            position: 'left',
          },
          // {
          //   label: 'Blog', 
          //   to: '/blog', 
          //   position: 'left'
          // },
          {
            label: 'Community', 
            type: 'doc',
            docId: 'community/support',
            position: 'left'
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
              {
                label: 'Home',
                to: 'https://daily.dev/',
              },
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Events',
                href: 'https://www.meetup.com/it-IT/the-monthly-dev-world-class-talks-by-expert-developers/',
              },
              {
                label: 'Become a contributor',
                href: 'https://github.com/dailydotdev/.github/blob/master/CONTRIBUTING.md',
              },
              {
                label: 'GitHub Discussions',
                href: 'https://github.com/dailydotdev/daily/discussions',
              },
              {
                label: 'Content Guidelines',
                href: 'https://daily.dev/support/content-guidelines',
              },
              {
                label: 'Write for us',
                href: 'https://daily.dev/support/submit-a-story',
              },
              {
                label: 'SWAG Store',
                href: 'https://store.daily.dev/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                href: 'https://daily.dev/about',
              },
              {
                label: 'Blog',
                href: 'https://daily.dev/blog',
              },
              {
                label: 'Advertise',
                href: 'https://promote.daily.dev/',
              },
              {
                label: 'Media Kit',
                href: 'https://daily.dev/media-kit',
              },
              {
                label: 'FAQ',
                href: 'https://daily.dev/support',
              },
              {
                label: 'Contact',
                href: 'https://daily.dev/contact',
              }
            ],
          },{
            title: 'Social Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/dailydotdev/daily',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/dailydotdev',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/channel/UCXUjtTfQWJa0G9K_SqRm3jQ',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/dailydotdev',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/dailydotdev/',
              },
              {
                label: 'Product Hunt',
                href: 'https://www.producthunt.com/posts/daily-dev',
              },
              {
                label: 'to Markdown',
                to: '/markdown-page',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Daily.dev  All rights reserved.`,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Try the extension <a target="_blank" rel="noopener noreferrer" href="https://daily.dev"> now!</a>',
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
