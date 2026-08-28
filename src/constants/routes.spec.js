import { describe, expect, test } from "vitest";
import { ROUTES } from "./routes";

describe("ROUTES", () => {
  test("defines one canonical destination for every Medigard offer", () => {
    expect(ROUTES).toEqual({
      home: "/",
      launch: "/launch",
      launchBook: "/launch/book",
      launchThankYou: "/launch/thank-you",
      launchContact: "/launch/contact",
      launchPrivacy: "/launch/privacy",
      launchTerms: "/launch/terms",
      offer: "/offer",
      offerV2: "/offer/v2",
      offerV3: "/offer/v3",
      offerV4: "/offer/v4",
      offerBook: "/offer/book",
      offerThankYou: "/offer/thank-you",
      offerV2ThankYou: "/offer/v2/thank-you",
      offerV3ThankYou: "/offer/v3/thank-you",
      offerV4ThankYou: "/offer/v4/thank-you",
      offerContact: "/offer/contact",
      offerPrivacy: "/offer/privacy",
      offerTerms: "/offer/terms",
      t65: "/leads/t65",
      compliance: "/compliance",
      complianceBook: "/compliance/book",
      privacy: "/privacy",
      terms: "/terms",
      contact: "/contact",
    });
  });
});
