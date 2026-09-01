import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const LIVE_ASSETS = [
  ["scorecard", "public/scorecard.html"],
  ["capacity", "public/capacity.html"],
  ["bottleneck", "public/bottleneck.html"],
];

describe("live growth assets", () => {
  test("each tool collects contact info, emails a copy of the results, and books a review", () => {
    expect(
      LIVE_ASSETS.map(([name, path]) => {
        const html = readFileSync(path, "utf8");
        return {
          name,
          hasName: html.includes('id="gate-name"'),
          hasEmail: html.includes('id="gate-email"'),
          hasPhone: html.includes('id="gate-phone"'),
          sendsCopy: html.includes("/api/send-email"),
          booksReview: /href="\/book/.test(html),
        };
      }),
    ).toEqual(
      LIVE_ASSETS.map(([name]) => ({
        name,
        hasName: true,
        hasEmail: true,
        hasPhone: true,
        sendsCopy: true,
        booksReview: true,
      })),
    );
  });
});
