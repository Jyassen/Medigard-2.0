import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { LOGO_VARIATION, PRE_CALL_VSL_WISTIA_ID } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import OfferBooking from "./OfferBooking";
import OfferPrivacy from "./OfferPrivacy";
import OfferThankYou from "./OfferThankYou";
import OfferTerms from "./OfferTerms";

function renderOffer(path, Page) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={path} element={<Page />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("OfferBooking", () => {
  test("uses the export booking layout with a live calendar, not the compliance audit page", () => {
    renderOffer("/offer/book", OfferBooking);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: /See how Medigard can help your team\./,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Simple, practical agency review"),
    ).toBeInTheDocument();
    expect(screen.getByText("See how it works")).toBeInTheDocument();
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("R708RvYTDmq9qJnkD72t"));
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("source=medigard_offer"));
    expect(
      screen.queryByRole("link", { name: /Open agency review calendar/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Book Your Compliance", { exact: false }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Infrastructure Audit", { exact: false }),
    ).not.toBeInTheDocument();
  }, 15000);
});

describe("OfferThankYou", () => {
  test("confirms the agency review with the pre-call VSL directly under the headline", () => {
    const { container } = renderOffer("/offer/thank-you", OfferThankYou);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Your review is confirmed",
    });
    const hero = heading.closest(".thank-hero");
    const [icon, kicker, title, vsl, copy] = hero.children;
    expect(icon).toHaveClass("success-icon");
    expect(kicker).toHaveClass("eyebrow");
    expect(title.tagName).toBe("H1");
    expect(vsl).toHaveAttribute("id", "vsl");
    expect(copy).toHaveClass("hero-copy");
    expect(screen.getByText("Watch this before the call")).toBeInTheDocument();
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      PRE_CALL_VSL_WISTIA_ID,
    );
    expect(screen.getByText("Check Inbox")).toBeInTheDocument();
    expect(
      screen.getByText("How many active agents have open time", {
        exact: false,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Your audit session has been booked", {
        exact: false,
      }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("almost confirmed", { exact: false }),
    ).not.toBeInTheDocument();
  });

  test("keeps the v2 pre-call VSL inside the v2 theme after booking", () => {
    const { container } = renderOffer("/offer/v2/thank-you", OfferThankYou);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: "Your review is confirmed",
    });
    expect(heading.nextElementSibling).toHaveAttribute("id", "vsl");
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      PRE_CALL_VSL_WISTIA_ID,
    );
    expect(
      screen.getByRole("link", { name: /Back to Medigard/i }),
    ).toHaveAttribute("href", ROUTES.home);
    expect(
      screen.queryByRole("link", { name: /Book a Review/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("link", { name: /How it works/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Privacy Policy/i }),
    ).toHaveAttribute("href", ROUTES.privacy);
    expect(screen.getByRole("link", { name: /Terms/i })).toHaveAttribute(
      "href",
      ROUTES.terms,
    );
    expect(screen.getByRole("link", { name: /^Contact$/i })).toHaveAttribute(
      "href",
      ROUTES.contact,
    );
    expect(
      screen.queryByRole("link", { name: /^Compliance$/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Your audit session has been booked", {
        exact: false,
      }),
    ).not.toBeInTheDocument();
  });
});

describe("offer legal pages", () => {
  test("keep production legal entity copy inside the offer chrome", () => {
    renderOffer("/offer/privacy", OfferPrivacy);

    expect(
      screen.getAllByAltText("Medigard Growth + Compliance")[0],
    ).toHaveAttribute("src", LOGO_VARIATION);
    expect(
      screen.getAllByText(/Medigard Compliance Systems LLC/).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getAllByRole("link", { name: /Back home/i })[0],
    ).toHaveAttribute("href", ROUTES.offer);
  });

  test("terms stay on the offer funnel and do not promise production", () => {
    renderOffer("/offer/terms", OfferTerms);

    expect(
      screen.getByRole("heading", { level: 1, name: /Terms/ }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByRole("link", { name: /Privacy Policy/i })[0],
    ).toHaveAttribute("href", ROUTES.offerPrivacy);
  });
});
