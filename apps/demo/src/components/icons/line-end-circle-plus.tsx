import type { IconProps } from "./types";

const SvgLineEndCirclePlus = ({
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
      d="M4 12L21 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
    <circle
      cx="17"
      cy="12"
      r="4"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
    <path
      d="M17 8V16"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgLineEndCirclePlus;
