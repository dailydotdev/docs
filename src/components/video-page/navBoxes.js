import React, { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import styles from './navBoxes.module.css';
import { useErrorHandler } from '../../hooks/useErrorHandler';
import { usePerformanceTracking } from '../../utils/performance';

const FeatureList = [
  {
    title: 'Community Picks',
    url: 'JlBlTIMfrGM',
    type: 'Quick Tip',
    duration: '1:53',
  },
  {
    title: 'Toast notifications',
    url: 'ITU8xxeM3wU',
    type: 'Quick Tip',
    duration: '1:10',
  },
  {
    title: 'Introducing the Companion Widget!',
    url: '7lfUzdkG03E',
    type: 'Tutorial',
    duration: '1:59',
  },
  {
    title: 'Article Modal',
    url: 'b3u2MFIGQvs',
    type: 'Quick Tip',
    duration: '0:57',
  },
  {
    title: 'Using Markdown in comments',
    url: 'vWsgjxkfoS4',
    type: 'Quick Tip',
    duration: '0:59',
  },
  {
    title: 'How to generate your DevCard!',
    url: 'RCwKFpC286w',
    type: 'Tutorial',
    duration: '3:49',
  },
  {
    title: '@mention people in comments',
    url: 's2N9_W3pjbQ',
    type: 'Quick Tip',
    duration: '0:58',
  },
  {
    title: 'Suggest a source for the daily.dev feed',
    url: 'r1IIWf6ApJc',
    type: 'Tutorial',
    duration: '3:38',
  },
  {
    title: 'How to block topics and sources',
    url: '10ECCjEdHK4',
    type: 'Quick Tip',
    duration: '1:40',
  },
  {
    title: 'How to get featured on daily.dev',
    url: 'sRwoLWDIYCI',
    type: 'Tutorial',
    duration: '3:54',
  },
  {
    title: 'Customize your profile',
    url: 'yJCv2NG-9nk',
    type: 'Tutorial',
    duration: '1:09',
  },
  {
    title: 'Feeds: Popular, Most Upvoted, Best Discussions',
    url: '-NIuN8m5Pe8',
    type: 'Tutorial',
    duration: '6:32',
  },
  {
    title: 'Recent Feed Quick Tip',
    url: 'RUmO6Mz4Of0',
    type: 'QUick Tip',
    duration: '0:51',
  },
  {
    title: 'My Feed Quick Tip',
    url: 'vIraJ4ThosE',
    type: 'Quick Tip',
    duration: '1:51',
  },
];

function Feature({ title, url, type, duration }) {
  const { handleError } = useErrorHandler();
  const { trackRender } = usePerformanceTracking('VideoFeature');

  useEffect(() => {
    const tracker = trackRender();
    return () => tracker.end();
  }, [trackRender]);

  const replaceVideo = useCallback(
    (e) => {
      try {
        const link = e.target.closest('[data-youtube]');
        if (!link) return;

        // Prevent the URL from redirecting users
        e.preventDefault();

        // Get the video ID and title for better accessibility
        const id = link.getAttribute('data-youtube');
        const videoTitle = title || 'Video';

        // Validate video ID
        if (!id || id.length !== 11) {
          throw new Error('Invalid YouTube video ID');
        }

        // Create the player with improved accessibility
        const player = document.createElement('div');
        player.innerHTML = `<iframe 
        width="560" 
        height="315" 
        src="https://www.youtube-nocookie.com/embed/${id}" 
        title="${videoTitle}" 
        frameborder="0" 
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        role="application"
        aria-label="YouTube video player for ${videoTitle}">
      </iframe>`;

        // Inject the player into the UI
        link.replaceWith(player);

        // Focus the iframe after loading for keyboard users
        const iframe = player.querySelector('iframe');
        if (iframe) {
          iframe.focus();
        }
      } catch (error) {
        handleError(error, {
          component: 'VideoFeature',
          action: 'replaceVideo',
          title,
        });
        // Fallback: open video in new tab
        if (url) {
          window.open(`https://www.youtube.com/watch?v=${url}`, '_blank');
        }
      }
    },
    [title, url, handleError]
  );

  const handleKeyPress = useCallback(
    (e) => {
      try {
        // Support Enter and Space key activation
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          replaceVideo(e);
        }
      } catch (error) {
        handleError(error, {
          component: 'VideoFeature',
          action: 'handleKeyPress',
          title,
        });
      }
    },
    [replaceVideo, handleError, title]
  );

  const videoId = `video-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <article
      className={clsx('col col--4')}
      role="region"
      aria-labelledby={videoId}
    >
      <div className={styles.vidcard}>
        <img
          src="img/logo.png"
          className={styles.vidIcon}
          alt="daily.dev logo"
          loading="lazy"
          width="48"
          height="48"
        />
        <h2 id={videoId}>{title}</h2>
        <div className={styles.iframecontainer}>
          <div
            className={styles.youTubeOverlay}
            onClick={replaceVideo}
            onKeyDown={handleKeyPress}
            data-youtube={url}
            role="button"
            tabIndex="0"
            aria-label={`Play video: ${title}`}
          >
            <div className={styles.youTubeOverlayTime}>{duration}</div>
            <img
              className={styles.imgVid}
              width="340"
              height="180"
              alt={`Video thumbnail for ${title}`}
              src={'https://img.youtube.com/vi/' + url + '/0.jpg'}
            />
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

export default function VideoFeatures() {
  const { trackRender } = usePerformanceTracking('VideoFeatures');

  useEffect(() => {
    const tracker = trackRender();
    return () => tracker.end();
  }, [trackRender]);

  return (
    <section className={styles.features} aria-label="Daily.dev video tutorials">
      <ul className={styles.grid3col} role="list">
        {FeatureList.map((props, idx) => (
          <Feature key={`video-${idx}`} {...props} />
        ))}
      </ul>
    </section>
  );
}
