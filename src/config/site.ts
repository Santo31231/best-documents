// Контактные данные — поменяйте здесь, и они обновятся по всему сайту.
export const SITE = {
  brandName: "Apostille",
  brandSubtitle: "Документы для жизни за границей",
  // Замените на реальный номер. Только цифры, без + и пробелов.
  whatsappPhone: "380000000000",
  whatsappDisplay: "+380 (00) 000-00-00",
  city: "Киев",
  workingHours: "Пн–Сб, 09:00 — 19:00",
};

export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappPhone}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}