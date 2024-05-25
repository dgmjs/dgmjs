export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  social: {
    github: string;
    twitter: string;
    discord: string;
  };
  mainNav: {
    title: string;
    href: string;
    target?: string;
  }[];
};

export const siteConfig: SiteConfig = {
  name: "dgm.js",
  title: "An infinite canvas with smart shapes",
  description:
    "A multi-purpose infinite canvas library supporting smart shapes, real-time collaboration, hand-drawn styles, image exports, and more.",
  url: "https://dgmjs.dev",
  ogImage: "https://dgmjs.dev/og.jpg",
  social: {
    github: "https://github.com/dgmjs/dgmjs",
    twitter: "dgm_sh",
    discord: "https://discord.gg/S2qWnqFJG2",
  },
  mainNav: [
    {
      title: "Github",
      href: "https://github.com/dgmjs/dgmjs",
    },
    {
      title: "License",
      href: "/getting-started/license/",
    },
    {
      title: "Docs",
      href: "/getting-started/quick-start/",
    },
  ],
};
