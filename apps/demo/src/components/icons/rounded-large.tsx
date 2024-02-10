import type { IconProps } from "./types";

const SvgRoundedLarge = ({
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
      stroke="currentColor"
      strokeWidth={strokeWidth}
      d="M2 9H5C10.5228 9 15 13.4772 15 19V22"
    />
  </svg>
);
export default SvgRoundedLarge;
