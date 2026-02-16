import { useEffect } from 'react';
import { ANALYTICS_CONFIG, isAnalyticsEnabled, getAnalyticsId, debugLog } from '../config/analytics';

const AnalyticsLoader = () => {
  useEffect(() => {
    // Load Google Analytics 4
    if (isAnalyticsEnabled('GOOGLE_ANALYTICS')) {
      const gaId = getAnalyticsId('GOOGLE_ANALYTICS');
      debugLog('Loading Google Analytics', gaId);
      
      // Create and append GA script
      const gaScript = document.createElement('script');
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gaScript);

      // Initialize GA
      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', gaId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
      
      // Make gtag globally available
      window.gtag = gtag;
    } else {
      debugLog('Google Analytics disabled');
    }

    // Load Microsoft Clarity
    if (isAnalyticsEnabled('MICROSOFT_CLARITY')) {
      const clarityId = getAnalyticsId('MICROSOFT_CLARITY');
      debugLog('Loading Microsoft Clarity', clarityId);
      
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        var t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        var y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", clarityId);
    } else {
      debugLog('Microsoft Clarity disabled');
    }

    // Load Facebook Pixel (if enabled)
    if (isAnalyticsEnabled('FACEBOOK_PIXEL')) {
      const pixelId = getAnalyticsId('FACEBOOK_PIXEL');
      debugLog('Loading Facebook Pixel', pixelId);

      // eslint-disable-next-line no-unused-expressions
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    } else {
      debugLog('Facebook Pixel disabled');
    }

    // Load Hotjar (if enabled)
    if (isAnalyticsEnabled('HOTJAR')) {
      const hotjarId = getAnalyticsId('HOTJAR');
      debugLog('Loading Hotjar', hotjarId);
      
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:hotjarId,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    } else {
      debugLog('Hotjar disabled');
    }

    // Debug information
    if (ANALYTICS_CONFIG.DEVELOPMENT.debugMode) {
      console.log('🔍 Analytics Configuration:', {
        'Google Analytics': isAnalyticsEnabled('GOOGLE_ANALYTICS'),
        'Microsoft Clarity': isAnalyticsEnabled('MICROSOFT_CLARITY'),
        'Facebook Pixel': isAnalyticsEnabled('FACEBOOK_PIXEL'),
        'Hotjar': isAnalyticsEnabled('HOTJAR'),
        'Custom Events': ANALYTICS_CONFIG.CUSTOM_EVENTS.enabled,
        'Environment': process.env.NODE_ENV
      });
    }

  }, []);

  // This component doesn't render anything
  return null;
};

export default AnalyticsLoader;