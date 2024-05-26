import starlightPlugin from "@astrojs/starlight-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter"],
        mono: ["IBM Plex Mono"],
        hand: ["Gloria Hallelujah"],
      },
    },
  },
  plugins: [starlightPlugin()],
};
