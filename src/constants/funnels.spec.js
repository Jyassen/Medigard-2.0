import { describe, expect, test } from "vitest";
import { ROUTES } from "./routes";
import {
  BOOKING_URLS,
  canEmbedBooking,
  CRM_SOURCES,
  FUNNEL_IDS,
  FUNNEL_STORAGE_KEY,
  funnelFromPathname,
  getFunnelSource,
  HUB_THANK_YOU,
  isGhlBookingCompleteMessage,
  rememberFunnel,
  resolveBookingThankYouPath,
  thankYouPathForFunnel,
  withSource,
} from "./funnels";

describe("getFunnelSource", () => {
  test("maps each public route family to its CRM source", () => {
    expect([
      getFunnelSource("/launch/book"),
      getFunnelSource("/offer/book"),
      getFunnelSource("/compliance/book"),
      getFunnelSource("/"),
    ]).toEqual([
      CRM_SOURCES.growth,
      CRM_SOURCES.offer,
      CRM_SOURCES.compliance,
      CRM_SOURCES.offer,
    ]);
  });
});

describe("funnelFromPathname", () => {
  test("treats the homepage as offer v2 and the old VSL page as compliance v2", () => {
    expect([
      funnelFromPathname("/"),
      funnelFromPathname("/offer/v2"),
      funnelFromPathname("/compliance/v2"),
      funnelFromPathname("/compliance"),
      funnelFromPathname("/systems"),
    ]).toEqual([
      FUNNEL_IDS.offerV2,
      FUNNEL_IDS.offerV2,
      FUNNEL_IDS.complianceV2,
      FUNNEL_IDS.compliance,
      FUNNEL_IDS.hub,
    ]);
  });
});

describe("withSource", () => {
  test("preserves existing query parameters when adding attribution", () => {
    expect(
      withSource("https://example.com/path?campaign=summer", CRM_SOURCES.offer),
    ).toBe("https://example.com/path?campaign=summer&source=medigard_offer");
  });
});

describe("canEmbedBooking", () => {
  test("embeds the live GHL widget calendars and rejects unknown hosts", () => {
    expect([
      canEmbedBooking(BOOKING_URLS.growth),
      canEmbedBooking(BOOKING_URLS.compliance),
      canEmbedBooking("https://example.com/widget/booking/demo"),
    ]).toEqual([true, true, false]);
  });
});

describe("BOOKING_URLS.growth", () => {
  test("defaults to the live LeadConnector growth calendar", () => {
    expect(BOOKING_URLS.growth).toContain(
      "https://api.leadconnectorhq.com/widget/booking/SETykFwwf8aabbIIsSUN",
    );
  });
});

describe("thankYouPathForFunnel", () => {
  test("keeps each live funnel on its own pre-call page", () => {
    expect([
      thankYouPathForFunnel(FUNNEL_IDS.offerV2),
      thankYouPathForFunnel(FUNNEL_IDS.offerV3),
      thankYouPathForFunnel(FUNNEL_IDS.offer),
      thankYouPathForFunnel(FUNNEL_IDS.launch),
      thankYouPathForFunnel(FUNNEL_IDS.compliance),
      thankYouPathForFunnel(FUNNEL_IDS.complianceV2),
      thankYouPathForFunnel(FUNNEL_IDS.hub),
    ]).toEqual([
      ROUTES.offerV2ThankYou,
      ROUTES.offerV3ThankYou,
      ROUTES.offerThankYou,
      ROUTES.launchThankYou,
      "/compliance/thank-you",
      HUB_THANK_YOU,
      HUB_THANK_YOU,
    ]);
  });
});

describe("resolveBookingThankYouPath", () => {
  test("prefers the stored offer variant over the shared GHL thank-you URL", () => {
    expect(
      resolveBookingThankYouPath({ storedFunnel: FUNNEL_IDS.offerV2 }),
    ).toBe(ROUTES.offerV2ThankYou);
  });

  test("routes a source query to the matching funnel when no visit is stored", () => {
    expect(
      resolveBookingThankYouPath({
        search: "?source=medigard_offer_booking",
        storedFunnel: FUNNEL_IDS.hub,
      }),
    ).toBe(ROUTES.offerThankYou);
  });
});

describe("rememberFunnel", () => {
  test("does not overwrite an offer visit when GHL lands on /thank-you", () => {
    sessionStorage.setItem(FUNNEL_STORAGE_KEY, FUNNEL_IDS.offerV2);
    expect(rememberFunnel(HUB_THANK_YOU)).toBe(FUNNEL_IDS.offerV2);
    expect(sessionStorage.getItem(FUNNEL_STORAGE_KEY)).toBe(FUNNEL_IDS.offerV2);
  });

  test("keeps the current funnel when someone opens privacy or terms", () => {
    sessionStorage.setItem(FUNNEL_STORAGE_KEY, FUNNEL_IDS.complianceV2);
    expect(rememberFunnel(ROUTES.privacy)).toBe(FUNNEL_IDS.complianceV2);
    expect(rememberFunnel(ROUTES.terms)).toBe(FUNNEL_IDS.complianceV2);
    expect(sessionStorage.getItem(FUNNEL_STORAGE_KEY)).toBe(
      FUNNEL_IDS.complianceV2,
    );
  });
});

describe("isGhlBookingCompleteMessage", () => {
  test("recognizes the HighLevel iframe booking-complete payload", () => {
    expect(
      isGhlBookingCompleteMessage([
        "msgsndr-booking-complete",
        { calendarId: "x" },
      ]),
    ).toBe(true);
    expect(isGhlBookingCompleteMessage({ type: "page-loaded" })).toBe(false);
  });
});
