/**
 * Performance monitoring utilities for daily.dev documentation
 * Tracks Core Web Vitals and custom performance metrics
 */

import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';
import { useCallback } from 'react';

// Performance thresholds based on Google's recommendations
const THRESHOLDS = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FID: { good: 100, needsImprovement: 300 },
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
};

// Custom performance metrics storage
const performanceMetrics = {
  pageLoadStart: null,
  navigationStart: null,
  componentMetrics: new Map(),
  resourceMetrics: [],
  errorMetrics: [],
};

/**
 * Initialize performance monitoring
 */
export function initializePerformanceMonitoring() {
  if (typeof window === 'undefined') return;

  try {
    // Record initial timing
    performanceMetrics.pageLoadStart = Date.now();
    performanceMetrics.navigationStart = performance.now();

    // Measure Core Web Vitals
    measureCoreWebVitals();

    // Monitor resource loading
    monitorResourceLoading();

    // Monitor navigation timing
    monitorNavigationTiming();

    // Monitor long tasks
    monitorLongTasks();

    // Set up periodic reporting
    setupPeriodicReporting();

    console.log('Performance monitoring initialized');
  } catch (error) {
    console.error('Failed to initialize performance monitoring:', error);
  }
}

/**
 * Measure Core Web Vitals
 */
function measureCoreWebVitals() {
  try {
    // Cumulative Layout Shift
    getCLS((metric) => {
      reportMetric('CLS', metric);
    });

    // First Input Delay
    getFID((metric) => {
      reportMetric('FID', metric);
    });

    // First Contentful Paint
    getFCP((metric) => {
      reportMetric('FCP', metric);
    });

    // Largest Contentful Paint
    getLCP((metric) => {
      reportMetric('LCP', metric);
    });

    // Time to First Byte
    getTTFB((metric) => {
      reportMetric('TTFB', metric);
    });
  } catch (error) {
    console.error('Error measuring Core Web Vitals:', error);
  }
}

/**
 * Report a performance metric
 */
