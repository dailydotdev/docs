import React from 'react';
import Head from '@docusaurus/Head';

/**
 * HowToSchema component for adding HowTo structured data to tutorial pages
 * @param {Object} props
 * @param {string} props.name - Title of the tutorial
 * @param {string} props.description - Description of what this tutorial teaches
 * @param {string} props.totalTime - Total time in ISO 8601 duration format (e.g., 'PT10M')
 * @param {Array} props.steps - Array of step objects with name, text, and optional url/image
 * @param {string} props.pageUrl - URL of the page
 */
export default function HowToSchema({
  name,
  description,
  totalTime = 'PT10M',
  steps,
  pageUrl
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    '@id': `${pageUrl}#howto`,
    name: name,
    description: description,
    totalTime: totalTime,
    inLanguage: 'en-US',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url || `${pageUrl}#step-${index + 1}`,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image
        }
      })
    })),
    about: {
      '@type': 'Thing',
      name: 'daily.dev',
      description: 'Developer platform for news, communities, and career opportunities'
    },
    author: {
      '@type': 'Organization',
      '@id': 'https://daily.dev/#organization',
      name: 'daily.dev'
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://daily.dev/#organization',
      name: 'daily.dev'
    }
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
