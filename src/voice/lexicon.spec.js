import { describe, expect, test } from "vitest";
import { GROWTH_LEAD_VENDOR_PHRASES } from "../growth/copy";
import { OFFER } from "../offer/copy";
import { SPOKEN, SPOKEN_FORBIDDEN } from "./lexicon";

describe("SPOKEN", () => {
  test("locks the fragmentation VSL nouns an agency owner would actually say", () => {
    expect({
      offer: SPOKEN.offerName,
      enemy: SPOKEN.enemy,
      reframe: SPOKEN.reframe,
      coordinate: SPOKEN.coordinateLine,
      leverage: SPOKEN.leverageLine,
      humanWork: SPOKEN.humanWork,
      unlock: SPOKEN.unlock,
    }).toEqual({
      offer: "Medigard Growth Infrastructure",
      enemy: "THE TRAP",
      reframe:
        "You didn’t build a growth engine. You built another department.",
      coordinate:
        "Your time is being spent coordinating growth instead of multiplying it.",
      leverage: "That is not leverage.",
      humanWork:
        "Your people should be doing human work. The system should be doing system work.",
      unlock: "How far can we turn this up?",
    });
  });
});

describe("OFFER spoken lock", () => {
  test("uses the spoken trap and engine reframe instead of launch or revolving-door labels", () => {
    expect(OFFER.enemy).toBe(SPOKEN.enemy);
    expect(OFFER.reframe).toBe(SPOKEN.reframe);
    const surface = JSON.stringify(OFFER);
    expect(surface).toContain(SPOKEN.enemy);
    expect(surface).toContain(SPOKEN.reframe);
    expect(surface).toContain(SPOKEN.coordinateLine);
    expect(surface).toContain(SPOKEN.humanWork);
    expect(surface).toContain(SPOKEN.unlock);
    expect(
      SPOKEN_FORBIDDEN.filter((phrase) => surface.includes(phrase)),
    ).toEqual([]);
  });

  test("never uses lead-vendor headlines", () => {
    const surface = JSON.stringify(OFFER).toLowerCase();
    expect(
      GROWTH_LEAD_VENDOR_PHRASES.filter((phrase) =>
        surface.includes(phrase.toLowerCase()),
      ),
    ).toEqual([]);
  });
});
