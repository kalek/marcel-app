"use client";

import { ListRacks } from "@/components/ListRacks/ListRacks";
import type { Rack } from "@/types/types";
import { Loading } from "@/ui/atoms/Loading/Loading";
import { getListOfRacks } from "@/utils/machineTubes";
import { useEffect, useState } from "react";

export const Racks = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [racks, setRacks] = useState<Rack[] | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/tubes`,
        );
        const data = await response.json();
        const racks = getListOfRacks(data.tubes);
        setRacks(racks);
      } catch (error) {
        setError("Something went wrong");
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <h1 className="text-center text-red-500">{error}</h1>;
  }

  if (!racks.length) {
    return <h1>No racks found</h1>;
  }

  return (
    <div className="mt-10 columns-3 gap-8">
      <ListRacks racks={racks} />
    </div>
  );
};
