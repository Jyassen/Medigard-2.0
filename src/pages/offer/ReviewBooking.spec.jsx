import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import OfferLayout from "../../components/offer/OfferLayout";
import { PRE_CALL_VSL_WISTIA_ID } from "../../constants/media";
import { ROUTES } from "../../constants/routes";
import { OFFER_V2 } from "../../offer/copyV2";
import OfferThankYou from "./OfferThankYou";
import ReviewBooking from "./ReviewBooking";

function renderBook() {
  return render(
    <MemoryRouter initialEntries={[ROUTES.book]}>
      <Routes>
        <Route element={<OfferLayout />}>
          <Route path={ROUTES.book} element={<ReviewBooking />} />
          <Route path={ROUTES.offerV2ThankYou} element={<OfferThankYou />} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

describe("ReviewBooking", () => {
  test("keeps the review calendar as the page, with a headline and the offer rails beside it", () => {
    renderBook();

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: `${OFFER_V2.reviewBook.headline} ${OFFER_V2.reviewBook.headlineAccent}`,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute("src", expect.stringContaining("SETykFwwf8aabbIIsSUN"));
    expect(
      screen.getByTitle("Schedule a Medigard agency review"),
    ).toHaveAttribute(
      "src",
      expect.stringContaining("source=medigard_review_booking"),
    );
    expect(
      OFFER_V2.how.steps.map(
        (step) => screen.getByText(step.title).textContent,
      ),
    ).toEqual(OFFER_V2.how.steps.map((step) => step.title));
    expect(
      screen.queryByRole("heading", {
        level: 1,
        name: `${OFFER_V2.hero.headline} ${OFFER_V2.hero.headlineAccent}`,
      }),
    ).not.toBeInTheDocument();
    expect(screen.queryByTitle(/Wistia|VSL|See how/i)).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Back home/i })).toHaveAttribute(
      "href",
      ROUTES.home,
    );
  });

  test("sends a completed booking to the pre-call VSL thank-you page", () => {
    const { container } = renderBook();

    act(() => {
      window.dispatchEvent(
        new MessageEvent("message", {
          origin: "https://api.leadconnectorhq.com",
          data: [
            "msgsndr-booking-complete",
            { calendarId: "SETykFwwf8aabbIIsSUN" },
          ],
        }),
      );
    });

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: "Your review is confirmed",
      }),
    ).toBeInTheDocument();
    expect(screen.getByText("Watch this before the call")).toBeInTheDocument();
    expect(container.querySelector("wistia-player")).toHaveAttribute(
      "media-id",
      PRE_CALL_VSL_WISTIA_ID,
    );
  });
});
