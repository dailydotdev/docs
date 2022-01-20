import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'NEVER MISS NEW TRENDS.',
    Svg: require('../../static/img/Boost.svg').default,
    description: (
      <>
        Discover brand-new content as soon as its published. I can easily make you stand out as that developer who is always in-the-know about the latest buzzwords. Thank us later...
      </>
    ),
  },
  {
    title: 'SAVE TIME LIKE A PRO.',
    Svg: require('../../static/img/Time.svg').default,
    description: (
      <>
        Searching for content isn't a thing developers should do in 2021. daily.dev recommends tailor-made dev news so you can have something interesting to read anytime.
      </>
    ),
  },
  {
    title: 'BE PART OF A COMMUNITY.',
    Svg: require('../../static/img/Community.svg').default,
    description: (
      <>
        daily.dev is a community of developers getting together around discovering and exploring dev news. Join the movement to empower better software together.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
