interface HeaderProps {
  text: string;
}

export const Header = ({ text }: HeaderProps) => {
  return <div className="text-3xl font-semibold">{text}</div>;
};
