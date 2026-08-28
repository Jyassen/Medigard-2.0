import { describe, expect, test } from "vitest";
import { ROUTES } from "../constants/routes";
import { O, offerPaths, offerVariantFromPath } from "./constants";

describe("offerVariantFromPath", () => {
  test("reads the offer theme from the URL prefix", () => {
    expect([
      offerVariantFromPath("/offer"),
      offerVariantFromPath("/offer/v2"),
      offerVariantFromPath("/offer/v2/thank-you"),
      offerVariantFromPath("/offer/v3/privacy"),
      offerVariantFromPath("/offer/v4/contact"),
    ]).toEqual(["v1", "v2", "v2", "v3", "v4"]);
  });
});

describe("offerPaths", () => {
  test("keeps v1 destinations on the original offer routes", () => {
    expect(O).toEqual(offerPaths("v1"));
    expect(O.home).toBe(ROUTES.offer);
    expect(O.book).toBe(ROUTES.offerBook);
    expect(O.thanks).toBe(ROUTES.offerThankYou);
  });

  test("nests v2 legal and thank-you pages under /offer/v2", () => {
    expect(offerPaths("v2")).toEqual({
      variant: "v2",
      home: ROUTES.offerV2,
      book: `${ROUTES.offerV2}#book`,
      thanks: ROUTES.offerV2ThankYou,
      contact: "/offer/v2/contact",
      privacy: "/offer/v2/privacy",
      terms: "/offer/v2/terms",
      howTo: { pathname: ROUTES.offerV2, hash: "#how-it-works" },
    });
  });
});
