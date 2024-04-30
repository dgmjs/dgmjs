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
  title: "dgm.js | An extensible diagramming library for the web",
  description: "An extensible diagramming library for the web",
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
      href: "/license",
    },
    {
      title: "Docs",
      href: "https://docs.dgmjs.dev",
      target: "_blank",
    },
  ],
};
