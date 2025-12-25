import React from 'react';
import Head from '@docusaurus/Head';

/**
 * OfferSchema component for adding Offer structured data (for Plus subscription)
 * @param {Object} props
 * @param {string} props.name - Offer name
 * @param {string} props.description - Offer description
 * @param {string} props.price - Price in decimal format
 * @param {string} props.priceCurrency - Currency code (e.g., 'USD')
 * @param {string} props.url - URL to the offer page
 * @param {string} props.pageUrl - URL of the current page
 */
export default function OfferSchema({
  name = 'daily.dev Plus',
  description = 'Premium upgrade for developers with AI-powered features, custom feeds, and ad-free experience',
  price = '5.00',
  priceCurrency = 'USD',
  url = 'https://app.daily.dev/plus',
  pageUrl
}) {
  const currentYear = new Date().getFullYear();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    '@id': `${pageUrl}#offer`,
    name: name,
    description: description,
    url: url,
    priceCurrency: priceCurrency,
    price: price,
    priceValidUntil: `${currentYear + 1}-12-31`,
    availability: 'https://schema.org/InStock',
    validFrom: '2024-01-01T00:00:00Z',
    seller: {
      '@type': 'Organization',
      '@id': 'https://daily.dev/#organization',
      name: 'daily.dev'
    },
    itemOffered: {
      '@type': 'Service',
      name: 'daily.dev Plus Subscription',
      description: 'Premium developer experience with advanced features',
      serviceType: 'Software Subscription',
      provider: {
        '@id': 'https://daily.dev/#organization'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        ratingCount: '5000',
        bestRating: '5',
        worstRating: '1'
      },
      category: 'Developer Tools'
    },
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: price,
      priceCurrency: priceCurrency,
      billingIncrement: 1,
      unitText: 'month',
      referenceQuantity: {
        '@type': 'QuantitativeValue',
        value: '1',
        unitCode: 'MON'
      }
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
