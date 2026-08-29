import { describe, expect, test } from "vitest";
import { ROUTES } from "../constants/routes";
import { O, offerPaths, offerVariantFromPath } from "./constants";

describe("offerVariantFromPath", () => {
  test("reads the offer theme from the URL prefix", () => {
    expect([
      offerVariantFromPath("/"),
      offerVariantFromPath("/privacy"),
      offerVariantFromPath("/terms"),
      offerVariantFromPath("/contact"),
      offerVariantFromPath("/offer"),
      offerVariantFromPath("/offer/v2"),
      offerVariantFromPath("/offer/v2/thank-you"),
      offerVariantFromPath("/offer/v3/privacy"),
      offerVariantFromPath("/offer/v4/contact"),
    ]).toEqual(["v2", "v2", "v2", "v2", "v1", "v2", "v2", "v3", "v4"]);
  });
});

describe("offerPaths", () => {
  test("keeps v1 destinations on the original offer routes", () => {
    expect(O).toEqual(offerPaths("v1"));
    expect(O.home).toBe(ROUTES.offer);
    expect(O.book).toBe(ROUTES.offerBook);
    expect(O.thanks).toBe(ROUTES.offerThankYou);
  });

  test("puts v2 on the site homepage with canonical privacy and terms", () => {
    expect(offerPaths("v2")).toEqual({
      variant: "v2",
      home: ROUTES.home,
      book: `${ROUTES.home}#book`,
      thanks: ROUTES.offerV2ThankYou,
      contact: ROUTES.contact,
      privacy: ROUTES.privacy,
      terms: ROUTES.terms,
      howTo: { pathname: ROUTES.home, hash: "#how-it-works" },
    });
  });
});
