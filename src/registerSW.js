// Create accessible update notification with error handling
function showUpdateNotification() {
  try {
    const notification = document.createElement('div');
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--ifm-color-primary);
    color: white;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    z-index: 9999;
    font-family: inherit;
    max-width: 300px;
  `;

    notification.innerHTML = `
    <div>
      <p style="margin: 0 0 1rem 0; font-size: 0.9rem;">New version available. Would you like to reload to get the latest features?</p>
      <div style="display: flex; gap: 0.5rem;">
        <button id="sw-reload-btn" style="
          background: white;
          color: var(--ifm-color-primary);
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
        ">Reload</button>
        <button id="sw-dismiss-btn" style="
          background: transparent;
          color: white;
          border: 1px solid white;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
        ">Later</button>
      </div>
    </div>
  `;

    document.body.appendChild(notification);

    // Add event listeners with error handling
    try {
      document
        .getElementById('sw-reload-btn')
        ?.addEventListener('click', () => {
          try {
            window.location.reload();
          } catch (error) {
            console.error('Failed to reload page:', error);
            // Fallback: try alternative reload method
            window.location.href =
              window.location.origin + window.location.pathname;
          }
        });

      document
        .getElementById('sw-dismiss-btn')
        ?.addEventListener('click', () => {
          try {
            notification.remove();
          } catch (error) {
            console.error('Failed to remove notification:', error);
          }
        });
    } catch (error) {
      console.error('Failed to attach notification event listeners:', error);
    }

    // Auto-dismiss after 10 seconds
    setTimeout(() => {
      try {
        if (notification.parentNode) {
          notification.remove();
        }
      } catch (error) {
        console.error('Failed to auto-dismiss notification:', error);
      }
    }, 10000);
  } catch (error) {
    console.error('Failed to show update notification:', error);
    // Fallback: simple alert if notification creation fails
    if (confirm('A new version is available. Would you like to reload?')) {
      window.location.reload();
    }
  }
}

// Register service worker with comprehensive error handling
export default function registerSW() {
  // Only run on client side to avoid hydration issues
  if (typeof window === 'undefined') {
    return;
  }

  if (!('serviceWorker' in navigator)) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Service Worker not supported in this browser');
    }
    return;
  }

  try {
    // Register after the page has loaded to avoid blocking initial paint
    window.addEventListener('load', () => {
      registerServiceWorker();
    });

    // Also handle page visibility changes for better offline support
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        checkForUpdates();
      }
    });
  } catch (error) {
    console.error('Failed to set up service worker listeners:', error);
  }
}

function registerServiceWorker() {
  navigator.serviceWorker
    .register('/sw.js')
    .then((registration) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('SW registered: ', registration);
      }

      // Set up update detection
      setupUpdateDetection(registration);

      // Handle communication with service worker
      setupServiceWorkerCommunication(registration);
    })
    .catch((registrationError) => {
      if (process.env.NODE_ENV === 'development') {
        console.log('SW registration failed: ', registrationError);
      }

      // Report registration failure in production
      if (process.env.NODE_ENV === 'production') {
        reportServiceWorkerError('registration_failed', registrationError);
      }
    });
}

function setupUpdateDetection(registration) {
  try {
    // Check for updates periodically
    setInterval(() => {
      registration.update().catch((error) => {
        console.error('Failed to check for service worker updates:', error);
      });
    }, 60000); // Check every minute

    // Listen for update events
    registration.addEventListener('updatefound', () => {
      try {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener('statechange', () => {
            try {
              if (
                newWorker.state === 'installed' &&
                navigator.serviceWorker.controller
              ) {
                showUpdateNotification();
              }
            } catch (error) {
              console.error(
                'Error handling service worker state change:',
                error
              );
            }
          });
        }
      } catch (error) {
        console.error('Error setting up new worker listener:', error);
      }
    });
  } catch (error) {
    console.error('Failed to set up update detection:', error);
  }
}

function setupServiceWorkerCommunication(registration) {
  try {
    // Listen for messages from service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      try {
        const { type, payload } = event.data;

        switch (type) {
          case 'CACHE_UPDATED':
            if (process.env.NODE_ENV === 'development') {
              console.log('Service worker cache updated:', payload);
            }
            break;
          case 'OFFLINE_STATUS':
            handleOfflineStatus(payload);
            break;
          case 'ERROR':
            console.error('Service worker error:', payload);
            reportServiceWorkerError('worker_error', payload);
            break;
          default:
            if (process.env.NODE_ENV === 'development') {
              console.log('Unknown service worker message:', event.data);
            }
        }
      } catch (error) {
        console.error('Error handling service worker message:', error);
      }
    });
  } catch (error) {
    console.error('Failed to set up service worker communication:', error);
  }
}

function checkForUpdates() {
  try {
    navigator.serviceWorker.getRegistration().then((registration) => {
      if (registration) {
        registration.update().catch((error) => {
          console.error('Failed to check for updates:', error);
        });
      }
    });
  } catch (error) {
    console.error('Error checking for updates:', error);
  }
}

function handleOfflineStatus(isOffline) {
  try {
    // You could show an offline indicator here
    if (process.env.NODE_ENV === 'development') {
      console.log('Offline status changed:', isOffline);
    }
  } catch (error) {
    console.error('Error handling offline status:', error);
  }
}

function reportServiceWorkerError(type, error) {
  try {
    // Report service worker errors to monitoring service
    const errorReport = {
      type: 'service_worker_error',
      subtype: type,
      message: error.message || error,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
    };

    console.error('Service Worker Error Report:', errorReport);

    // In production, send to error reporting service
    // Example: Sentry.captureException(error, { tags: { type: 'service_worker' } });
  } catch (reportingError) {
    console.error('Failed to report service worker error:', reportingError);
  }
}
