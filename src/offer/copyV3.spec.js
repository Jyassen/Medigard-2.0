import { describe, expect, test } from "vitest";
import { GROWTH_LEAD_VENDOR_PHRASES } from "../growth/copy";
import { SPOKEN, SPOKEN_FORBIDDEN } from "../voice/lexicon";
import { OFFER_V3 } from "./copyV3";

describe("OFFER_V3", () => {
  test("opens on a pain-to-install headline without a production promise", () => {
    expect({
      headline: OFFER_V3.hero.headline,
      cta: OFFER_V3.hero.cta,
    }).toEqual({
      headline:
        "Still Building Another Department Every Time You Want to Grow? We'll Install the System That Fills Calendars and Recruits Active Agents.",
      cta: "Free 30-Minute Agency Review",
    });
    expect(OFFER_V3.hero.subhead).toMatch(/booked appointments/i);
    expect(OFFER_V3.hero.subhead).toMatch(/not another lead package/i);
  });

  test("names the header audience as Medicare agency owners and growth-minded operators", () => {
    expect(OFFER_V3.audience).toBe(
      "Medicare Agency Owners - Growth Minded Operators",
    );
  });

  test("install cards report system facts, not invented clinic results", () => {
    expect(OFFER_V3.installs.map((item) => item.title)).toEqual([
      "Calendar Fill",
      "Active Agents",
      "One Connected Loop",
    ]);
    expect(OFFER_V3.installs[0].stats).toEqual([
      { value: "60 days", label: "Install window" },
      { value: "Booked", label: "Appointments, not a list" },
      { value: "Named", label: "Ownership on every lead" },
    ]);
    const surface = JSON.stringify(OFFER_V3);
    expect(surface).not.toMatch(/\$\d+K/);
    expect(surface).not.toMatch(/\b\d{2,} leads\b/i);
  });

  test("keeps the system guarantee and spoken reframe, not launch labels", () => {
    expect(OFFER_V3.guarantee.heading).toBe(
      "We guarantee the system gets built.",
    );
    expect(OFFER_V3.guarantee.body).toMatch(/do not promise/i);
    expect(OFFER_V3.reframe).toBe(SPOKEN.reframe);
    const surface = JSON.stringify(OFFER_V3);
    expect(
      SPOKEN_FORBIDDEN.filter((phrase) => surface.includes(phrase)),
    ).toEqual([]);
    expect(
      GROWTH_LEAD_VENDOR_PHRASES.filter((phrase) => surface.includes(phrase)),
    ).toEqual([]);
  });
});
