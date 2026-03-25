export const DEFAULT_WHATSAPP_NUMBER = "526621609375";
export const SERVICE_REQUEST_WHATSAPP_MESSAGE = "Hola, quiero solicitar un servicio.";

export function buildWhatsAppUrl(message?: string, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER) {
  const normalizedPhone = phoneNumber.replace(/\D/g, "");

  if (!message) {
    return `https://wa.me/${normalizedPhone}`;
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}

export function openWhatsAppChat(message?: string, phoneNumber: string = DEFAULT_WHATSAPP_NUMBER) {
  if (typeof window === "undefined") {
    return;
  }

  const whatsappUrl = buildWhatsAppUrl(message, phoneNumber);
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
}
