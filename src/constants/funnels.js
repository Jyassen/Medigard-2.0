export const BOOKING_URLS = {
  growth:
    import.meta.env.VITE_GROWTH_BOOKING_URL ||
    "https://link.msgsndr.com/widget/booking/ghl_9m4gg4h7x7fwhp3sxncc?source=medigard_growth",
  compliance:
    import.meta.env.VITE_COMPLIANCE_BOOKING_URL ||
    "https://api.leadconnectorhq.com/widget/booking/R708RvYTDmq9qJnkD72t?source=medigard_compliance",
};

export const T65_APP_URL = import.meta.env.VITE_T65_APP_URL || "";

export const CRM_SOURCES = {
  hub: "medigard_hub",
  growth: "medigard_growth",
  growthBook: "medigard_growth_booking",
  offer: "medigard_offer",
  offerBook: "medigard_offer_booking",
  t65: "medigard_t65_handoff",
  compliance: "medigard_compliance",
  complianceBook: "medigard_compliance_booking",
};

export function getFunnelSource(pathname) {
  if (pathname.startsWith("/launch")) return CRM_SOURCES.growth;
  if (pathname.startsWith("/offer")) return CRM_SOURCES.offer;
  if (pathname.startsWith("/leads/t65")) return CRM_SOURCES.t65;
  if (pathname.startsWith("/compliance")) return CRM_SOURCES.compliance;
  return CRM_SOURCES.hub;
}

export function withSource(url, source) {
  if (!url) return "";
  const attributedUrl = new URL(url);
  attributedUrl.searchParams.set("source", source);
  return attributedUrl.toString();
}

const BOOKING_EMBED_HOSTS = new Set([
  "api.leadconnectorhq.com",
  "link.msgsndr.com",
]);

export function canEmbedBooking(url) {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return (
      BOOKING_EMBED_HOSTS.has(parsed.hostname) &&
      parsed.pathname.startsWith("/widget/booking/")
    );
  } catch {
    return false;
  }
}
