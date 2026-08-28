import { describe, expect, test } from "vitest";
import {
  GROWTH_VSL_ASPECT,
  GROWTH_VSL_WISTIA_ID,
  PRE_CALL_VSL_WISTIA_ID,
} from "./media";

describe("growth offer media", () => {
  test("defaults the growth VSL and pre-call briefing to the live Wistia embeds", () => {
    expect({
      growthId: GROWTH_VSL_WISTIA_ID,
      growthAspect: GROWTH_VSL_ASPECT,
      preCallId: PRE_CALL_VSL_WISTIA_ID,
    }).toEqual({
      growthId: "q98yag2x29",
      growthAspect: "1.7777777777777777",
      preCallId: "v5168u6w4o",
    });
  });
});
