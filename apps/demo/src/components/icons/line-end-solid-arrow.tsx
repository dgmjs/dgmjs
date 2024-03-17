import type { IconProps } from "./types";

const SvgLineEndSolidArrow = ({
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
      d="M3 12L20 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M20 12L16 8V16L20 12Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);
export default SvgLineEndSolidArrow;
