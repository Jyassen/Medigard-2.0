import { render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import BookingWidget from "./BookingWidget";

describe("BookingWidget", () => {
  test("renders the configured calendar with an accessible title", () => {
    render(
      <MemoryRouter>
        <BookingWidget
          title="Growth infrastructure calendar"
          src="https://example.com/calendar?source=launch"
        />
      </MemoryRouter>,
    );

    const calendar = screen.getByTitle("Growth infrastructure calendar");
    expect(calendar).toHaveAttribute(
      "src",
      "https://example.com/calendar?source=launch",
    );
    expect(calendar).toHaveAttribute("allow", "payment");
    expect(calendar).toHaveClass("!h-[700px]");
    expect(calendar).not.toHaveClass("min-h-[1100px]");
  });

  test("sends a completed GHL booking to the funnel thank-you page", () => {
    render(
      <MemoryRouter initialEntries={["/embed"]}>
        <Routes>
          <Route
            path="/embed"
            element={
              <BookingWidget
                title="cal"
                src="https://api.leadconnectorhq.com/widget/booking/x"
                thankYouTo="/offer/v2/thank-you"
              />
            }
          />
          <Route
            path="/offer/v2/thank-you"
            element={<p>Watch this before the call</p>}
          />
        </Routes>
      </MemoryRouter>,
    );

    act(() => {
      window.dispatchEvent(
        new MessageEvent("message", {
          origin: "https://api.leadconnectorhq.com",
          data: ["msgsndr-booking-complete", { calendarId: "x" }],
        }),
      );
    });

    expect(screen.getByText("Watch this before the call")).toBeInTheDocument();
  });
});
