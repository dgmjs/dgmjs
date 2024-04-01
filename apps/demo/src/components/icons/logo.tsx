import type { IconProps } from "./types";

const SvgLogo = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path d="M20 8V16" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M4 8V16" stroke="currentColor" strokeWidth={strokeWidth} />
    <rect
      x="1"
      y="17"
      width="6"
      height="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="17"
      y="17"
      width="6"
      height="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="17"
      y="1"
      width="6"
      height="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="1"
      y="1"
      width="6"
      height="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path d="M4 14L14 4" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M6 18L18 6" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M10 20L20 10" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 4H16" stroke="currentColor" strokeWidth={strokeWidth} />
    <path d="M8 20H16" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);
export default SvgLogo;
