import React, { useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    icon: 'img/icons/getting-started.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "Browser extension installation"},
      {url: "docs/getting-started/pwa", text: "Progressive web app"}
    ]
  },
  {
    title: 'Setting up your feed',
    icon: 'img/icons/setting-up-feed.svg',
    items: [
      {url: "docs/setting-up-your-feed/filtering-content-feed", text: "Filtering content"},
      {url: "docs/setting-up-your-feed/advanced-filtering-options", text: "Advanced filtering"},
      {url: "docs/setting-up-your-feed/blocking-tags-sources", text: "Blocking tags and sources"},
    ]
  },
  {
    title: 'Key features',
    icon: 'img/icons/key-features.svg',
    items: [
      {url: "docs/key-features/feeds", text: "Feeds"},
      {url: "docs/key-features/upvotes", text: "Upvotes & Downvotes"},
      {url: "docs/key-features/discussions", text: "Discussions"},
      {url: "docs/key-features/bookmarks", text: "Bookmarks"},
      {url: "docs/key-features/search", text: "Search"},
      {url: "docs/key-features/pause-new-tab", text: "Pause New Tab (DND)"},
      {url: "docs/key-features/the-companion", text: "Companion Widget"},
      {url: "docs/key-features/community-picks", text: "Community Picks"},
    ]
  },
  {
    title: 'Your profile',
    icon: 'img/icons/your-profile.svg',
    items: [
      {url: "docs/your-profile/activity", text: "Activity"},
      {url: "docs/your-profile/reputation", text: "Reputation"},
      {url: "docs/your-profile/reading-history", text: "Reading history"},
      {url: "docs/your-profile/weekly-goal", text: "Reading streak"},
      {url: "docs/your-profile/verified-badge", text: "Company verified badge"},
      {url: "docs/your-profile/top-readers", text: "Top readers"},
      {url: "docs/your-profile/devcard", text: "DevCard"},
      {url: "docs/your-profile/account-details", text: "Account settings"},
      {url: "docs/your-profile/deleting-your-profile", text: "Deleting your profile"},
    ]
  },
  {
    title: 'Squads',
    icon: 'img/icons/squads.svg',
    items: [
      {url: "docs/squads/creating-your-squad", text: "Creating Your Squad"},
      {url: "docs/squads/growing-your-squad", text: "Growing Your Squad"},
      {url: "docs/squads/moderating-your-squad", text: "Moderating Your Squad"},
      {url: "docs/squads/public-squads", text: "Becoming a Public Squad"},
      {url: "docs/squads/featured-squads", text: "Getting featured on the Squads Directory"},
      {url: "docs/squads/slack-integration", text: "Slack Integration for Squads"},
    ]
  },
  {
    title: 'Plus',
    icon: 'img/icons/plus.svg',
    items: [
      {url: "docs/plus/plus-overview", text: "Overview"},
      {url: "docs/plus/smart-prompts", text: "Smart Prompts"},
      {url: "docs/plus/custom-feeds", text: "Advanced Custom Feeds"},
      {url: "docs/plus/clickbait-shield", text: "Clickbait Shield"},
      {url: "docs/plus/bookmark-folders", text: "Bookmark Folders"},
      {url: "docs/plus/keyword-filters", text: "Keyword Filters"},
    ]
  },
  {
    title: 'Monetization (beta)',
    icon: 'img/icons/cores.svg',
    items: [
      {url: "docs/monetization/cores", text: "Cores"},
      {url: "docs/monetization/awards", text: "Awards"},
      {url: "docs/monetization/boost", text: "Post boost"},
    ]
  },
  {
    title: 'Customization',
    icon: 'img/icons/customization.svg',
    items: [
      {url: "docs/customize-your-feed/layout", text: "Layout"},
      {url: "docs/customize-your-feed/theme", text: "Theme"},
      {url: "docs/customize-your-feed/density", text: "Density"},
      {url: "docs/customize-your-feed/preferences", text: "Preferences"},
    ]
  },
  {
    title: 'For content creators',
    icon: 'img/icons/content-creator.svg',
    items: [
      {url: "docs/for-content-creators/how-to-get-featured", text: "How to get featured?"},
      {url: "docs/for-content-creators/content-guidelines", text: "Content guidelines"},
      {url: "docs/for-content-creators/suggest-new-source", text: "How to suggest a new source"},
      {url: "docs/for-content-creators/claiming-ownership-on-article", text: "Special features for creators"},
    ]
  },
  {
    title: 'For OSS contributors',
    icon: 'img/icons/oss-contributors.svg',
    items: [
      {url: "docs/for-oss-contributors/how-to-contribute-to-daily-dev", text: "How to contribute to daily.dev"},
    ]
  },
];

function FeatureItem({url, text}){
  return (
    <li><Link className={styles.listContainerLink} to={url}>{text}</Link></li>
  );
}


function Feature({title, icon, items }) {
  const altTexts = {
    'Getting Started': 'Navigate to getting started guides and tutorials',
    'Setting up your feed': 'Customize and configure your content feed',
    'Key features': 'Explore daily.dev core features and functionality',
    'Your profile': 'Manage your profile settings and activity',
    'Squads': 'Join and manage developer community squads',
    'Plus': 'Discover premium features and subscriptions',
    'Monetization (beta)': 'Learn about monetization and earning features',
    'Customization': 'Personalize your daily.dev experience',
    'For content creators': 'Resources for content creators and publishers',
    'For OSS contributors': 'Open source contribution guidelines and resources'
  };

  return (
    <article className={clsx('col col--4')} role="region" aria-labelledby={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <div className={styles.homecard}>
        <img 
          src={icon} 
          className={styles.homeIcon}
          loading="eager"
          decoding="sync"
          alt={altTexts[title] || `${title} icon`}
          width="48"
          height="48"
          style={{ aspectRatio: '1/1' }}
        />
        <h2 id={`feature-${title.replace(/\s+/g, '-').toLowerCase()}`}>{title}</h2>
        <div className={styles.listContainer}>
        <nav aria-label={`${title} navigation`}>
          <ul>
            {items.map((props, idx) => (
              <FeatureItem key={idx} {...props} />
            ))}
          </ul>
        </nav>
        </div>
      </div>
    </article>
  );
}



export default function HomepageFeatures() {
  useEffect(() => {
    // Preload all images to prevent flashing during navigation
    FeatureList.forEach(feature => {
      const img = new Image();
      img.src = feature.icon;
    });
  }, []);

  return (
    <section className={styles.features} aria-label="Daily.dev documentation sections">
        <ul className={styles.grid3col} role="list">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}
