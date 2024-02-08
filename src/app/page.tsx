import { Box } from '@/ui/atoms/Box/Box';
import { Header } from '@/ui/atoms/Header/Header';

import type { Rack } from '@/types/types';
import { getListOfRacks } from '@/utils/machineTubes';

export default async function Home() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/tubes`);
  const data = await response.json();
  const racks = getListOfRacks(data.tubes);

  return (
    <div className="p-20">
      <Header text="List of racks" />
      <div className="mt-10 columns-3 gap-8">
        {racks.map((rack: Rack) => {
          const { id, tubes } = rack;
          return (
            <Box className="mb-8" key={rack.id}>
              <h2 className="mb-5 font-bold">Rack: {id}</h2>
              <ul>
                {tubes.map((tube) => {
                  const { id, name, company, district, visionDefect } = tube;
                  return (
                    <li key={id}>
                      {name} - {company} - {district} - {visionDefect}
                    </li>
                  );
                })}
              </ul>
            </Box>
          );
        })}
      </div>
    </div>
  );
}
