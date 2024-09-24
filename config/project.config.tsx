import type { Project as ProjectType } from "@/types/index.types";

const ProjectConfig: ProjectType[] = [
  {
    slug: "Token LaunchPad",
    title: "Token LaunchPad",
    description:
      "The token launchpad is a platform where users can easily create and launch their own tokens. With simple steps, creators can introduce their token on the Solana Blockchain. The platform ensures smooth, fast transactions and a user-friendly experience for the creators.",
    tags: ["SPL-Token", "Tailwind", "Next.js", "Web3", "Dapp"],
    date: "2024-08-25T00:00:00Z",
    body: "",
    image: "/TokenLaunchPad.png",
    imageDark: "",
    deploymentlink: "https://tokenlaunch.rudrkesar.engineer/",
    links: [
      { name: "Github", url: "https://github.com/Kesarrudr/token-launchpad" },
      { name: "Website", url: "https://tokenlaunch.rudrkesar.engineer/" },
    ],
  },
  {
    slug: "Solana Wallet",
    title: "Solana Wallet",
    description:
      "A Solana wallet where users can send SOL, request airdrops, and sign messages offers essential features for interacting with the Solana blockchain. Users can securely send and receive SOL tokens, request devnet airdrops for development or testing, and sign messages for verifying identity or authorizing transactions.",
    tags: [
      "@solana/Web3.js",
      "Wallet Integratin",
      "Blockchain",
      "Next.js",
      "Tailwindcss",
    ],
    date: "2024-09-04T00:00:00Z",
    body: "",
    image: "/SolWallet.png",
    imageDark: "",
    deploymentlink: "https://sol.rudrkesar.engineer/",
    links: [
      { name: "Github", url: "https://github.com/Kesarrudr/sol_wallet" },
      { name: "Website", url: "https://sol.rudrkesar.engineer/" },
    ],
  },
  {
    slug: "Wallet Generator",
    title: "Wallet Generator",
    description:
      "This wallet generator project allows users to generate wallets for Solana, Ethereum, and Bitcoin using a simple mnemonic phrase. It provides seamless multi-chain wallet generation without the hassle of manual key management.",
    tags: ["Solana", "blockchain", "Web3", "Decentralized Platform"],
    date: "2024-09-20T00:00:00Z",
    body: "",
    image: "/Wallet.png",
    imageDark: "",
    deploymentlink: "/",
    links: [
      {
        name: "Github",
        url: "https://github.com/Kesarrudr/crypto_wallet_generator-",
      },
      { name: "Website", url: "https://wallet.rudrkesar.engineer" },
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
    date: "2024-08-15T00:00:00Z",
    body: "",
    image: "/tradehub.jpg",
    imageDark: "/tradehub.jpg",
    deploymentlink: "/",
    links: [
      // { name: "Github", url: "" },
      // { name: "Website", url: "" },
    ],
  },
];

export default ProjectConfig;
