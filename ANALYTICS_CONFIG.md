# Analytics Configuration Guide

## 🎛️ Easy Analytics Control

All analytics tools can now be easily enabled/disabled with simple boolean flags in one configuration file.

## 📁 Configuration File Location

```
src/config/analytics.js
```

## 🔧 How to Enable/Disable Analytics Tools

### Quick Toggle Any Tool:

```javascript
export const ANALYTICS_CONFIG = {
  // Google Analytics 4 - Main website traffic analytics
  GOOGLE_ANALYTICS: {
    enabled: true,  // Set to false to disable
    id: 'G-13BN97J39R'
  },

  // Microsoft Clarity - User behavior, heatmaps, session recordings
  MICROSOFT_CLARITY: {
    enabled: true,  // Set to false to disable
    projectId: 'sepiha8gy0'
  },

  // Facebook Pixel - Social media analytics
  FACEBOOK_PIXEL: {
    enabled: false, // Currently disabled
    pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
  }
}
```

## 🚀 Common Use Cases

### 1. **Disable All Analytics for Development**
```javascript
DEVELOPMENT: {
  enableInDevelopment: false, // Disables all analytics in dev mode
  debugMode: true,           // Shows debug logs in console
  testMode: false           // Set to true to prevent sending real data
}
```

### 2. **Disable Only Heavy Tools (Keep GA, Disable Clarity)**
```javascript
GOOGLE_ANALYTICS: { enabled: true },
MICROSOFT_CLARITY: { enabled: false }, // Disable if performance is a concern
```

### 3. **Disable Specific Events**
```javascript
CUSTOM_EVENTS: {
  enabled: true,
  trackFormSubmissions: true,
  trackButtonClicks: false,     // Disable button tracking
  trackServiceInquiries: true,
  trackPhoneClicks: true,
  trackEmailClicks: false,      // Disable email tracking
}
```

### 4. **Privacy-Focused Setup**
```javascript
PRIVACY: {
  respectDoNotTrack: true,     // Honor browser DNT setting
  requireConsent: true,        // Require user consent
  cookielessTracking: true     // Use cookie-less tracking
}
```

## 📊 Performance Impact Control

### Minimal Setup (Fastest Performance):
```javascript
GOOGLE_ANALYTICS: { enabled: true },   // Keep for essential tracking
MICROSOFT_CLARITY: { enabled: false }, // Disable for faster loading
FACEBOOK_PIXEL: { enabled: false },
HOTJAR: { enabled: false }
```

### Full Analytics Setup:
```javascript
GOOGLE_ANALYTICS: { enabled: true },
MICROSOFT_CLARITY: { enabled: true },
FACEBOOK_PIXEL: { enabled: true },
HOTJAR: { enabled: true }
```

## 🔍 Debug Mode

Enable debug mode to see what's happening:

```javascript
DEVELOPMENT: {
  debugMode: true  // Shows analytics logs in browser console
}
```

When enabled, you'll see logs like:
```
🔍 Analytics Debug: GA4 Event tracked: button_click
🔍 Analytics Debug: Clarity tagging disabled: user_consent
🔍 Analytics Configuration: {
  Google Analytics: true,
  Microsoft Clarity: true,
  Facebook Pixel: false
}
```

## 🚀 Quick Commands

### Disable ALL Analytics:
```javascript
// Set all enabled flags to false
GOOGLE_ANALYTICS: { enabled: false },
MICROSOFT_CLARITY: { enabled: false },
FACEBOOK_PIXEL: { enabled: false },
CUSTOM_EVENTS: { enabled: false }
```

### Disable Only Heavy Tools:
```javascript
// Keep essential tracking, disable heavy tools
GOOGLE_ANALYTICS: { enabled: true },  // Keep
MICROSOFT_CLARITY: { enabled: false }, // Disable for performance
FACEBOOK_PIXEL: { enabled: false }     // Disable for performance
```

### Enable Test Mode:
```javascript
DEVELOPMENT: {
  testMode: true // Events are logged but not sent to analytics services
}
```

## 🛠️ Advanced Configuration

### Environment-Based Settings:
The system automatically:
- Disables analytics in development if `enableInDevelopment: false`
- Respects browser "Do Not Track" settings if `respectDoNotTrack: true`
- Shows debug information if `debugMode: true`

### Adding New Analytics Tools:
1. Add tool config to `ANALYTICS_CONFIG`
2. Add loading logic to `AnalyticsLoader.js`
3. Add utility functions to `analytics.js`

### Custom Events Control:
Each event type can be individually controlled:
- `trackFormSubmissions` - Contact form submissions
- `trackButtonClicks` - All button clicks
- `trackServiceInquiries` - Service inquiry events
- `trackPhoneClicks` - Phone number clicks
- `trackEmailClicks` - Email address clicks

## 💡 Best Practices

1. **Start Minimal**: Enable only Google Analytics initially
2. **Add Gradually**: Enable other tools based on business needs
3. **Monitor Performance**: Use browser dev tools to check impact
4. **Test Changes**: Use `testMode: true` when testing
5. **Use Debug Mode**: Enable debugging during development

## 🔄 Making Changes

1. Edit `/src/config/analytics.js`
2. Change `enabled: true` to `enabled: false` (or vice versa)
3. Save the file
4. Restart your development server
5. Check browser console for debug information

**No other files need to be modified!** The entire analytics system is controlled from this single configuration file.