import { Racks } from "@/components/Racks/Racks";
import { Header } from "@/ui/atoms/Header/Header";

export default async function Home() {
  return (
    <div className="p-20">
      <Header text="List of racks" />
      <Racks />
    </div>
  );
}
