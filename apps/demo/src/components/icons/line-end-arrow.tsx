import type { IconProps } from "./types";

const SvgLineEndArrow = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 12L20 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M12 6L20 12L12 18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);
export default SvgLineEndArrow;
