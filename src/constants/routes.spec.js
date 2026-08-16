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
      offerBook: "/offer/book",
      offerThankYou: "/offer/thank-you",
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
