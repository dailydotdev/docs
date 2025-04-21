import React from 'react';
import clsx from 'clsx';
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
      {url: "docs/your-profile/reading-streak", text: "Reading streak"},
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
      {url: "docs/plus/smart-prompts", text: "Smart Promports"},
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
      {url: "docs/for-oss-contributors/how-to%20contribute-to-daily-dev", text: "How to contribute to daily.dev"},
    ]
  },
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {


  return (
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon}></img>
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>

    </article>
  );
}



export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}
