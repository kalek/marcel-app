interface BoxProps {
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

export const Box = ({ children, className, testId }: BoxProps) => {
  return (
    <div data-testid={testId} className={`rounded-lg border p-5 ${className}`}>
      {children}
    </div>
  );
};
