import type React from "react";

interface ContentBlockProps {
  sideHeader: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ContentBlock({ sideHeader, children, className }: ContentBlockProps) {
  return (
    <div className={`flex w-full ${className} py-1`}>
      <h3 className="flex-shrink-0">{sideHeader}</h3>
      <div className="w-full">{children}</div>
    </div>
  );
}
