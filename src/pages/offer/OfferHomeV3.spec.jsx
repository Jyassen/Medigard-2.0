import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { GROWTH_VSL_WISTIA_ID, LOGO_VARIATION } from "../../constants/media";
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
    const { container } = renderV3();

    expect(
      screen.getByRole("heading", { level: 1, name: OFFER_V3.hero.headline }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Medicare Agency Owners - Growth Minded Operators"),
    ).toBeInTheDocument();
    expect(screen.getByTitle("See how Medigard works")).toBeInTheDocument();
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      GROWTH_VSL_WISTIA_ID,
    );
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
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("SETykFwwf8aabbIIsSUN"));
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("source=medigard_offer"));
    expect(
      screen.queryByRole("link", { name: /Open agency review calendar/i }),
    ).not.toBeInTheDocument();
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
    ).toHaveAttribute("href", "/offer/v3/privacy");
    expect(
      screen.queryByText("You do not have a lead problem."),
    ).not.toBeInTheDocument();
  });
});
