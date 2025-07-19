import React, { Suspense, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import styles from './video.module.css';
import StructuredData from '../structured-data/schema';
import { Redirect } from '@docusaurus/router';
import ErrorBoundary from '../components/ErrorBoundary';

// Lazy load non-critical components
const HomeNavBoxes = React.lazy(
  () => import('../components/homepage/homeNavBoxes')
);

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">daily.dev docs</h1>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  // return <Redirect to="/docs/intro" />;
  return (
    <Layout
      title="daily.dev Documentation - Developer Tools & Features Guide"
      description="Complete guide to daily.dev features, setup, and customization. Learn how to optimize your developer feed, use advanced features, and engage with the dev community."
    >
      <Head>
        <meta property="og:title" content="daily.dev Documentation" />
        <meta
          property="og:description"
          content="Complete guide to daily.dev features, setup, and customization for developers"
        />
        <meta
          property="og:image"
          content="https://docs.daily.dev/img/daily-cover-photo.png"
        />
        <meta property="og:url" content="https://docs.daily.dev/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="daily.dev Documentation" />
        <meta
          name="twitter:description"
          content="Complete guide to daily.dev features, setup, and customization for developers"
        />
        <meta
          name="twitter:image"
          content="https://docs.daily.dev/img/daily-cover-photo.png"
        />

        {/* Preload critical resources */}
        <link rel="preload" href="/img/logo.png" as="image" type="image/png" />
        <link
          rel="preload"
          href="/img/icons/getting-started.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/icons/setting-up-feed.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/img/icons/key-features.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Prefetch important pages */}
        <link rel="prefetch" href="/docs/intro" />
        <link
          rel="prefetch"
          href="/docs/getting-started/browser-extension-installation"
        />
      </Head>
      <ErrorBoundary>
        <StructuredData />
      </ErrorBoundary>
      <ErrorBoundary>
        <HomepageHeader />
      </ErrorBoundary>
      <main>
        <ErrorBoundary>
          <Suspense
            fallback={
              <div
                style={{
                  minHeight: '400px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                Loading...
              </div>
            }
          >
            <HomeNavBoxes />
          </Suspense>
        </ErrorBoundary>
      </main>
    </Layout>
  );
}
