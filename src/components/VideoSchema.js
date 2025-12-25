import React from 'react';
import Head from '@docusaurus/Head';

/**
 * VideoSchema component for adding VideoObject structured data to pages with embedded videos
 * @param {Object} props
 * @param {string} props.videoId - YouTube video ID
 * @param {string} props.title - Video title
 * @param {string} props.description - Video description
 * @param {string} props.duration - Video duration in ISO 8601 format (e.g., 'PT10M30S')
 * @param {string} props.uploadDate - Upload date in ISO format
 * @param {string} props.pageUrl - URL of the page containing the video
 */
export default function VideoSchema({
  videoId,
  title,
  description,
  duration = 'PT5M',
  uploadDate = '2024-01-01T00:00:00Z',
  pageUrl
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${pageUrl}#video-${videoId}`,
    name: title,
    description: description,
    thumbnailUrl: [
      `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
      `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
    ],
    uploadDate: uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${videoId}`,
    embedUrl: `https://www.youtube.com/embed/${videoId}`,
    duration: duration,
    publisher: {
      '@type': 'Organization',
      '@id': 'https://daily.dev/#organization',
      name: 'daily.dev',
      logo: {
        '@type': 'ImageObject',
        url: 'https://docs.daily.dev/img/logo.png'
      }
    },
    inLanguage: 'en-US',
    isAccessibleForFree: true
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Head>
  );
}
