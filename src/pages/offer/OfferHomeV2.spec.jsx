import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { GROWTH_VSL_WISTIA_ID } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { OFFER_V2 } from "../../offer/copyV2";
import OfferHomeV2 from "./OfferHomeV2";

function renderV2() {
  return render(
    <MemoryRouter initialEntries={[ROUTES.offerV2]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={ROUTES.offerV2} element={<OfferHomeV2 />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("OfferHomeV2", () => {
  test("plays the live Wistia VSL and embeds the GHL review calendar on the page", () => {
    const { container } = renderV2();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${OFFER_V2.hero.headline} ${OFFER_V2.hero.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      GROWTH_VSL_WISTIA_ID,
    );
    expect(
      screen.getAllByRole("link", { name: /Book Your Review/i })[0],
    ).toHaveAttribute("href", "#book");
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: `${OFFER_V2.booking.heading} ${OFFER_V2.booking.headingAccent}`,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("R708RvYTDmq9qJnkD72t"));
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("source=medigard_offer"));
    expect(
      screen.queryByRole("link", { name: /Open agency review calendar/i }),
    ).not.toBeInTheDocument();
  }, 15000);
});
