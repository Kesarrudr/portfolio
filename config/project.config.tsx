import type { Project as ProjectType } from "@/types/index.types";

const ProjectConfig: ProjectType[] = [
  {
    slug: "messenger",
    title: "MessageNow",
    description:
      "MessageNow is a messenger clone. The platform ensures instant communication with responsive design and robust authentication, providing users with confidence and trust in their digital interactions.",
    tags: ["MongoDB", "Tailwind", "Next.js", "Prisma", "NextAuth"],
    date: "2024-03-08T00:00:00Z",
    body: "",
    image: "/MessageApp.png",
    imageDark: "/MessageApp.png",
    deploymentlink: "https://messaging-app-drab.vercel.app/",
    links: [
      { name: "Github", url: "https://github.com/Kesarrudr/messaging_app" },
      { name: "Website", url: "https://messaging-app-drab.vercel.app/" },
    ],
  },
  {
    slug: "TradeHub",
    title: "TradeHub (InDev.)",
    description:
      "TradeHub is a centralized exchange platform designed for seamless trading of cryptocurrencies and stocks. The platform is engineered to handle high trading volumes, providing users with a reliable and intuitive trading experience.",
    tags: [
      "Postgres",
      "Redis",
      "React.js",
      "Next.js",
      "Prisma",
      "PubSubs",
      "WebSockets",
    ],
    date: "2024-07-15T00:00:00Z",
    body: "",
    image: "/tradehub.jpg",
    imageDark: "/tradehub.jpg",
    deploymentlink: "/",
    links: [
      // { name: "Github", url: "" },
      // { name: "Website", url: "" },
    ],
  },
  {
    slug: "CryptoLabeler",
    title: "CryptoLabeler (InDev.)",
    description:
      "CryptoLabeler is an innovative data labeling platform where users are rewarded with cryptocurrency for their contributions. Utilizing Solana for fast and low-cost transactions. The platform provides an engaging way for users to earn crypto.",
    tags: ["Solana", "blockchain", "Web3", "Decentralized Platform"],
    date: "2024-07-20T00:00:00Z",
    body: "",
    image: "/CryptoLabeler.jpg",
    imageDark: "/CryptoLabeler.jpg",
    deploymentlink: "/",
    links: [
      // { name: "Github", url: "" },
      // { name: "Website", url: "" },
    ],
  },
];

export default ProjectConfig;
