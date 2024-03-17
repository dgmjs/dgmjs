import type { IconProps } from "./types";

const SvgLineCurve = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      d="M18.7538 19.4308C18.1351 8.65773 12.1567 -3.01076 4 11"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
    />
  </svg>
);
export default SvgLineCurve;
