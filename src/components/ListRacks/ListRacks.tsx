import { RackItem } from "@/components/RackItem/RackItem";
import type { Rack } from "@/types/types";

interface ListRacksProps {
  racks: Rack[];
}

export const ListRacks = ({ racks }: ListRacksProps) => {
  return (
    <>
      {racks.map((rack: Rack, index) => (
        <RackItem key={rack.id} index={index} tubes={rack.tubes} />
      ))}
    </>
  );
};
