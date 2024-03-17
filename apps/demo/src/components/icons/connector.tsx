import type { IconProps } from "./types";

const SvgConnector = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <circle
      cx="5"
      cy="19"
      r="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <circle
      cx="19"
      cy="5"
      r="2"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M7 17L17 7"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgConnector;
