import { Box } from "./Box";
import { render, screen } from "@testing-library/react";

describe("Box component", () => {
  it("renders a box component", () => {
    const boxText = "Default box text";
    render(<Box>{boxText}</Box>);
    const text = screen.getByText(boxText);
    expect(text).toBeInTheDocument();
  });
});
