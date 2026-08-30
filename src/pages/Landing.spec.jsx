import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { ROUTES } from "../constants/routes";
import Landing from "./Landing";

function renderLanding() {
  return render(
    <MemoryRouter initialEntries={[ROUTES.complianceV2]}>
      <Routes>
        <Route path={ROUTES.complianceV2} element={<Landing />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("Landing", () => {
  test("keeps the original VSL homepage at /compliance/v2 with legal links", () => {
    const { container } = renderLanding();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /One Missed Violation Costs \$250K/,
      }),
    ).toBeInTheDocument();
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      "0pdsraeq1g",
    );
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: /Book Your Compliance Infrastructure Audit/,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Schedule a Medigard compliance audit"),
    ).toHaveAttribute("src", expect.stringContaining("R708RvYTDmq9qJnkD72t"));
    expect(
      screen.getAllByRole("link", { name: /Privacy Policy/i })[0],
    ).toHaveAttribute("href", ROUTES.privacy);
    expect(screen.getAllByRole("link", { name: /Terms/i })[0]).toHaveAttribute(
      "href",
      ROUTES.terms,
    );
    expect(
      screen.queryByRole("link", { name: /^T-65$/i }),
    ).not.toBeInTheDocument();
  });
});
