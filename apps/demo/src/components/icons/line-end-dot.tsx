import type { IconProps } from "./types";

const SvgLineEndDot = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      d="M4 12L20 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <circle cx="19" cy="12" r="3" fill="currentColor" />
  </svg>
);
export default SvgLineEndDot;
