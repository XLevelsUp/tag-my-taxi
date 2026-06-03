// Utility helpers for Google Tag (gtag.js)

export const GA_TRACKING_ID = 'GT-P366V5Q4';
export const ADS_TRACKING_ID = 'AW-633411275';

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Log specific events
export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track Google Ads Conversions
// Example label: 'AW-633411275/abcdefg12345'
export const trackConversion = (sendTo: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': sendTo,
    });
  }
};
