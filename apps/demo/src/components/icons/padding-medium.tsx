import type { IconProps } from "./types";

const SvgPaddingMedium = ({
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
      d="M17 7H7V17H17V7Z"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth={strokeWidth}
    />
  </svg>
);
export default SvgPaddingMedium;
