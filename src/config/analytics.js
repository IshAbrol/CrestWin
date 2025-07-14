// Analytics Configuration
// Set any value to false to completely disable that analytics tool

export const ANALYTICS_CONFIG = {
  // Google Analytics 4 - Main website traffic analytics
  GOOGLE_ANALYTICS: {
    enabled: true,
    id: 'G-13BN97J39R'
  },

  // Google Search Console - SEO performance tracking
  GOOGLE_SEARCH_CONSOLE: {
    enabled: true,
    verificationCode: 'GbSEyJu2LSaQUapDZzpNgWbgGyN4bChjin4vCES5KhA'
  },

  // Microsoft Clarity - User behavior, heatmaps, session recordings
  MICROSOFT_CLARITY: {
    enabled: true,
    projectId: 'sepiha8gy0'
  },

  // Facebook Pixel - Social media analytics (currently disabled)
  FACEBOOK_PIXEL: {
    enabled: false,
    pixelId: 'YOUR_FACEBOOK_PIXEL_ID' // Replace when needed
  },

  // Bing Webmaster Tools - Bing search performance (currently disabled)
  BING_WEBMASTER: {
    enabled: false,
    verificationCode: 'YOUR_BING_VERIFICATION_CODE' // Replace when needed
  },

  // Hotjar - Additional user behavior analytics (currently disabled)
  HOTJAR: {
    enabled: false,
    siteId: 'YOUR_HOTJAR_SITE_ID' // Replace when needed
  },

  // Custom Event Tracking - Enable/disable custom events
  CUSTOM_EVENTS: {
    enabled: true,
    trackFormSubmissions: true,
    trackButtonClicks: true,
    trackServiceInquiries: true,
    trackPhoneClicks: true,
    trackEmailClicks: true,
    trackScrollDepth: true,
    trackPageViews: true
  },

  // Development Settings
  DEVELOPMENT: {
    // Enable analytics in development mode
    enableInDevelopment: false,
    // Show debug logs in console
    debugMode: true,
    // Test mode - prevents sending real data
    testMode: false
  },

  // Privacy Settings
  PRIVACY: {
    // Respect Do Not Track browser setting
    respectDoNotTrack: true,
    // Enable consent management
    requireConsent: false,
    // Cookie-less tracking where possible
    cookielessTracking: false
  }
};

// Utility functions for checking analytics status
export const isAnalyticsEnabled = (toolName) => {
  // Check if we're in development and development analytics is disabled
  if (process.env.NODE_ENV === 'development' && !ANALYTICS_CONFIG.DEVELOPMENT.enableInDevelopment) {
    return false;
  }

  // Check Do Not Track setting
  if (ANALYTICS_CONFIG.PRIVACY.respectDoNotTrack && navigator.doNotTrack === '1') {
    return false;
  }

  // Check if specific tool is enabled
  return ANALYTICS_CONFIG[toolName]?.enabled || false;
};

export const getAnalyticsId = (toolName) => {
  const tool = ANALYTICS_CONFIG[toolName];
  return tool?.id || tool?.projectId || tool?.pixelId || tool?.siteId || tool?.verificationCode || null;
};

export const isCustomEventEnabled = (eventType) => {
  return ANALYTICS_CONFIG.CUSTOM_EVENTS.enabled && ANALYTICS_CONFIG.CUSTOM_EVENTS[eventType];
};

export const isDebugMode = () => {
  return ANALYTICS_CONFIG.DEVELOPMENT.debugMode;
};

export const isTestMode = () => {
  return ANALYTICS_CONFIG.DEVELOPMENT.testMode;
};

// Helper function to log analytics actions in debug mode
export const debugLog = (message, data = null) => {
  if (isDebugMode()) {
    console.log(`🔍 Analytics Debug: ${message}`, data || '');
  }
};

export default ANALYTICS_CONFIG;