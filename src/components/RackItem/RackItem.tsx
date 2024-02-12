import { TubeItem } from "../TubeItem/TubeItem";
import { Tube } from "@/types/types";
import { Box } from "@/ui/atoms/Box/Box";

interface RackItemProps {
  index: number;
  tubes: Tube[];
}

export const RackItem = ({ index, tubes }: RackItemProps) => {
  return (
    <Box className="mb-8 overflow-hidden" testId="rack-item">
      <h2 className="mb-5 font-bold">Rack: {index + 1}</h2>
      <ul data-testid={`rack_${index}`}>
        {tubes.map((tube) => {
          const { id, age, name, company, district, visionDefect } = tube;
          return (
            <TubeItem
              key={id}
              name={name}
              company={company}
              district={district}
              visionDefect={visionDefect}
              age={age}
            />
          );
        })}
      </ul>
    </Box>
  );
};
