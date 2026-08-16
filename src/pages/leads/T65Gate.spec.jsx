import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import T65Gate from "./T65Gate";

describe("T65Gate", () => {
  test("hands visitors to the separately deployed T-65 system", () => {
    render(
      <MemoryRouter>
        <T65Gate destination="https://t65.example.com" />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("link", { name: "Continue to T-65 guidance" }),
    ).toHaveAttribute(
      "href",
      "https://t65.example.com/?source=medigard_t65_handoff",
    );
  });
});
