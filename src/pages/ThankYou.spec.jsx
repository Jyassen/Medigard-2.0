import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, test } from "vitest";
import { FUNNEL_IDS, FUNNEL_STORAGE_KEY } from "../constants/funnels";
import { ROUTES } from "../constants/routes";
import ThankYou from "./ThankYou";

describe("ThankYou", () => {
  test("reroutes a stored offer v2 booking off the shared GHL thank-you URL", () => {
    sessionStorage.setItem(FUNNEL_STORAGE_KEY, FUNNEL_IDS.offerV2);

    render(
      <MemoryRouter initialEntries={["/thank-you"]}>
        <Routes>
          <Route path="/thank-you" element={<ThankYou />} />
          <Route
            path={ROUTES.offerV2ThankYou}
            element={<p>Watch this before the call</p>}
          />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText("Watch this before the call")).toBeInTheDocument();
    expect(
      screen.queryByText("Your audit session has been booked", {
        exact: false,
      }),
    ).not.toBeInTheDocument();
  });
});
