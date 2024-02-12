import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  it("renders a header component", () => {
    const headerText = "Header text";
    render(<Header text={headerText}></Header>);
    const text = screen.getByText(headerText);
    expect(text).toBeInTheDocument();
  });
});
