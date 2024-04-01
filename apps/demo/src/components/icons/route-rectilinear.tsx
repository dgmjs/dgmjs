import type { IconProps } from "./types";

const SvgRouteRectilinear = ({
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
      x="15"
      y="3"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <rect
      x="5"
      y="17"
      width="4"
      height="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path d="M17 8V12H7V16" stroke="currentColor" strokeWidth={strokeWidth} />
  </svg>
);
export default SvgRouteRectilinear;
