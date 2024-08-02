type Site = {
  name: string;
  title: string;
  description: string;
  siteUrl: string;
  links: {
    x: string;
    github: string;
  };
};

type Portfolio = {
  name: string;
  tagline: string;
  bio: string;
  resume: string;
  links: {
    github?: string;
    twitter?: string;
    mail?: string;
    discord?: string;
    linkedin?: string;
  };
};

type NavItem = {
  title: string;
  url: string;
};

type defaultProfile = {
  name: string;
  url?: string;
  image?: string;
};

type Experience = {
  title: string;
  employmentType: string;
  company: {
    name: string;
    url: string;
  };
  location: defaultProfile;
  start: string;
  end: string;
  description: string[];
};

type Project = {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
  body: string;
  image: string;
  imageDark?: string;
  deploymentlink: string;
  links: Array<{
    name: string;
    url: string;
  }>;
};
export type { Site, Portfolio, NavItem, Experience, Project };
