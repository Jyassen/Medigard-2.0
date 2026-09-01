import { readFileSync } from "node:fs";
import { describe, expect, test } from "vitest";

const LIVE_ASSETS = [
  ["scorecard", "public/scorecard.html"],
  ["capacity", "public/capacity.html"],
  ["bottleneck", "public/bottleneck.html"],
];

describe("live growth assets", () => {
  test("each tool captures the lead first, emails their answers, and books a Growth Infrastructure Review", () => {
    expect(
      LIVE_ASSETS.map(([name, path]) => {
        const html = readFileSync(path, "utf8");
        const leadAt = html.indexOf('id="screen-lead"');
        const questionsAt = html.indexOf('id="screen-q"');
        return {
          name,
          hasName: html.includes('id="gate-name"'),
          hasEmail: html.includes('id="gate-email"'),
          hasPhone: html.includes('id="gate-phone"'),
          captureBeforeQuestions: leadAt !== -1 && questionsAt !== -1 && leadAt < questionsAt,
          startOpensCapture: /function start\(\)\{[^}]*show\('screen-lead'\)/.test(html),
          emailsAnswers: html.includes("ANSWERS"),
          sendsCopy: html.includes("/api/send-email"),
          booksReview:
            /href="\/book/.test(html) &&
            html.includes("Book a Growth Infrastructure Review"),
          isQuestionFlow: html.includes('id="screen-q"') && html.includes('class="option"'),
        };
      }),
    ).toEqual(
      LIVE_ASSETS.map(([name]) => ({
        name,
        hasName: true,
        hasEmail: true,
        hasPhone: true,
        captureBeforeQuestions: true,
        startOpensCapture: true,
        emailsAnswers: true,
        sendsCopy: true,
        booksReview: true,
        isQuestionFlow: true,
      })),
    );
  });
});
