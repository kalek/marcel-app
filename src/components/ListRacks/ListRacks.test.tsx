import { ListRacks } from "./ListRacks";
import { render } from "@testing-library/react";
import React from "react";

describe("ListRacks", () => {
  const mockRacks = [
    {
      id: "rack1",
      tubes: [
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
      ],
      canAddTube: jest.fn(),
      addTube: jest.fn(),
    },
    {
      id: "rack2",
      tubes: [
        {
          id: "tube3",
          age: 25,
          name: "Tube 3",
          company: "Company C",
          district: "District 3",
          visionDefect: "None",
        },
        {
          id: "tube4",
          age: 40,
          name: "Tube 4",
          company: "Company D",
          district: "District 4",
          visionDefect: "None",
        },
      ],
      canAddTube: jest.fn(),
      addTube: jest.fn(),
    },
  ];

  test("renders TubeItems for each rack", () => {
    const { getByText } = render(<ListRacks racks={mockRacks} />);
    expect(getByText("Tube 1")).toBeInTheDocument();
    expect(getByText("Tube 2")).toBeInTheDocument();
    expect(getByText("Tube 3")).toBeInTheDocument();
    expect(getByText("Tube 4")).toBeInTheDocument();
  });

  test("renders correct number of RackItems", () => {
    const { getAllByTestId } = render(<ListRacks racks={mockRacks} />);
    const rackItems = getAllByTestId("rack-item");
    expect(rackItems).toHaveLength(2);
  });
});
