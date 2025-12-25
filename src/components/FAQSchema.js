import React from 'react';
import Head from '@docusaurus/Head';

/**
 * FAQSchema component for adding FAQPage structured data
 * @param {Object} props
 * @param {Array} props.faqs - Array of FAQ objects with question and answer
 * @param {string} props.pageUrl - URL of the FAQ page
 */
export default function FAQSchema({ faqs, pageUrl }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faqpage`,
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      '@id': `${pageUrl}#faq-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    })),
    about: {
      '@type': 'Thing',
      name: 'Career Mode',
      description: 'daily.dev Career Mode - developer-first hiring platform'
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebPage',
      '@id': pageUrl
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
