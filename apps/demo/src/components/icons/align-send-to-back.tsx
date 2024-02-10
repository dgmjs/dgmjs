import * as React from "react";
import type { IconProps } from "./types";

const SvgAlignSendToBack = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <rect
      x="6"
      y="4"
      width="9"
      height="9"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M11 13V18H20V9H15V13H11Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);
export default SvgAlignSendToBack;
