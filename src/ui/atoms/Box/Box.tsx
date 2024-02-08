interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

export const Box = ({ children, className }: BoxProps) => {
  return <div className={`p-5 border rounded-lg ${className}`}>{children}</div>;
};
