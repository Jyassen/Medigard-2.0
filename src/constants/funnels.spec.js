import { describe, expect, test } from "vitest";
import { CRM_SOURCES, getFunnelSource, withSource } from "./funnels";

describe("getFunnelSource", () => {
  test("maps each public route family to its CRM source", () => {
    expect([
      getFunnelSource("/launch/book"),
      getFunnelSource("/offer/book"),
      getFunnelSource("/leads/t65"),
      getFunnelSource("/compliance/book"),
      getFunnelSource("/"),
    ]).toEqual([
      CRM_SOURCES.growth,
      CRM_SOURCES.offer,
      CRM_SOURCES.t65,
      CRM_SOURCES.compliance,
      "medigard_hub",
    ]);
  });
});

describe("withSource", () => {
  test("preserves existing query parameters when adding attribution", () => {
    expect(
      withSource("https://example.com/path?campaign=summer", CRM_SOURCES.t65),
    ).toBe(
      "https://example.com/path?campaign=summer&source=medigard_t65_handoff",
    );
  });
});
