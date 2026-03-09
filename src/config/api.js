export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// For Cloudflare Pages, use relative URLs in production
export const getApiUrl = () => {
  if (import.meta.env.PROD && !import.meta.env.VITE_API_URL) {
    return ''; // Use relative URLs for Cloudflare Functions
  }
  return API_URL;
};
