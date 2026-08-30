import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { LOGO_VARIATION } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { OFFER_V4 } from "../../offer/copyV4";
import OfferHomeV4 from "./OfferHomeV4";

function renderV4() {
  return render(
    <MemoryRouter initialEntries={[ROUTES.offerV4]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={ROUTES.offerV4} element={<OfferHomeV4 />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("OfferHomeV4", () => {
  test("uses the Oneleet-style chrome, VSL, and on-page review calendar", () => {
    renderV4();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${OFFER_V4.hero.headline} ${OFFER_V4.hero.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(
      screen
        .getAllByRole("link", { name: OFFER_V4.hero.cta })
        .map((el) => el.getAttribute("href")),
    ).toEqual(["/offer/v4#book", "#book", "#book"]);
    expect(screen.getByTitle("See how Medigard works")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        level: 2,
        name: OFFER_V4.booking.heading,
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
  }, 15000);

  test("keeps v4 inside the offer funnel and restates the system boundary", () => {
    renderV4();

    expect(
      screen.getAllByAltText("Medigard Growth + Compliance")[0],
    ).toHaveAttribute("src", LOGO_VARIATION);
    expect(screen.getByText(OFFER_V4.guarantee.heading)).toBeInTheDocument();
    expect(screen.getByText("Calendar fill")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Privacy Policy/i }),
    ).toHaveAttribute("href", "/offer/v4/privacy");
    expect(
      screen.queryByText("You do not have a lead problem."),
    ).not.toBeInTheDocument();
  });
});
