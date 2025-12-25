import React from 'react';
import Head from '@docusaurus/Head';
import { useLocation } from '@docusaurus/router';

/**
 * BreadcrumbSchema component for adding BreadcrumbList structured data
 * Automatically generates breadcrumbs based on the current page path
 */
export default function BreadcrumbSchema({ customBreadcrumbs = null }) {
  const location = useLocation();

  // Generate breadcrumbs from URL path if not provided
  const generateBreadcrumbs = () => {
    if (customBreadcrumbs) {
      return customBreadcrumbs;
    }

    const pathSegments = location.pathname
      .split('/')
      .filter(segment => segment && segment !== 'docs');

    const breadcrumbs = [
      {
        name: 'Home',
        url: 'https://docs.daily.dev'
      }
    ];

    let currentPath = 'https://docs.daily.dev/docs';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;

      // Convert slug to title (e.g., 'career-mode' -> 'Career Mode')
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        name: name,
        url: currentPath
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${location.pathname}#breadcrumb`,
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: index === breadcrumbs.length - 1 ? undefined : crumb.url
    }))
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