function reportMetric(name, metric) {
  try {
    const threshold = THRESHOLDS[name];
    let rating = 'poor';

    if (threshold) {
      if (metric.value <= threshold.good) {
        rating = 'good';
      } else if (metric.value <= threshold.needsImprovement) {
        rating = 'needs-improvement';
      }
    }

    const report = {
      name,
      value: metric.value,
      rating,
      timestamp: Date.now(),
      id: metric.id,
      delta: metric.delta,
      entries: metric.entries?.length || 0,
    };

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 ${name}:`, report);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production') {
      sendToAnalytics('core_web_vital', report);
    }

    // Store locally for debugging
    if (!window.__performanceMetrics) {
      window.__performanceMetrics = [];
    }
    window.__performanceMetrics.push(report);
  } catch (error) {
    console.error('Error reporting metric:', error);
  }
}

/**
 * Monitor resource loading performance
 */
function monitorResourceLoading() {
  try {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            analyzeResourceTiming(entry);
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  } catch (error) {
    console.error('Error setting up resource monitoring:', error);
  }
}

/**
 * Analyze resource timing
 */
function analyzeResourceTiming(entry) {
  try {
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;

    const resourceMetric = {
      name: entry.name,
      type: getResourceType(entry.name),
      duration,
      size,
      timestamp: entry.startTime,
    };

    // Flag slow resources
    if (duration > 2000) {
      console.warn('Slow resource detected:', resourceMetric);

      if (process.env.NODE_ENV === 'production') {
        sendToAnalytics('slow_resource', resourceMetric);
      }
    }

    performanceMetrics.resourceMetrics.push(resourceMetric);
  } catch (error) {
    console.error('Error analyzing resource timing:', error);
  }
}

/**
 * Monitor navigation timing
 */
function monitorNavigationTiming() {
  try {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        if (navigation) {
          const timingMetrics = {
            domContentLoaded:
              navigation.domContentLoadedEventEnd - navigation.navigationStart,
            loadComplete: navigation.loadEventEnd - navigation.navigationStart,
            domInteractive:
              navigation.domInteractive - navigation.navigationStart,
            firstByte: navigation.responseStart - navigation.requestStart,
          };

          if (process.env.NODE_ENV === 'development') {
            console.log('📈 Navigation Timing:', timingMetrics);
          }

          if (process.env.NODE_ENV === 'production') {
            sendToAnalytics('navigation_timing', timingMetrics);
          }
        }
      }, 0);
    });
  } catch (error) {
    console.error('Error monitoring navigation timing:', error);
  }
}

/**
 * Monitor long tasks that block the main thread
 */
function monitorLongTasks() {
  try {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.duration > 50) {
            const longTaskMetric = {
              duration: entry.duration,
              startTime: entry.startTime,
              attribution: entry.attribution?.[0]?.name || 'unknown',
            };

            console.warn('Long task detected:', longTaskMetric);

            if (process.env.NODE_ENV === 'production') {
              sendToAnalytics('long_task', longTaskMetric);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['longtask'] });
    }
  } catch (error) {
    console.error('Error setting up long task monitoring:', error);
  }
}

/**
 * Track component-specific performance
 */
export function trackComponentPerformance(componentName, startTime = null) {
  try {
    const start = startTime || performance.now();

    return {
      end: () => {
        const duration = performance.now() - start;

        if (!performanceMetrics.componentMetrics.has(componentName)) {
          performanceMetrics.componentMetrics.set(componentName, []);
        }

        performanceMetrics.componentMetrics.get(componentName).push({
          duration,
          timestamp: Date.now(),
        });

        if (process.env.NODE_ENV === 'development' && duration > 100) {
          console.warn(
            `Slow component render: ${componentName} took ${duration.toFixed(2)}ms`
          );
        }

        if (process.env.NODE_ENV === 'production' && duration > 200) {
          sendToAnalytics('slow_component', {
            component: componentName,
            duration,
          });
        }
      },
    };
  } catch (error) {
    console.error('Error tracking component performance:', error);
    return { end: () => {} };
  }
}

/**
 * Get resource type from URL
 */
function getResourceType(url) {
  if (url.includes('.css')) return 'css';
  if (url.includes('.js')) return 'javascript';
  if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i)) return 'image';
  if (url.match(/\.(woff|woff2|ttf|eot)$/i)) return 'font';
  return 'other';
}

/**
 * Send metrics to analytics service
 */
function sendToAnalytics(eventType, data) {
  try {
    // In a real application, you would send this to your analytics service
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.

    if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
      // Google Analytics 4 example
      window.gtag('event', eventType, {
        custom_parameter_1: data,
        event_category: 'performance',
        event_label: eventType,
      });
    }

    // Example: Custom analytics endpoint
    // fetch('/api/analytics/performance', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ eventType, data, timestamp: Date.now() })
    // });
  } catch (error) {
    console.error('Error sending analytics:', error);
  }
}

/**
 * Set up periodic performance reporting
 */
function setupPeriodicReporting() {
  try {
    // Report every 30 seconds
    setInterval(() => {
      const report = generatePerformanceReport();

      if (process.env.NODE_ENV === 'development') {
        console.log('📊 Periodic Performance Report:', report);
      }
    }, 30000);
  } catch (error) {
    console.error('Error setting up periodic reporting:', error);
  }
}

/**
 * Generate comprehensive performance report
 */
export function generatePerformanceReport() {
  try {
    const memory = performance.memory || {};

    return {
      timestamp: Date.now(),
      uptime: Date.now() - performanceMetrics.pageLoadStart,
      memory: {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      },
      resources: {
        total: performanceMetrics.resourceMetrics.length,
        slowResources: performanceMetrics.resourceMetrics.filter(
          (r) => r.duration > 2000
        ).length,
      },
      components: Object.fromEntries(
        Array.from(performanceMetrics.componentMetrics.entries()).map(
          ([name, metrics]) => [
            name,
            {
              count: metrics.length,
              avgDuration:
                metrics.reduce((sum, m) => sum + m.duration, 0) /
                metrics.length,
            },
          ]
        )
      ),
    };
  } catch (error) {
    console.error('Error generating performance report:', error);
    return { error: error.message };
  }
}

/**
 * Hook for React components to track performance
 */
export function usePerformanceTracking(componentName) {
  // Skip performance tracking during SSR
  if (typeof window === 'undefined') {
    return { trackRender: () => ({ end: () => {} }) };
  }

  const trackRender = useCallback(() => {
    return trackComponentPerformance(componentName);
  }, [componentName]);

  return { trackRender };
}
