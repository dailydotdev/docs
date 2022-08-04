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
      {url: "docs/settingyourfeed/filtering-content-feed", text: "Filtering content"},
      {url: "docs/settingyourfeed/advanced-filtering-options", text: "Advanced filtering"},
      {url: "docs/settingyourfeed/blocking-tags-sources", text: "Blocking tags and sources"},
    ]
  },
  {
    title: 'Key features',
    icon: 'img/icons/key-features.svg',
    items: [
      {url: "docs/key-features/default-feeds", text: "Feeds"},
      {url: "docs/key-features/upvotes", text: "Upvotes"},
      {url: "docs/key-features/discussions", text: "Discussions"},
      {url: "docs/key-features/bookmarks", text: "Bookmarks"},
      {url: "docs/key-features/search", text: "Search"},
      {url: "docs/key-features/do-not-disturb", text: "Do not disturb"},
      {url: "docs/key-features/the-companion", text: "The Companion Widget"},
      {url: "docs/key-features/community-picks", text: "Community Picks"},
    ]
  },
  {
    title: 'Your profile',
    icon: 'img/icons/your-profile.svg',
    items: [
      {url: "docs/your-profile/registration", text: "Registration"},
      {url: "docs/your-profile/activity", text: "Activity"},
      {url: "docs/your-profile/reading-history", text: "Reading history"},
      {url: "docs/your-profile/weekly-goal", text: "Weekly Reading Goal"},
      {url: "docs/your-profile/devcard", text: "DevCard"},
      {url: "docs/your-profile/account-details", text: "Account details"},
      {url: "docs/your-profile/deleting-your-profile", text: "Deleting your profile"},
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
    title: 'Useful guides',
    icon: 'img/icons/useful-guides.svg',
    items: [
      {url: "docs/how-does-daily-dev-work/dailydev-101", text: "What is daily.dev?​​​​"},
      {url: "docs/how-does-daily-dev-work/how-to-get-featured", text: "How to get featured?"},
      {url: "docs/how-does-daily-dev-work/reputation", text: "Reputation explained"},
      {url: "docs/how-does-daily-dev-work/community-picks-submission-guidelines", text: "Community Picks Guidelines"},
    ]
  },
  {
    title: 'Integrations',
    icon: 'img/icons/integration.svg',
    items: [
      {url: "docs/integrations/sharing-bookmarks", text: "Sharing bookmarks"},
    ]
  },
  {
    title: 'For content creators',
    icon: 'img/icons/content-creator.svg',
    items: [
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
