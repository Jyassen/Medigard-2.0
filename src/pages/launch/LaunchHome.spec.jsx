import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { GROWTH } from "../../growth/copy";
import LaunchHome from "./LaunchHome";

function renderHome() {
  return render(
    <MemoryRouter>
      <LaunchHome />
    </MemoryRouter>,
  );
}

describe("LaunchHome", () => {
  test("opens on the order-of-operations thesis, not a lead-generation headline", () => {
    renderHome();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /You do not have a lead problem\.\s*You have an order-of-operations problem\./,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Fill Your Team's Calendar With Leads", {
        exact: false,
      }),
    ).not.toBeInTheDocument();
  });

  test("names the Forced Choice Trap and the four Growth Order stages", () => {
    renderHome();

    expect(screen.getByText(GROWTH.enemy)).toBeInTheDocument();
    expect(screen.getByText(GROWTH.tagline)).toBeInTheDocument();
    expect(
      GROWTH.stages.map((stage) => screen.getByText(stage.title).textContent),
    ).toEqual(GROWTH.stages.map((stage) => stage.title));
  });

  test("qualifies with purchase signals and disqualifies cheap-lead buyers", () => {
    renderHome();

    expect(
      screen.getByText("A signed agent is not capacity. A working agent is."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Buyers shopping the cheapest possible lead source"),
    ).toBeInTheDocument();
  });

  test("embeds the live growth calendar on the page", () => {
    renderHome();

    expect(
      screen.getByTitle("Schedule a Medigard Growth Order review"),
    ).toHaveAttribute("src", expect.stringContaining("SETykFwwf8aabbIIsSUN"));
  });
});
