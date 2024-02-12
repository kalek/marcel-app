import type { Rack, Tube } from "@/types/types";
import { v4 } from "uuid";

const createRack = () => {
  const tubes: Tube[] = [];

  const canAddTube = (tube: Tube) => {
    return !tubes.some(
      (existingTube) =>
        existingTube.age === tube.age ||
        existingTube.company === tube.company ||
        existingTube.district === tube.district ||
        existingTube.visionDefect === tube.visionDefect,
    );
  };

  const addTube = (tube: Tube) => {
    if (canAddTube(tube)) {
      tubes.push(tube);
      return true;
    }
    return false;
  };

  return {
    id: v4(),
    tubes,
    canAddTube,
    addTube,
  };
};

export const getListOfRacks = (tubes: Tube[]) => {
  const racks: Rack[] = [];

  tubes.forEach((tube) => {
    let rack = racks.find((rack) => rack.canAddTube(tube));
    if (!rack) {
      rack = createRack();
      racks.push(rack);
    }
    rack.addTube(tube);
  });

  return racks;
};
