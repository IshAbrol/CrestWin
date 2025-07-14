// Analytics utility functions for tracking user interactions and events
import { isAnalyticsEnabled, isCustomEventEnabled, debugLog, isTestMode } from '../config/analytics';

// Google Analytics 4 (GA4) Event Tracking
export const trackEvent = (eventName, parameters = {}) => {
  if (!isAnalyticsEnabled('GOOGLE_ANALYTICS')) {
    debugLog(`GA4 tracking disabled - Event: ${eventName}`, parameters);
    return;
  }

  if (isTestMode()) {
    debugLog(`TEST MODE - GA4 Event: ${eventName}`, parameters);
    return;
  }

  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: parameters.category || 'General',
      event_label: parameters.label || '',
      value: parameters.value || 0,
      ...parameters
    });
    debugLog(`GA4 Event tracked: ${eventName}`, parameters);
  } else {
    debugLog(`GA4 not loaded - Event: ${eventName}`, parameters);
  }
};

// Track page views for SPA routing
export const trackPageView = (path, title) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'G-13BN97J39R', {
      page_path: path,
      page_title: title,
      page_location: window.location.href
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName, success = true) => {
  if (!isCustomEventEnabled('trackFormSubmissions')) {
    debugLog(`Form submission tracking disabled: ${formName}`);
    return;
  }

  trackEvent('form_submit', {
    category: 'Form',
    label: formName,
    value: success ? 1 : 0,
    form_name: formName,
    form_success: success
  });
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  if (!isCustomEventEnabled('trackButtonClicks')) {
    debugLog(`Button click tracking disabled: ${buttonName}`);
    return;
  }

  trackEvent('button_click', {
    category: 'Engagement',
    label: buttonName,
    button_name: buttonName,
    button_location: location
  });
};

// Track file downloads
export const trackDownload = (fileName, fileType) => {
  trackEvent('file_download', {
    category: 'Downloads',
    label: fileName,
    file_name: fileName,
    file_type: fileType
  });
};

// Track external link clicks
export const trackExternalLink = (url, linkText) => {
  trackEvent('external_link_click', {
    category: 'External Links',
    label: linkText,
    link_url: url,
    link_text: linkText
  });
};

// Track service inquiries
export const trackServiceInquiry = (serviceName, budget = '') => {
  if (!isCustomEventEnabled('trackServiceInquiries')) {
    debugLog(`Service inquiry tracking disabled: ${serviceName}`);
    return;
  }

  trackEvent('service_inquiry', {
    category: 'Business',
    label: serviceName,
    service_name: serviceName,
    budget_range: budget
  });
};

// Track scroll depth
export const trackScrollDepth = (percentage) => {
  trackEvent('scroll_depth', {
    category: 'Engagement',
    label: `${percentage}%`,
    scroll_depth: percentage
  });
};

// Track video interactions
export const trackVideoInteraction = (action, videoName) => {
  trackEvent(`video_${action}`, {
    category: 'Video',
    label: videoName,
    video_name: videoName,
    video_action: action
  });
};

// Track search queries
export const trackSearch = (query, results = 0) => {
  trackEvent('search', {
    category: 'Search',
    label: query,
    search_term: query,
    search_results: results
  });
};

// Track user engagement time
export const trackEngagementTime = (timeSpent, pagePath) => {
  trackEvent('engagement_time', {
    category: 'Engagement',
    label: pagePath,
    value: timeSpent,
    page_path: pagePath,
    engagement_time_msec: timeSpent * 1000
  });
};

// Track custom conversions
export const trackConversion = (conversionType, value = 0) => {
  trackEvent('conversion', {
    category: 'Conversions',
    label: conversionType,
    value: value,
    conversion_type: conversionType,
    conversion_value: value
  });
  
};

// Microsoft Clarity custom tags
export const clarityTag = (tagName, tagValue) => {
  if (!isAnalyticsEnabled('MICROSOFT_CLARITY')) {
    debugLog(`Clarity tagging disabled: ${tagName}`);
    return;
  }

  if (typeof window !== 'undefined' && window.clarity) {
    window.clarity('set', tagName, tagValue);
    debugLog(`Clarity tag set: ${tagName}`, tagValue);
  } else {
    debugLog(`Clarity not loaded - Tag: ${tagName}`, tagValue);
  }
};

// Initialize analytics with user consent
export const initializeAnalytics = (consent = true) => {
  if (consent) {
    // Enable all tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'granted',
        'ad_storage': 'granted'
      });
    }
    
    // Initialize other analytics tools
    clarityTag('user_consent', 'granted');
    
    console.log('Analytics initialized with user consent');
  } else {
    // Disable tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
      });
    }
    
    console.log('Analytics disabled - no user consent');
  }
};

// Track error events
export const trackError = (errorMessage, errorLocation, errorCode = '') => {
  trackEvent('exception', {
    category: 'Error',
    label: errorMessage,
    description: errorMessage,
    fatal: false,
    error_location: errorLocation,
    error_code: errorCode
  });
};

// Debug function to check if analytics is working
export const debugAnalytics = () => {
  console.log('Analytics Debug Information:');
  console.log('Google Analytics gtag available:', typeof window !== 'undefined' && !!window.gtag);
  console.log('Microsoft Clarity available:', typeof window !== 'undefined' && !!window.clarity);
  console.log('Current page:', window.location.href);
};