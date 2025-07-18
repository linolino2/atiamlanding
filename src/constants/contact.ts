export const WHATSAPP_NUMBER = "+254 793 746 046";
export const WHATSAPP_BASE_URL = "https://wa.me/254793746046";
export const EMAIL = "admin@atiamcollege.co.ke";
export const PHONE = "+254 793 746 046";
export const MAPS_LOCATION_URL = "https://maps.app.goo.gl/on3KUQkb4cwCQ1dCA";
export const INSTAGRAM_URL = "https://www.instagram.com/atiamcollege/";
export const FACEBOOK_URL = "https://www.facebook.com/atiamcollege";
export const TWITTER_URL = "https://twitter.com/atiamcollege";
export const LINKEDIN_URL = "https://www.linkedin.com/company/atiamcollege";
export const YOUTUBE_URL = "https://www.youtube.com/@atiamcollege";

export const createWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};