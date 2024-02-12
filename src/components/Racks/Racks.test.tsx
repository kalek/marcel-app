import { Racks } from "./Racks";
import { TUBES } from "@/app/api/tubes/mockData";
import { render, waitFor, screen } from "@testing-library/react";
import React from "react";

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
    } as Response);
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("Racks", () => {
  test("renders loading state initially", async () => {
    render(<Racks />);
    expect(screen.getByTestId("loading")).toBeInTheDocument();
    await waitFor(() => {});
  });

  test("renders Racks component with racks data", async () => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => ({ tubes: TUBES }),
    } as any);
    render(<Racks />);
    await waitFor(() => {});
    expect(screen.getAllByTestId("rack-item")).toHaveLength(3);
  });
});
