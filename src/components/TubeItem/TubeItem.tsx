interface TubeItemProps {
  name: string;
  company: string;
  district: string;
  visionDefect: string;
  age: number;
}

export const TubeItem = ({
  name,
  company,
  district,
  visionDefect,
  age,
}: TubeItemProps) => {
  return (
    <li className="flex gap-5">
      <span>{name}</span>
      <span>{company}</span>
      <span>{district}</span>
      <span>{visionDefect}</span>
      <span>{age}</span>
    </li>
  );
};
