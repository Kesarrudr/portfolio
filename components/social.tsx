import { Button } from "@/components/ui/button";
import { IconMap } from "./icon-map";
import PortfolioConfig from "@/config/portfolio.confg";

export const Socials = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button className="shadow-none hover:bg-background hover:text-primary border-[0.3px] border-transparent hover:border-b-4 hover:border-primary/30 active:border-b transition-all">
        <a href="https://cal.com/kesar" target="_blank">
          Schedule a call
        </a>
      </Button>
      <Button
        variant="outline"
        className="active:border-b active:scale-[0.97] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
      >
        <a href={PortfolioConfig.resume} target="_blank">
          Resume
        </a>
      </Button>
      {Object.keys(PortfolioConfig.links).map((key: string, index: number) => {
        const link =
          PortfolioConfig.links[key as keyof typeof PortfolioConfig.links];
        return (
          <Button
            key={key}
            size="icon"
            variant="outline"
            className="active:border-b active:scale-[0.97] hover:border-[0.2px] hover:border-b-4 hover:border-primary/30 hover:bg-background shadow-none transition-all duration-100"
            asChild
          >
            <a href={link} target="_blank">
              {IconMap[key as keyof typeof IconMap]}
              <span className="sr-only">{`${key} - ${link}`}</span>
            </a>
          </Button>
        );
      })}
    </div>
  );
};
