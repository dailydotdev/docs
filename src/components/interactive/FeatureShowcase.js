import React, { useState } from 'react';
import styles from './FeatureShowcase.module.css';

const FeatureShowcase = ({ features }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  if (!features || features.length === 0) {
    return <div className={styles.error}>No features provided</div>;
  }

  return (
    <div className={styles.featureShowcase}>
      <div className={styles.featureTabs}>
        {features.map((feature, index) => (
          <button 
            key={index}
            className={`${styles.tab} ${activeFeature === index ? styles.active : ''}`}
            onClick={() => setActiveFeature(index)}
          >
            {feature.icon && <span className={styles.icon}>{feature.icon}</span>}
            {feature.name}
          </button>
        ))}
      </div>
      <div className={styles.featureContent}>
        {features[activeFeature].image && (
          <img 
            src={features[activeFeature].image} 
            alt={features[activeFeature].name}
            className={styles.featureImage}
          />
        )}
        <div className={styles.contentText}>
          <h3>{features[activeFeature].name}</h3>
          <p>{features[activeFeature].description}</p>
          {features[activeFeature].link && (
            <a 
              href={features[activeFeature].link} 
              className={styles.learnMore}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more →
            </a>
          )}
          {features[activeFeature].code && (
            <div className={styles.codeExample}>
              <pre><code>{features[activeFeature].code}</code></pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;