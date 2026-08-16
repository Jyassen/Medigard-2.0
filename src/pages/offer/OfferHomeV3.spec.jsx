import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { LOGO_VARIATION } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { OFFER_V3 } from "../../offer/copyV3";
import OfferHomeV3 from "./OfferHomeV3";

function renderV3() {
  return render(
    <MemoryRouter initialEntries={[ROUTES.offerV3]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={ROUTES.offerV3} element={<OfferHomeV3 />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("OfferHomeV3", () => {
  test("uses the short-form LP chrome, VSL, and on-page review calendar", () => {
    renderV3();

    expect(
      screen.getByRole("heading", { level: 1, name: OFFER_V3.hero.headline }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Medicare Agency Owners - Growth Minded Operators"),
    ).toBeInTheDocument();
    expect(screen.getByTitle("See how Medigard works")).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: OFFER_V3.hero.cta })[0],
    ).toHaveAttribute("href", "#book");
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: OFFER_V3.booking.heading,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Open agency review calendar/i }),
    ).toHaveAttribute("href", expect.stringContaining("source=medigard_offer"));
    expect(
      screen.queryByRole("link", { name: /Book a Review/i }),
    ).not.toBeInTheDocument();
  }, 15000);

  test("keeps v3 inside the offer funnel and restates the system boundary", () => {
    renderV3();

    expect(
      screen.getAllByAltText("Medigard Growth + Compliance")[0],
    ).toHaveAttribute("src", LOGO_VARIATION);
    expect(screen.getByText(OFFER_V3.guarantee.heading)).toBeInTheDocument();
    expect(screen.getByText("Calendar Fill")).toBeInTheDocument();
    expect(screen.getByText("Layer 01 · Consumer growth")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Privacy Policy/i }),
    ).toHaveAttribute("href", ROUTES.offerPrivacy);
    expect(
      screen.queryByText("You do not have a lead problem."),
    ).not.toBeInTheDocument();
  });
});
