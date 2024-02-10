import type { IconProps } from "./types";

const SvgPaddingSmall = ({
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
      x="3"
      y="3"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M18 6H6V18H18V6Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeOpacity="0.5"
    />
  </svg>
);
export default SvgPaddingSmall;
