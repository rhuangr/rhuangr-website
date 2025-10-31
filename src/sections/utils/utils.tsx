interface highlightedTextProps {
  text: string;
  className?: string;
}

export const HighlightedText = ({ text, className }: highlightedTextProps) => {
  return (
    <span
      className={`inline-block ${className} mx-1.5 font-[500] bg-orange-500 hover:bg-orange-600 transform hover:rotate-3 px-1 transition-colors transition-transform duration-300`}
    >
      {text}
    </span>
  );
};
