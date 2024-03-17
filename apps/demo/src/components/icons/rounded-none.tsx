import type { IconProps } from "./types";

const SvgRoundedNone = ({
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
    <path stroke="currentColor" strokeWidth={strokeWidth} d="M2 9h13v13" />
  </svg>
);
export default SvgRoundedNone;
