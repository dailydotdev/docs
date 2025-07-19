import React, { useMemo } from 'react';
import Head from '@docusaurus/Head';
import { usePerformanceTracking } from '../utils/performance';

export default function StructuredData() {
  const { trackRender } = usePerformanceTracking('StructuredData');

  React.useEffect(() => {
    const tracker = trackRender();
    return () => tracker.end();
  }, [trackRender]);

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      name: 'daily.dev Documentation',
      description:
        'Complete guide to daily.dev features, setup, and customization for developers',
      url: 'https://docs.daily.dev',
      publisher: {
        '@type': 'Organization',
        name: 'daily.dev',
        url: 'https://daily.dev',
        logo: {
          '@type': 'ImageObject',
          url: 'https://docs.daily.dev/img/logo.png',
        },
      },
      about: {
        '@type': 'Thing',
        name: 'Developer Tools',
        description:
          'Tools and platform for developers to discover and consume developer content',
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Software Developers',
      },
      keywords: [
        'daily.dev',
        'developer tools',
        'tech news',
        'programming',
        'documentation',
        'developer feed',
      ],
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
      inLanguage: 'en-US',
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
