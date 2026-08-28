import { describe, expect, test } from "vitest";
import { GROWTH_LEAD_VENDOR_PHRASES } from "../growth/copy";
import { SPOKEN, SPOKEN_FORBIDDEN } from "../voice/lexicon";
import { OFFER_V4 } from "./copyV4";

describe("OFFER_V4", () => {
  test("opens on a two-line install headline without a production promise", () => {
    expect({
      headline: OFFER_V4.hero.headline,
      accent: OFFER_V4.hero.headlineAccent,
      cta: OFFER_V4.hero.cta,
    }).toEqual({
      headline: "Growth installed without a department.",
      accent: "Get back to running the agency.",
      cta: "Book Review",
    });
    expect(OFFER_V4.hero.subhead).toMatch(/booked appointments/i);
    expect(OFFER_V4.hero.subhead).toMatch(/not another lead package/i);
  });

  test("keeps the system guarantee and spoken reframe, not launch labels", () => {
    expect(OFFER_V4.guarantee.heading).toBe(
      "We guarantee the system gets built.",
    );
    expect(OFFER_V4.guarantee.body).toMatch(/do not promise/i);
    expect(OFFER_V4.reframe).toBe(SPOKEN.reframe);
    const surface = JSON.stringify(OFFER_V4);
    expect(
      SPOKEN_FORBIDDEN.filter((phrase) => surface.includes(phrase)),
    ).toEqual([]);
    expect(
      GROWTH_LEAD_VENDOR_PHRASES.filter((phrase) => surface.includes(phrase)),
    ).toEqual([]);
    expect(surface).not.toMatch(/\$\d+K/);
    expect(surface).not.toMatch(/\b\d{2,} leads\b/i);
  });
});
