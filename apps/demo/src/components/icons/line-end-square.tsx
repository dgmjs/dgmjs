import type { IconProps } from "./types";

const SvgLineEndSquare = ({
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
    <path
      d="M3 12L13 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <rect
      x="13"
      y="8"
      width="8"
      height="8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);
export default SvgLineEndSquare;
