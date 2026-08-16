import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import BookingWidget from "./BookingWidget";

describe("BookingWidget", () => {
  test("renders the configured calendar with an accessible title", () => {
    render(
      <BookingWidget
        title="Growth infrastructure calendar"
        src="https://example.com/calendar?source=launch"
      />,
    );

    expect(screen.getByTitle("Growth infrastructure calendar")).toHaveAttribute(
      "src",
      "https://example.com/calendar?source=launch",
    );
  });
});
