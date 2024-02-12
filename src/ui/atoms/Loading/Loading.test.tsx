import { Loading } from "./Loading";
import { render, screen } from "@testing-library/react";

describe("Loading component", () => {
  it("renders a loading component", () => {
    const loadingText = "Loading...";
    render(<Loading />);
    const text = screen.getByText(loadingText);
    expect(text).toBeInTheDocument();
  });
});
