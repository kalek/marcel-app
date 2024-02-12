import { RackItem } from "./RackItem";
import { render } from "@testing-library/react";
import React from "react";

describe("RackItem", () => {
  const mockTubes = [
    {
      id: "tube1",
      age: 30,
      name: "Tube 1",
      company: "Company A",
      district: "District 1",
      visionDefect: "None",
    },
    {
      id: "tube2",
      age: 35,
      name: "Tube 2",
      company: "Company B",
      district: "District 2",
      visionDefect: "None",
    },
  ];

  test("renders RackItem with correct title", () => {
    const { getByText } = render(<RackItem index={0} tubes={mockTubes} />);
    expect(getByText("Rack: 1")).toBeInTheDocument();
  });

  test("renders correct number of RackItems", () => {
    const { getAllByTestId } = render(<RackItem index={0} tubes={mockTubes} />);
    const rackItems = getAllByTestId("rack-item");
    expect(rackItems).toHaveLength(1);
  });
});
