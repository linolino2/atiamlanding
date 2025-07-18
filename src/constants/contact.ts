export const WHATSAPP_NUMBER = "+254 793 746 046";
export const WHATSAPP_BASE_URL = "https://wa.me/254793746046";
export const MAPS_LOCATION_URL = "https://maps.app.goo.gl/on3KUQkb4cwCQ1dCA";
export const INSTAGRAM_URL = "https://www.instagram.com/atiamcollege/";

export const createWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};