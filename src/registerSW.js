// Create accessible update notification
function showUpdateNotification() {
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

  // Add event listeners
  document.getElementById('sw-reload-btn').addEventListener('click', () => {
    window.location.reload();
  });

  document.getElementById('sw-dismiss-btn').addEventListener('click', () => {
    notification.remove();
  });

  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.remove();
    }
  }, 10000);
}

// Register service worker with optimal timing
export default function registerSW() {
  if ('serviceWorker' in navigator) {
    // Register after the page has loaded to avoid blocking initial paint
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('SW registered: ', registration);
          }
          
          // Update available
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New update available - show accessible notification
                  showUpdateNotification();
                }
              });
            }
          });
        })
        .catch((registrationError) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('SW registration failed: ', registrationError);
          }
        });
    });
  }
}