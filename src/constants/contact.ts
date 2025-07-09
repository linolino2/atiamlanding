export const WHATSAPP_NUMBER = "+254 793 746 046";
export const WHATSAPP_BASE_URL = "https://wa.me/254793746046";

export const createWhatsAppLink = (message: string) => {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
};