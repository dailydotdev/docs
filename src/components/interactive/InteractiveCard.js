import React, { useState } from 'react';
import styles from './InteractiveCard.module.css';

const InteractiveCard = ({ 
  title, 
  description, 
  image, 
  actions = [], 
  expandable = false,
  children,
  variant = 'default'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`${styles.card} ${styles[variant]} ${isHovered ? styles.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className={styles.imageContainer}>
          <img src={image} alt={title} className={styles.image} />
        </div>
      )}
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {expandable && (
          <div className={styles.expandableContent}>
            {isExpanded && (
              <div className={styles.expandedContent}>
                {children}
              </div>
            )}
            <button 
              className={styles.expandButton}
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
              <span className={`${styles.chevron} ${isExpanded ? styles.up : styles.down}`}>
                ▼
              </span>
            </button>
          </div>
        )}
        
        {actions.length > 0 && (
          <div className={styles.actions}>
            {actions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`${styles.action} ${styles[action.variant || 'primary']}`}
                target={action.external ? '_blank' : '_self'}
                rel={action.external ? 'noopener noreferrer' : ''}
              >
                {action.icon && <span className={styles.actionIcon}>{action.icon}</span>}
                {action.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveCard;