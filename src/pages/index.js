import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import styles from './video.module.css';
import { Redirect } from '@docusaurus/router';
import ErrorBoundary from '../components/ErrorBoundary';
import StructuredData from '../structured-data/schema';

// Import HomeNavBoxes directly since it's above-the-fold critical content
import HomeNavBoxes from '../components/homepage/homeNavBoxes';

function HomepageHeader() {
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

        {/* Critical performance optimizations */}
        <link rel="preload" href="/img/logo.png" as="image" type="image/png" />
        
        {/* Preload critical fonts if any are used */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical icons for above-the-fold content */}
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
        <link
          rel="preload"
          href="/img/icons/career-mode.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* Inline critical CSS for above-the-fold content */}
        <style>{`
          .heroBanner_KU2A{padding:2rem 0 0 0;text-align:center;position:relative;overflow:hidden}
          .hero__title{font-size:62px;font-weight:700;line-height:115%;margin-bottom:0;color:var(--ifm-font-color-base);font-family:'Montserrat',sans-serif;margin-top:2rem}
          .theme-layout-footer{min-height:350px}
          .footer__links{min-height:200px}
          .footer__col{min-height:180px}
          .footer__bottom{min-height:50px}
          @media screen and (max-width:966px){.heroBanner_KU2A{padding:2rem}.hero__title{font-size:48px}.theme-layout-footer{min-height:600px}.footer__links{min-height:450px}.footer__col{min-height:100px}}
        `}</style>

        {/* Prefetch important pages */}
        <link rel="prefetch" href="/docs/intro" />
        <link
          rel="prefetch"
          href="/docs/getting-started/browser-extension-installation"
        />
      </Head>
      <StructuredData />
      <HomepageHeader />
      <main>
        <ErrorBoundary>
          <HomeNavBoxes />
        </ErrorBoundary>
      </main>
    </Layout>
  );
}
