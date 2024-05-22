import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { createStarlightTypeDocPlugin } from "starlight-typedoc";
const [CoreStarlightTypeDoc, CoreTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();
const [ExportStarlightTypeDoc, ExportTypeDocSidebarGroup] =
  createStarlightTypeDocPlugin();

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "dgm.js",
      plugins: [
        // Generate the documentation.
        CoreStarlightTypeDoc({
          entryPoints: ["../../packages/core/src/index.ts"],
          tsconfig: "../../packages/core/tsconfig.json",
          output: "api-core",
          sidebar: {
            collapsed: true,
            label: "@dgmjs/core",
          },
          typeDoc: {
            gitRevision: "main",
          },
        }),
        ExportStarlightTypeDoc({
          entryPoints: ["../../packages/export/src/index.ts"],
          tsconfig: "../../packages/export/tsconfig.json",
          output: "api-export",
          sidebar: {
            collapsed: true,
            label: "@dgmjs/export",
          },
          typeDoc: {
            gitRevision: "main",
          },
        }),
      ],
      social: {
        github: "https://github.com/dgmjs/dgmjs",
        twitter: "https://twitter.com/dgm_sh",
        discord: "https://discord.gg/dA4RnpKrQ9",
      },
      sidebar: [
        {
          label: "Getting started",
          autogenerate: { directory: "getting-started" },
        },
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        {
          label: "@dgmjs/react",
          autogenerate: { directory: "api-react" },
        },
        CoreTypeDocSidebarGroup,
        ExportTypeDocSidebarGroup,
      ],
      customCss: [
        "./src/styles/globals.css",
        "@fontsource/inter/400.css",
        "@fontsource/inter/500.css",
        "@fontsource/inter/600.css",
        "@fontsource/inter/700.css",
        "@fontsource/inter/800.css",
        "@fontsource/ibm-plex-mono/400.css",
        "@fontsource/ibm-plex-mono/600.css",
      ],
      components: {
        Hero: "./src/components/Hero.astro",
        SiteTitle: "./src/components/SiteTitle.astro",
      },
    }),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
