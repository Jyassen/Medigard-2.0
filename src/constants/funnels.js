import { ROUTES } from "./routes";

export const BOOKING_URLS = {
  growth:
    import.meta.env.VITE_GROWTH_BOOKING_URL ||
    "https://link.msgsndr.com/widget/booking/ghl_9m4gg4h7x7fwhp3sxncc?source=medigard_growth",
  compliance:
    import.meta.env.VITE_COMPLIANCE_BOOKING_URL ||
    "https://api.leadconnectorhq.com/widget/booking/R708RvYTDmq9qJnkD72t?source=medigard_compliance",
};

export const CRM_SOURCES = {
  hub: "medigard_hub",
  growth: "medigard_growth",
  growthBook: "medigard_growth_booking",
  offer: "medigard_offer",
  offerBook: "medigard_offer_booking",
  compliance: "medigard_compliance",
  complianceBook: "medigard_compliance_booking",
};

export const FUNNEL_IDS = {
  hub: "hub",
  launch: "launch",
  offer: "offer",
  offerV2: "offer-v2",
  offerV3: "offer-v3",
  offerV4: "offer-v4",
  compliance: "compliance",
  complianceV2: "compliance-v2",
};

export const FUNNEL_STORAGE_KEY = "medigard_funnel";

export const HUB_THANK_YOU = "/thank-you";

export function getFunnelSource(pathname) {
  if (pathname === "/" || pathname.startsWith("/offer")) {
    return CRM_SOURCES.offer;
  }
  if (pathname.startsWith("/launch")) return CRM_SOURCES.growth;
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

const SITE_WIDE_PATHS = new Set([ROUTES.privacy, ROUTES.terms, ROUTES.contact]);

export function funnelFromPathname(pathname) {
  if (pathname === "/") return FUNNEL_IDS.offerV2;
  if (pathname.startsWith("/offer/v4")) return FUNNEL_IDS.offerV4;
  if (pathname.startsWith("/offer/v3")) return FUNNEL_IDS.offerV3;
  if (pathname.startsWith("/offer/v2")) return FUNNEL_IDS.offerV2;
  if (pathname.startsWith("/offer")) return FUNNEL_IDS.offer;
  if (pathname.startsWith("/launch")) return FUNNEL_IDS.launch;
  if (pathname.startsWith("/compliance/v2")) return FUNNEL_IDS.complianceV2;
  if (pathname.startsWith("/compliance")) return FUNNEL_IDS.compliance;
  return FUNNEL_IDS.hub;
}

export function thankYouPathForFunnel(funnelId) {
  switch (funnelId) {
    case FUNNEL_IDS.offerV2:
      return ROUTES.offerV2ThankYou;
    case FUNNEL_IDS.offerV3:
      return ROUTES.offerV3ThankYou;
    case FUNNEL_IDS.offerV4:
      return ROUTES.offerV4ThankYou;
    case FUNNEL_IDS.offer:
      return ROUTES.offerThankYou;
    case FUNNEL_IDS.launch:
      return ROUTES.launchThankYou;
    case FUNNEL_IDS.compliance:
      return "/compliance/thank-you";
    case FUNNEL_IDS.complianceV2:
      return HUB_THANK_YOU;
    default:
      return HUB_THANK_YOU;
  }
}

export function funnelFromCrmSource(source) {
  if (!source) return "";
  if (source.includes("offer")) return FUNNEL_IDS.offer;
  if (source.includes("growth")) return FUNNEL_IDS.launch;
  if (source.includes("compliance")) return FUNNEL_IDS.compliance;
  return "";
}

export function readStoredFunnel() {
  try {
    return sessionStorage.getItem(FUNNEL_STORAGE_KEY) || FUNNEL_IDS.hub;
  } catch {
    return FUNNEL_IDS.hub;
  }
}

export function rememberFunnel(pathname) {
  if (pathname === HUB_THANK_YOU || SITE_WIDE_PATHS.has(pathname)) {
    return readStoredFunnel();
  }
  const funnel = funnelFromPathname(pathname);
  try {
    sessionStorage.setItem(FUNNEL_STORAGE_KEY, funnel);
  } catch {
    return funnel;
  }
  return funnel;
}

export function resolveBookingThankYouPath({
  search = "",
  storedFunnel = FUNNEL_IDS.hub,
} = {}) {
  if (storedFunnel && storedFunnel !== FUNNEL_IDS.hub) {
    return thankYouPathForFunnel(storedFunnel);
  }
  const query = search.startsWith("?") ? search.slice(1) : search;
  const fromSource = funnelFromCrmSource(
    new URLSearchParams(query).get("source") || "",
  );
  if (fromSource) return thankYouPathForFunnel(fromSource);
  return HUB_THANK_YOU;
}

const GHL_MESSAGE_ORIGINS = new Set([
  "https://api.leadconnectorhq.com",
  "https://link.msgsndr.com",
]);

export function isGhlBookingOrigin(origin) {
  return GHL_MESSAGE_ORIGINS.has(origin);
}

export function isGhlBookingCompleteMessage(data) {
  if (data === "msgsndr-booking-complete" || data === "booking_complete") {
    return true;
  }
  if (Array.isArray(data)) {
    return (
      data[0] === "msgsndr-booking-complete" || data[0] === "booking_complete"
    );
  }
  if (data && typeof data === "object") {
    const type = data.type || data.event;
    return type === "msgsndr-booking-complete" || type === "booking_complete";
  }
  return false;
}
