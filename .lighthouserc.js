module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/', 'http://localhost:3000/docs/intro'],
      startServerCommand: 'npm run serve',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.8}],
        'categories:accessibility': ['error', {minScore: 0.9}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.9}],
        'categories:pwa': ['error', {minScore: 0.8}],
        
        // Core Web Vitals
        'first-contentful-paint': ['error', {maxNumericValue: 2000}],
        'largest-contentful-paint': ['error', {maxNumericValue: 2500}],
        'first-input-delay': ['error', {maxNumericValue: 100}],
        'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
        'speed-index': ['error', {maxNumericValue: 3000}],
        'interactive': ['error', {maxNumericValue: 3000}],
        
        // Resource optimization
        'unused-css-rules': ['error', {maxNumericValue: 20000}],
        'unused-javascript': ['error', {maxNumericValue: 20000}],
        'unminified-css': 'error',
        'unminified-javascript': 'error',
        'render-blocking-resources': ['error', {maxNumericValue: 500}],
        
        // Image optimization
        'modern-image-formats': 'error',
        'uses-optimized-images': 'error',
        'uses-responsive-images': 'error',
        'offscreen-images': 'error',
        
        // Caching
        'uses-long-cache-ttl': 'error',
        'efficient-animated-content': 'error',
        
        // JavaScript optimization
        'legacy-javascript': 'error',
        'uses-text-compression': 'error',
        
        // Preloading
        'uses-rel-preload': 'error',
        'uses-rel-preconnect': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};