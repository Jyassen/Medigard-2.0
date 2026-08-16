import { describe, expect, test } from "vitest";
import { GROWTH, GROWTH_LEAD_VENDOR_PHRASES } from "./copy";

describe("GROWTH", () => {
  test("names Agency Scale Infrastructure, the Growth Order, and the Forced Choice Trap", () => {
    expect({
      category: GROWTH.category,
      mechanism: GROWTH.mechanism,
      enemy: GROWTH.enemy,
      tagline: GROWTH.tagline,
    }).toEqual({
      category: "Agency Scale Infrastructure",
      mechanism: "The Growth Order",
      enemy: "The Forced Choice Trap",
      tagline: "Calendar first. Scale infrastructure next. Productivity last.",
    });
  });

  test("hero states an order-of-operations problem instead of a lead-generation promise", () => {
    expect({
      headline: GROWTH.hero.headline,
      accent: GROWTH.hero.headlineAccent,
    }).toEqual({
      headline: "You do not have a lead problem.",
      accent: "You have an order-of-operations problem.",
    });
  });

  test("stages follow Fill → Attract → Route → Activate", () => {
    expect(GROWTH.stages.map((stage) => stage.title)).toEqual([
      "Fill the Calendar",
      "Attract at Scale",
      "Route, Nurture & Book",
      "Make Them Productive",
    ]);
  });

  test("truth bombs include signed-is-not-capacity and CPL-is-the-wrong-scorecard", () => {
    expect(GROWTH.truthBombs.map((item) => item.q)).toEqual([
      "Recruiting without calendars is how you starve the producers you already pay.",
      "Leads without recruiting infrastructure cap the agency at current headcount.",
      "A signed agent is not capacity. A working agent is.",
      "A CRM and training library are not a growth system.",
      "CPL is the wrong scorecard if the lead never becomes a conversation.",
    ]);
  });

  test("disqualifies cheap-lead buyers and production guarantees", () => {
    expect(GROWTH.notFor).toEqual(
      expect.arrayContaining([
        "Buyers shopping the cheapest possible lead source",
        "Buyers expecting enrollments, commissions, revenue, or what agents write",
      ]),
    );
  });

  test("customer-facing copy never uses lead-vendor headlines", () => {
    const surface = JSON.stringify(GROWTH).toLowerCase();
    expect(
      GROWTH_LEAD_VENDOR_PHRASES.filter((phrase) =>
        surface.includes(phrase.toLowerCase()),
      ),
    ).toEqual([]);
  });

  test("promise boundaries exclude revenue and enrollments", () => {
    expect(GROWTH.cannotPromise).toEqual([
      "Revenue",
      "Enrollments",
      "Commissions",
      "Agent production",
      "Carrier acceptance",
    ]);
  });
});
