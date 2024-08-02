import siteConfig from "@/config/site.config";
import PortfolioConfig from "@/config/portfolio.confg";
import { Socials } from "./social";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="text-2xl font-extrabold font-heading leading-[1.15] sm:text-4xl ">
          {PortfolioConfig.name}
        </h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{PortfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{PortfolioConfig.bio}</p>
      <Socials />
      <div className="mt-16 space-y-2 rounded-lg border-l-4 py-2 pl-4 max-w-2xl text-muted-foreground">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React, Next.js, Tailwindcss, Framer motion
        </p>
        <p>
          <span className="font-semibold text-primary/90">Backend:</span>{" "}
          Hono.js, Express.js, Fastapi, Fiber, Mux, Go, Rust, DataBases
        </p>
        <p>
          <span className="font-semibold text-primary/90">Mobile:</span> React
          Native
        </p>
        <p>
          <span className="font-semibold text-primary/90">Web3:</span> Solana,
          Anchor, Solana Wallet Provider, Solana Mobile Wallet Provider
        </p>
        <p>
          <span className="font-semibold text-primary/90">DevOps:</span> CI/CD
          pipeline, Containerization, Kubernetes, Monitoring
        </p>
      </div>
    </>
  );
}
