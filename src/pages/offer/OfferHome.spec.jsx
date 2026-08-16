import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { LOGO_VARIATION } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import OfferHome from "./OfferHome";

function renderHome() {
  return render(
    <MemoryRouter>
      <OfferHome />
    </MemoryRouter>,
  );
}

describe("OfferHome", () => {
  test("opens on the export thesis and books into the offer funnel", () => {
    renderHome();

    expect(screen.getByText("For Medicare agency owners")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /Scale your Medicare agency\s*without building another department\./,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/not another lead package/i).length,
    ).toBeGreaterThan(0);
    expect(screen.getByText("Calendar fill")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Book Your Medigard Review/i })[0],
    ).toHaveAttribute("href", ROUTES.offerBook);
    expect(
      screen.queryByText("You do not have a lead problem.", { exact: false }),
    ).not.toBeInTheDocument();
  });

  test("speaks the VSL reframe, Day 30, and compliance boundaries in plain ICP language", () => {
    renderHome();

    expect(screen.getAllByText("THE TRAP").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(
        "You didn’t build a growth engine. You built another department.",
      ).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByText("Interested. Joined. Active. Not a production promise."),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Buyers shopping another lead package"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /See T-65 guidance/i }),
    ).toHaveAttribute("href", ROUTES.t65);
    expect(
      screen.getByRole("link", { name: /See Compliance for agencies/i }),
    ).toHaveAttribute("href", ROUTES.compliance);
  });
});

describe("offer logo", () => {
  test("uses the Medigard logo variation in the offer chrome", () => {
    render(
      <MemoryRouter initialEntries={["/offer"]}>
        <Routes>
          <Route element={<OfferLayout />}>
            <Route path="/offer" element={<OfferHome />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(
      screen.getAllByAltText("Medigard Growth + Compliance")[0],
    ).toHaveAttribute("src", LOGO_VARIATION);
  });
});
