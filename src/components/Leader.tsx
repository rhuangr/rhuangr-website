interface LeaderProps {
  className?: string;
}

export const Leader = ({ className }: LeaderProps) => {
  return (
    <div
      className={`flex-1 ml-3 mt-0.5 h-px ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(to right, #fff9f265 0 4px, transparent 4px 7px)"
      }}
    ></div>
  );
};
