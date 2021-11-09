// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'daily.dev',
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
          editUrl: 'https://github.com/dailydotdev/docs/edit/main',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dailydotdev/docs/edit/main',
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
                label: 'Web Version',
                to: 'https://app.daily.dev/',
              },
              {
                label: 'Chrome Extension',
                to: 'https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied',
              },
              {
                label: 'Firefox Add-on',
                to: 'https://addons.mozilla.org/en-US/firefox/addon/daily/',
              },
              {
                label: 'Edge Extension',
                to: 'https://microsoftedge.microsoft.com/addons/detail/dailydev-news-for-busy/cbdhgldgiancdheindpekpcbkccpjaeb?hl=en-GB',
              },
              {
                label: 'Android app',
                to: 'https://play.google.com/store/apps/details?id=dev.daily',
              },
              {
                label: 'Changelog',
                to: 'https://changelog.daily.dev/',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Events',
                to: 'https://www.meetup.com/it-IT/the-monthly-dev-world-class-talks-by-expert-developers/',
              },
              {
                label: 'Become a contributor',
                to: 'https://github.com/dailydotdev/.github/blob/master/CONTRIBUTING.md',
              },
              {
                label: 'GitHub Discussions',
                to: 'https://github.com/dailydotdev/daily/discussions',
              },
              {
                label: 'Content Guidelines',
                to: 'https://daily.dev/support/content-guidelines',
              },
              {
                label: 'Write for us',
                to: 'https://daily.dev/support/submit-a-story',
              },
              {
                label: 'SWAG Store',
                to: 'https://store.daily.dev/',
              },
            ],
          },
          {
            title: 'Company',
            items: [
              {
                label: 'About',
                to: 'https://daily.dev/about',
              },
              {
                label: 'Blog',
                to: 'https://daily.dev/blog',
              },
              {
                label: 'Advertise',
                to: 'https://promote.daily.dev/',
              },
              {
                label: 'Media Kit',
                to: 'https://daily.dev/media-kit',
              },
              {
                label: 'FAQ',
                to: 'https://daily.dev/support',
              },
              {
                label: 'Contact',
                to: 'https://daily.dev/contact',
              },
              {
                label: 'Privacy',
                to: 'https://daily.dev/privacy',
              },
              {
                label: 'Terms',
                to: 'https://daily.dev/tos',
              }
            ],
          }, {
            title: 'Social Links',
            items: [
              {
                label: 'GitHub',
                to: 'https://github.com/dailydotdev/daily',
              },
              {
                label: 'Twitter',
                to: 'https://twitter.com/dailydotdev',
              },
              {
                label: 'YouTube',
                to: 'https://www.youtube.com/channel/UCXUjtTfQWJa0G9K_SqRm3jQ',
              },
              {
                label: 'Facebook',
                to: 'https://www.facebook.com/dailydotdev',
              },
              {
                label: 'Instagram',
                to: 'https://www.instagram.com/dailydotdev/',
              },
              {
                label: 'Product Hunt',
                to: 'https://www.producthunt.com/posts/daily-dev',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} daily.dev  All rights reserved.`,
      },
      announcementBar: {
        id: 'support_us',
        content:
          'Try daily.dev <a target="_blank" rel="noopener noreferrer" href="https://daily.dev"> now!</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: true,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'BDMLM7I64N',

        // Public API key: it is safe to commit it
        apiKey: '724aeea3a6bc3a2af4ad7e9789752f2d',

        indexName: 'prod_docs'
      }
    }),
};

module.exports = config;
