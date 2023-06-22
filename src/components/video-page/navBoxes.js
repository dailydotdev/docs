import React from 'react';
import clsx from 'clsx';
import styles from './navBoxes.module.css';

const FeatureList = [
  {
    title: 'Community Picks',
    url: "JlBlTIMfrGM",
    type: "Quick Tip",
    duration: "1:53"
  },
  {
    title: 'Toast notifications',
    url: "ITU8xxeM3wU",
    type: "Quick Tip",
    duration: "1:10"
  },
  {
    title: 'Introducing the Companion Widget!',
    url: "7lfUzdkG03E",
    type: "Tutorial",
    duration: "1:59"
  },
  {
    title: 'Article Modal',
    url: "b3u2MFIGQvs",
    type: "Quick Tip",
    duration: "0:57"
  },
  {
    title: 'Using Markdown in comments',
    url: "vWsgjxkfoS4",
    type: "Quick Tip",
    duration: "0:59"
  },
  {
    title: 'How to generate your DevCard!',
    url: "RCwKFpC286w",
    type: "Tutorial",
    duration: "3:49"
  },
  {
    title: '@mention people in comments',
    url: "s2N9_W3pjbQ",
    type: "Quick Tip",
    duration: "0:58"
  },
  {
    title: 'Suggest a source for the daily.dev feed',
    url: "r1IIWf6ApJc",
    type: "Tutorial",
    duration: "3:38"
  },
  {
    title: 'How to block topics and sources',
    url: "10ECCjEdHK4",
    type: "Quick Tip",
    duration: "1:40"
  },
  {
    title: 'How to get featured on daily.dev',
    url: "sRwoLWDIYCI",
    type: "Tutorial",
    duration: "3:54"
  },
  {
    title: 'Customize your profile',
    url: "yJCv2NG-9nk",
    type: "Tutorial",
    duration: "1:09"
  },
  {
    title: 'Feeds: Popular, Most Upvoted, Best Discussions',
    url: "-NIuN8m5Pe8",
    type: "Tutorial",
    duration: "6:32"
  },
  {
    title: 'Recent Feed Quick Tip',
    url: "RUmO6Mz4Of0",
    type: "QUick Tip",
    duration: "0:51"
  },
  {
    title: 'My Feed Quick Tip',
    url: "vIraJ4ThosE",
    type: "Quick Tip",
    duration: "1:51"
  },
];

function Feature({title, url, type, duration }) {

  function replaceVideo(e){
    let link = e.target.closest('[data-youtube]');
    if (!link) return;
  
    // Prevent the URL from redirecting users
    e.preventDefault();
  
    // Get the video ID
    let id = link.getAttribute('data-youtube');
  
    // Create the player
    let player = document.createElement('div');
    player.innerHTML = `<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  
    // Inject the player into the UI
    link.replaceWith(player);
  }


  return (
    <article className={clsx('col col--4')}>
      <div className={styles.vidcard}>
        <img src="img/logo.png" className={styles.vidIcon}></img>
        <h2>{title}</h2>
        <div className={styles.iframecontainer}>
          <div className={styles.youTubeOverlay} onClick={replaceVideo} data-youtube={url}>
          <div className={styles.youTubeOverlayTime}>{duration}</div>
          <img className={styles.imgVid} width="340" height="180" alt="" src={"https://img.youtube.com/vi/" + url + "/0.jpg"}/>
          </div>
        </div>
        {/* <div className={styles.iframecontainer}>
          <iframe width="340" height="180" src={"https://www.youtube-nocookie.com/embed/" + url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture, fullscreen" allowfullscreen="true"></iframe>
        </div> */}
        <div className={styles.bottomText}>{type}</div>
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
