import type { IconProps } from "./types";

const SvgAlignBringForward = ({
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
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M11 13V18H20V9H15V13H11Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M9 22L2 15"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <path
      d="M2 18V15H5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgAlignBringForward;
