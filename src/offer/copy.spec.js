import { describe, expect, test } from "vitest";
import { GROWTH_LEAD_VENDOR_PHRASES } from "../growth/copy";
import { SPOKEN } from "../voice/lexicon";
import { OFFER } from "./copy";

describe("OFFER", () => {
  test("opens on the plain scale-without-a-department headline", () => {
    expect({
      kicker: OFFER.hero.kicker,
      headline: OFFER.hero.headline,
      accent: OFFER.hero.headlineAccent,
    }).toEqual({
      kicker: "For Medicare agency owners",
      headline: "Scale your Medicare agency",
      accent: "without building another department.",
    });
  });

  test("keeps the engine-versus-department reframe in the Trap section", () => {
    expect(OFFER.problem.lead).toContain(SPOKEN.reframe);
  });

  test("first screen names calendar fill and rejects a lead package", () => {
    expect(OFFER.hero.subhead).toMatch(/fills calendars/);
    expect(OFFER.hero.subhead).toMatch(/ads, funnels, routing, booking/);
    expect(OFFER.hero.subhead).toMatch(/not another lead package/i);
    expect(OFFER.proof).toEqual([
      { value: "60-day install", label: "not a production promise" },
      { value: "Calendar fill", label: "ads, funnels, routing, booking" },
      {
        value: "Then capacity",
        label: "interested, joined, active—then turn it up",
      },
    ]);
  });

  test("carries qualification, the active path, and disqualification in VSL language", () => {
    expect(OFFER.purchaseSignals.map((item) => item.title)).toEqual([
      "You’re teaching the marketing company Medicare",
      "The lead vendor stops when the list arrives",
      "In-house means hiring a department",
      "The pieces never become a loop",
      "You became the connector",
      "The build list keeps getting longer",
    ]);
    expect(OFFER.steps.map((step) => step.title)).toEqual([
      "Full calendars",
      "Active capacity",
      "A connected loop",
      "A custom install",
    ]);
    expect(OFFER.day30.heading).toBe(
      "Interested. Joined. Active. Not a production promise.",
    );
    expect(OFFER.notFor).toEqual(
      expect.arrayContaining([
        "Buyers shopping another lead package",
        "Buyers expecting enrollments, commissions, revenue, or what agents write",
      ]),
    );
  });

  test("names the trap in spoken language, not launch strategy labels", () => {
    expect(OFFER.enemy).toBe(SPOKEN.enemy);
    expect(OFFER.reframe).toBe(SPOKEN.reframe);
    const surface = JSON.stringify(OFFER).toLowerCase();
    expect(
      GROWTH_LEAD_VENDOR_PHRASES.filter((phrase) =>
        surface.includes(phrase.toLowerCase()),
      ),
    ).toEqual([]);
  });
});
