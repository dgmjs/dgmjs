export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  url: string;
  ogImage: string;
  social: {
    github: string;
    twitter: string;
  };
  mainNav: {
    title: string;
    href: string;
    target?: string;
  }[];
};

export const siteConfig: SiteConfig = {
  name: "DGM.js",
  title: "An infinite canvas with smart shapes",
  description:
    "A multi-purpose infinite canvas library supporting smart shapes, real-time collaboration, hand-drawn styles, image exports, and more.",
  url: "https://dgmjs.dev",
  ogImage: "https://dgmjs.dev/images/og.png",
  social: {
    github: "https://github.com/dgmjs/dgmjs",
    twitter: "dgm_sh",
  },
  mainNav: [
    {
      title: "Github",
      href: "https://github.com/dgmjs/dgmjs",
    },
    {
      title: "License",
      href: "/overview/license/",
    },
    {
      title: "Docs",
      href: "/overview/getting-started/",
    },
  ],
};
