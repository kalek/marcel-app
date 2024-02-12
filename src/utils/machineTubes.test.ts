import { getListOfRacks } from "./machineTubes";

describe("getListOfRacks", () => {
  test("should return an empty array if no tubes are provided", () => {
    const result = getListOfRacks([]);
    expect(result).toEqual([]);
  });

  test("should return an array of racks with unique tubes", () => {
    const tubes = [
      {
        id: "1",
        age: 1,
        company: "A",
        district: "X",
        visionDefect: "A",
        name: "A",
      },
      {
        id: "2",
        age: 2,
        company: "B",
        district: "Y",
        visionDefect: "B",
        name: "B",
      },
      {
        id: "3",
        age: 1,
        company: "C",
        district: "Z",
        visionDefect: "C",
        name: "C",
      },
    ];

    const result = getListOfRacks(tubes);
    expect(result.length).toBe(2);
  });

  test("should create 2 racks if tube is duplicated", () => {
    const tubes = [
      {
        id: "1",
        age: 1,
        company: "A",
        district: "X",
        visionDefect: "A",
        name: "A",
      },
      {
        id: "1",
        age: 1,
        company: "A",
        district: "X",
        visionDefect: "A",
        name: "A",
      },
    ];

    const result = getListOfRacks(tubes);
    expect(result.length).toBe(2);
    expect(result[0].tubes.length).toBe(1);
    expect(result[1].tubes.length).toBe(1);
  });
});
