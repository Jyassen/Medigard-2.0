import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { GROWTH_VSL_WISTIA_ID } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { OFFER_V2 } from "../../offer/copyV2";
import OfferHomeV2 from "./OfferHomeV2";

function renderV2(path = ROUTES.home) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={ROUTES.home} element={<OfferHomeV2 />} />
          <Route path={ROUTES.offerV2} element={<OfferHomeV2 />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("OfferHomeV2", () => {
  test("plays the live Wistia VSL and embeds the GHL review calendar on the page", () => {
    const { container } = renderV2();

    const heading = screen.getByRole("heading", {
      level: 1,
      name: `${OFFER_V2.hero.headline} ${OFFER_V2.hero.headlineAccent}`,
    });
    const hero = heading.closest(".hero");
    expect(hero).toHaveClass("hero-v2");
    const [kicker, title, vsl, proof, copy, actions] = hero.children;
    expect(kicker).toHaveClass("eyebrow");
    expect(title.tagName).toBe("H1");
    expect(vsl).toHaveAttribute("id", "vsl");
    expect(proof).toHaveClass("proof-strip");
    expect(proof).toHaveTextContent("Built in 60 days");
    expect(proof).toHaveTextContent("Full calendars");
    expect(copy).toHaveClass("hero-copy");
    expect(actions).toHaveClass("hero-actions");
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      GROWTH_VSL_WISTIA_ID,
    );
    expect(
      screen.getAllByRole("link", { name: /Book Your Review/i })[0],
    ).toHaveAttribute("href", "#book");
    expect(
      screen.getByRole("link", { name: /Privacy Policy/i }),
    ).toHaveAttribute("href", ROUTES.privacy);
    expect(screen.getByRole("link", { name: /Terms/i })).toHaveAttribute(
      "href",
      ROUTES.terms,
    );
    expect(screen.getByRole("link", { name: /^Compliance$/i })).toHaveAttribute(
      "href",
      ROUTES.complianceV2,
    );
    expect(
      screen.queryByRole("link", { name: /^T-65$/i }),
    ).not.toBeInTheDocument();
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

  test("keeps the /offer/v2 URL as the same homepage", () => {
    renderV2(ROUTES.offerV2);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${OFFER_V2.hero.headline} ${OFFER_V2.hero.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /^Compliance$/i })).toHaveAttribute(
      "href",
      ROUTES.complianceV2,
    );
    expect(
      screen.queryByRole("link", { name: /^T-65$/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Privacy Policy/i }),
    ).toHaveAttribute("href", ROUTES.privacy);
  });
});
