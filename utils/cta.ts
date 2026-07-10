// utils/cta.ts
export const trackCTAClick = (buttonName: string, location: string) => {
  // Analytics tracking
  console.log(`CTA Clicked: ${buttonName} at ${location}`);
  
  // You can integrate with your analytics service here
  // Example: mixpanel.track('CTA Click', { button: buttonName, location });
};

export const getCTAVariant = (pathname: string) => {
  if (pathname === '/') return 'default';
  if (pathname.includes('/partner')) return 'gradient';
  if (pathname.includes('/demo')) return 'simple';
  return 'default';
};