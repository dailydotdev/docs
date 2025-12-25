import React, { useMemo } from 'react';
import Head from '@docusaurus/Head';

export default function StructuredData() {
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': 'https://docs.daily.dev/#website',
          url: 'https://docs.daily.dev',
          name: 'daily.dev Documentation',
          description: 'Comprehensive documentation for daily.dev - the leading platform for developers to discover tech news, engage with communities, and find their next job through Career Mode.',
          publisher: {
            '@id': 'https://daily.dev/#organization'
          },
          potentialAction: [
            {
              '@type': 'SearchAction',
              target: {
                '@type': 'EntryPoint',
                urlTemplate: 'https://docs.daily.dev/search?q={search_term_string}'
              },
              'query-input': 'required name=search_term_string'
            }
          ],
          inLanguage: 'en-US'
        },
        {
          '@type': 'Organization',
          '@id': 'https://daily.dev/#organization',
          name: 'daily.dev',
          url: 'https://daily.dev',
          logo: {
            '@type': 'ImageObject',
            url: 'https://docs.daily.dev/img/logo.png',
            width: 512,
            height: 512
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: 'https://daily.dev/contact'
          },
          sameAs: [
            'https://twitter.com/dailydotdev',
            'https://github.com/dailydotdev',
            'https://www.youtube.com/channel/UCXUjtTfQWJa0G9K_SqRm3jQ',
            'https://www.instagram.com/dailydotdev/',
            'https://www.tiktok.com/@dailydotdev'
          ],
          foundingDate: '2020-01-01',
          description: 'The leading platform for developers to discover tech news, engage with communities, and advance their careers through our developer-first hiring platform, Career Mode.'
        },
        {
          '@type': 'TechArticle',
          '@id': 'https://docs.daily.dev/#article',
          headline: 'daily.dev Documentation - Complete Developer Guide',
          name: 'daily.dev Documentation',
          description: 'Comprehensive documentation for daily.dev - the leading platform for developers to discover tech news, engage with communities, and find their next job through Career Mode.',
          url: 'https://docs.daily.dev',
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://docs.daily.dev/#webpage'
          },
          publisher: {
            '@id': 'https://daily.dev/#organization'
          },
          author: {
            '@id': 'https://daily.dev/#organization'
          },
          about: [
            {
              '@type': 'Thing',
              name: 'Developer Tools',
              description: 'Tools and platform for developers to discover and consume developer content'
            },
            {
              '@type': 'Thing',
              name: 'Software Development',
              description: 'Programming and software development resources'
            },
            {
              '@type': 'Thing',
              name: 'Tech News',
              description: 'Latest technology news and updates for developers'
            },
            {
              '@type': 'Thing',
              name: 'Career Mode',
              description: 'Developer-first hiring platform helping developers find their next job on their own terms'
            }
          ],
          audience: {
            '@type': 'Audience',
            audienceType: 'Software Developers',
            geographicArea: {
              '@type': 'Place',
              name: 'Worldwide'
            }
          },
          keywords: [
            'daily.dev',
            'developer tools',
            'tech news',
            'programming',
            'documentation',
            'developer feed',
            'coding news',
            'software development',
            'tech articles',
            'programming tutorials',
            'developer community',
            'RSS feed',
            'developer platform',
            'tech aggregator',
            'career mode',
            'developer jobs',
            'developer hiring',
            'tech jobs',
            'remote developer jobs',
            'software engineer jobs'
          ],
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          inLanguage: 'en-US',
          isAccessibleForFree: true,
          copyrightHolder: {
            '@id': 'https://daily.dev/#organization'
          },
          copyrightYear: new Date().getFullYear(),
          educationalUse: 'instruction',
          learningResourceType: 'documentation',
          typicalAgeRange: '18-65',
          image: {
            '@type': 'ImageObject',
            url: 'https://docs.daily.dev/img/daily-cover-photo.png',
            width: 1200,
            height: 630,
            caption: 'daily.dev Documentation - Developer Platform Guide'
          }
        },
        {
          '@type': 'WebPage',
          '@id': 'https://docs.daily.dev/#webpage',
          url: 'https://docs.daily.dev',
          name: 'daily.dev Documentation - Complete Developer Guide',
          isPartOf: {
            '@id': 'https://docs.daily.dev/#website'
          },
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: 'https://docs.daily.dev/img/daily-cover-photo.png',
            width: 1200,
            height: 630
          },
          datePublished: '2024-01-01T00:00:00Z',
          dateModified: new Date().toISOString(),
          description: 'Comprehensive documentation for daily.dev - the leading platform for developers to discover tech news, engage with communities, and find their next job through Career Mode.',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://docs.daily.dev'
              }
            ]
          },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.hero__title']
          }
        },
        {
          '@type': 'VideoObject',
          '@id': 'https://docs.daily.dev/#intro-video',
          name: 'Introduction to daily.dev',
          description: 'Learn how daily.dev helps developers discover tech news, engage with communities, and stay ahead in tech',
          thumbnailUrl: 'https://i.ytimg.com/vi/igZCEr3HwCg/maxresdefault.jpg',
          uploadDate: '2024-01-01T00:00:00Z',
          contentUrl: 'https://www.youtube.com/watch?v=igZCEr3HwCg',
          embedUrl: 'https://www.youtube.com/embed/igZCEr3HwCg',
          duration: 'PT4M30S',
          publisher: {
            '@id': 'https://daily.dev/#organization'
          },
          inLanguage: 'en-US'
        },
        {
          '@type': 'SoftwareApplication',
          '@id': 'https://docs.daily.dev/#software-application',
          name: 'daily.dev',
          applicationCategory: 'DeveloperApplication',
          applicationSubCategory: 'Developer Tools & News Aggregator',
          operatingSystem: ['Chrome', 'Edge', 'Firefox', 'Safari', 'Android', 'iOS', 'Windows', 'macOS', 'Linux'],
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock'
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '50000',
            bestRating: '5',
            worstRating: '1'
          },
          downloadUrl: 'https://chrome.google.com/webstore/detail/dailydev-the-homepage-dev/jlmpjdjjbgclbocgajdjefcidcncaied',
          installUrl: 'https://daily.dev',
          softwareVersion: '1.0',
          releaseNotes: 'Latest version with Career Mode - developer-first hiring platform',
          featureList: [
            'Personalized developer news feed from 1300+ sources',
            'Squads - specialized developer communities',
            'Career Mode - developer-first hiring platform',
            'AI-powered content curation and recommendations',
            'Bookmarks and custom feeds',
            'Plus subscription with advanced features',
            'Cross-platform synchronization',
            'Dark mode and customizable themes'
          ],
          screenshot: 'https://docs.daily.dev/img/daily-cover-photo.png',
          author: {
            '@id': 'https://daily.dev/#organization'
          },
          publisher: {
            '@id': 'https://daily.dev/#organization'
          },
          inLanguage: 'en-US',
          copyrightHolder: {
            '@id': 'https://daily.dev/#organization'
          },
          copyrightYear: new Date().getFullYear()
        }
      ]
    }),
    []
  );

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
