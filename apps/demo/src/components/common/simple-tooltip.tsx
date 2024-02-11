import React from "react";

interface SimpleTooltipProps {
  content: React.ReactNode;
  sideOffset?: number;
  children: React.ReactNode;
}

export function SimpleTooltip({
  content,
  sideOffset = 4,
  children,
}: SimpleTooltipProps) {
  return <span>{children}</span>;
}
