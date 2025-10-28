import type React from "react";

interface ContentBlockProps {
  sideHeader: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ sideHeader, children, className }: ContentBlockProps) {
  return (
    <div className={`grid grid-cols-[var(--grid-side-header-width)_1fr] gap-[var(--grid-column-gap)] w-full ${className} py-1 md:grid-cols-[var(--grid-side-header-width)_1fr] max-md:grid-cols-1 max-md:gap-y-2`}>
      <h3 className="flex-shrink-0">{sideHeader}</h3>
      <div className="w-full">{children}</div>
    </div>
  );
}
