import type { IconProps } from "./types";

const SvgRoughLow = ({ size = 24, strokeWidth = 2, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      d="M5.32539 5.27676C7.2374 5.13934 13.2084 5.34285 19.7981 4.34163M4 4.36898C7.04257 5.34561 9.92542 4.45436 19.2311 4.88569M19.6559 4C20.4139 9.98657 17.6052 16.5031 18.4746 20M18.7392 4.81046C18.7037 7.13086 18.9797 10.1263 19.0166 19.4894M20 19.3694C13.0263 18.5578 9.57997 18.3568 4.00698 18.2357M18.9725 18.7344C14.6882 19.5741 8.58317 18.9519 4.84345 18.4198M4.42676 19.1508C4.55686 13.2111 4.26162 9.5677 5.32563 6.14421M4.17084 19.5383C4.49928 14.2851 3.76416 9.87086 4.73669 4.42866"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    />
  </svg>
);

export default SvgRoughLow;
