# Analytics Setup Guide for CrestWin Website

This guide explains how to set up and configure various free analytics tools for your CrestWin website.

## 🔧 Required Setup Steps

### 1. Google Analytics 4 (GA4) - **PRIORITY: HIGH**

**What it does:** Tracks website traffic, user behavior, conversions, and provides comprehensive insights.

**Setup Steps:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for your website
3. Copy your Measurement ID (format: G-XXXXXXXXXX)
4. Replace `GA_MEASUREMENT_ID` in `/public/index.html` with your actual ID
5. Replace `GA_MEASUREMENT_ID` in `/src/utils/analytics.js` with your actual ID

**Example:**
```html
<!-- Replace this -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  gtag('config', 'GA_MEASUREMENT_ID', {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
</script>

<!-- With this -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4"></script>
<script>
  gtag('config', 'G-ABC123DEF4', {
    page_title: document.title,
    page_location: window.location.href,
    send_page_view: true
  });
</script>
```

### 2. Google Search Console - **PRIORITY: HIGH**

**What it does:** Monitors your website's search performance, indexing status, and SEO issues.

**Setup Steps:**
1. Go to [Google Search Console](https://search.google.com/search-console/)
2. Add your website property: `https://www.crestwin.in`
3. Choose "HTML tag" verification method
4. Copy the verification code
5. Replace `GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE` in `/public/index.html`

**Example:**
```html
<!-- Replace this -->
<meta name="google-site-verification" content="GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE" />

<!-- With this -->
<meta name="google-site-verification" content="abc123def456ghi789" />
```

**After Setup:**
- Submit your sitemap: `https://www.crestwin.in/sitemap.xml`
- Monitor search performance and indexing issues

### 3. Microsoft Clarity - **PRIORITY: HIGH**

**What it does:** Provides heatmaps, session recordings, and user behavior analytics.

**Setup Steps:**
1. Go to [Microsoft Clarity](https://clarity.microsoft.com/)
2. Create a new project
3. Copy your Project ID
4. Replace `CLARITY_PROJECT_ID` in `/public/index.html`

**Example:**
```html
<!-- Replace this -->
(window, document, "clarity", "script", "CLARITY_PROJECT_ID");

<!-- With this -->
(window, document, "clarity", "script", "abc123def");
```

### 4. Facebook Pixel - **PRIORITY: MEDIUM**

**What it does:** Tracks social media traffic and enables Facebook/Instagram advertising optimization.

**Setup Steps:**
1. Go to [Facebook Business Manager](https://business.facebook.com/)
2. Create a Facebook Pixel
3. Copy your Pixel ID
4. Replace `FACEBOOK_PIXEL_ID` in `/public/index.html` (appears twice)

**Example:**
```html
<!-- Replace this -->
fbq('init', 'FACEBOOK_PIXEL_ID');

<!-- With this -->
fbq('init', '123456789012345');
```

### 5. Bing Webmaster Tools - **PRIORITY: MEDIUM**

**What it does:** Monitors your website's performance on Bing search engine.

**Setup Steps:**
1. Go to [Bing Webmaster Tools](https://www.bing.com/webmasters/)
2. Add your website
3. Choose "HTML meta tag" verification
4. Copy the verification code
5. Replace `BING_WEBMASTER_VERIFICATION_CODE` in `/public/index.html`

**Example:**
```html
<!-- Replace this -->
<meta name="msvalidate.01" content="BING_WEBMASTER_VERIFICATION_CODE" />

<!-- With this -->
<meta name="msvalidate.01" content="ABC123DEF456GHI789" />
```

### 6. Additional Analytics Tools (Optional)

#### Hotjar - User Behavior Analytics
1. Go to [Hotjar](https://www.hotjar.com/)
2. Create a free account (up to 35 daily sessions)
3. Add tracking code to your website

#### Yandex Metrica - Russian Search Engine Analytics
1. Go to [Yandex Metrica](https://metrica.yandex.com/)
2. Create a counter for your website
3. Add tracking code

## 📊 Analytics Features Already Implemented

### Custom Event Tracking
The website includes comprehensive event tracking for:
- Form submissions (contact forms, newsletter signups)
- Button clicks (CTA buttons, navigation)
- File downloads (brochures, documents)
- External link clicks
- Service inquiries
- Scroll depth tracking
- Video interactions
- Search queries
- User engagement time
- Custom conversions

### Example Usage
```javascript
import { trackFormSubmission, trackButtonClick, trackServiceInquiry } from '../utils/analytics';

// Track form submission
trackFormSubmission('contact_form', true);

// Track button click
trackButtonClick('get_quote', 'header');

// Track service inquiry
trackServiceInquiry('Web Development', '$5,000 - $15,000');
```

## 🔐 Privacy & GDPR Compliance

The analytics setup includes:
- Consent management for EU users
- Cookie-less tracking options
- User privacy controls
- Data retention settings

## 📈 Key Metrics to Monitor

### Website Performance
- Page load times
- Bounce rate
- Session duration
- Pages per session

### Business Metrics
- Contact form submissions
- Service inquiry conversions
- Phone call clicks
- Email clicks

### SEO Performance
- Organic search traffic
- Keyword rankings
- Click-through rates
- Search console errors

### User Behavior
- Most visited pages
- User flow paths
- Exit pages
- Device/browser usage

## 🛠️ Testing Your Analytics

1. **Install Extensions:**
   - Google Analytics Debugger (Chrome)
   - Facebook Pixel Helper (Chrome)
   - Microsoft Clarity Chrome Extension

2. **Test Events:**
   - Fill out contact form
   - Click buttons
   - Navigate between pages
   - Check real-time analytics

3. **Debug Function:**
   ```javascript
   // Open browser console and run:
   import { debugAnalytics } from './utils/analytics';
   debugAnalytics();
   ```

## 📱 Mobile Analytics

All analytics tools are mobile-optimized and track:
- Mobile vs desktop usage
- App-like behavior (PWA)
- Touch interactions
- Mobile-specific user flows

## 💡 Pro Tips

1. **Set up Goals** in Google Analytics for:
   - Contact form submissions
   - Phone clicks
   - Email clicks
   - Service page visits

2. **Create Custom Dashboards** for:
   - Daily traffic overview
   - Lead generation metrics
   - SEO performance
   - User behavior insights

3. **Set up Alerts** for:
   - Traffic drops
   - Conversion decreases
   - Error spikes
   - SEO issues

4. **Regular Monitoring:**
   - Weekly traffic reports
   - Monthly SEO performance
   - Quarterly user behavior analysis
   - Annual analytics audit

## 🚀 Next Steps After Setup

1. Verify all tracking codes are working
2. Set up conversion goals
3. Create custom dashboards
4. Schedule regular reporting
5. Implement A/B testing
6. Monitor and optimize based on data

## 📞 Support

For technical issues with analytics setup:
- Email: info@crestwin.in
- Phone: +91-9203797182

Remember to regularly review and update your analytics setup to ensure accurate tracking and compliance with privacy regulations.