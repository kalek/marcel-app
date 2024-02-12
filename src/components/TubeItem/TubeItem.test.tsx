import { TubeItem } from "./TubeItem";
import { render } from "@testing-library/react";
import React from "react";

describe("TubeItem Component", () => {
  const props = {
    name: "John Doe",
    company: "ABC Company",
    district: "XYZ District",
    visionDefect: "None",
    age: 30,
  };

  it("renders TubeItem correctly", () => {
    const { getByText } = render(<TubeItem {...props} />);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.company)).toBeInTheDocument();
    expect(getByText(props.district)).toBeInTheDocument();
    expect(getByText(props.visionDefect)).toBeInTheDocument();
    expect(getByText(props.age.toString())).toBeInTheDocument();
  });
});
