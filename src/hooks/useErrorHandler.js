import { useCallback, useState } from 'react';

/**
 * Custom hook for handling errors in functional components
 * Provides error state management and reporting capabilities
 */
export function useErrorHandler() {
  const [error, setError] = useState(null);

  const handleError = useCallback((error, context = {}) => {
    console.error('Error caught by useErrorHandler:', error);

    setError({
      message: error.message || 'An unexpected error occurred',
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
    });

    // Report error in production
    if (process.env.NODE_ENV === 'production') {
      reportError(error, context);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const retryWithErrorHandling = useCallback(
    async (asyncFunction, context = {}) => {
      try {
        clearError();
        return await asyncFunction();
      } catch (error) {
        handleError(error, context);
        throw error; // Re-throw so caller can handle if needed
      }
    },
    [handleError, clearError]
  );

  return {
    error,
    handleError,
    clearError,
    retryWithErrorHandling,
    hasError: !!error,
  };
}

/**
 * Report error to monitoring service
 */
function reportError(error, context) {
  try {
    // Skip reporting during SSR
    if (typeof window === 'undefined') return;

    const errorReport = {
      message: error.message,
      stack: error.stack,
      context,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    // Log for now - replace with actual error service
    console.error('Error Report:', errorReport);

    // Example integration with error reporting services:
    // Sentry.captureException(error, { extra: context });
    // LogRocket.captureException(error);
    // Bugsnag.notify(error, { metadata: context });
  } catch (reportingError) {
    console.error('Failed to report error:', reportingError);
  }
}

/**
 * Higher-order component for adding error handling to any component
 */
export function withErrorHandling(
  WrappedComponent,
  componentName = 'Component'
) {
  return function ErrorHandledComponent(props) {
    const { error, handleError, clearError, hasError } = useErrorHandler();

    if (hasError) {
      return (
        <div
          role="alert"
          aria-live="assertive"
          style={{
            padding: '1rem',
            border: '1px solid #f44336',
            borderRadius: '4px',
            backgroundColor: '#ffebee',
            color: '#c62828',
          }}
        >
          <h3>Error in {componentName}</h3>
          <p>{error.message}</p>
          <button
            onClick={clearError}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '0.5rem 1rem',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Retry
          </button>
        </div>
      );
    }

    return (
      <WrappedComponent
        {...props}
        onError={handleError}
        errorHandler={{ error, handleError, clearError, hasError }}
      />
    );
  };
}
