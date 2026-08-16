import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Hub from "./Hub";

describe("Hub", () => {
  test("routes each buyer to the correct Medigard system", () => {
    render(
      <MemoryRouter>
        <Hub />
      </MemoryRouter>,
    );

    expect(
      screen.getAllByRole("link").map((link) => ({
        label: link.textContent.trim(),
        href: link.getAttribute("href"),
      })),
    ).toEqual([
      { label: "Explore Growth", href: "/launch" },
      { label: "Explore T-65", href: "/leads/t65" },
      { label: "Explore Compliance", href: "/compliance" },
    ]);
  });

  test("frames Growth as Agency Scale Infrastructure instead of a lead system", () => {
    render(
      <MemoryRouter>
        <Hub />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Turn growth inputs into usable capacity.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Agency Scale Infrastructure")).toBeInTheDocument();
    expect(screen.queryByText("T-65 Lead System")).not.toBeInTheDocument();
    expect(screen.queryByText("Explore T-65 Leads")).not.toBeInTheDocument();
  });
});
