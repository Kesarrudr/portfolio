import Image from "next/image";
import { cn } from "@/lib/utils";

type PictureProps = {
  image: string;
  imageDark?: string;
  quality?: number;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
};

export default function Picture({
  image,
  imageDark,
  quality,
  width,
  height,
  alt,
  className,
}: PictureProps) {
  return (
    <>
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        className={cn(imageDark ? "block dark:hidden" : "", className)}
        priority
        blurDataURL={image}
        placeholder="blur"
        quality={quality || 100}
      />
      {imageDark && (
        <Image
          src={imageDark}
          alt={alt}
          width={width}
          height={height}
          className={cn("hidden dark:block", className)}
          priority
          blurDataURL={imageDark}
          placeholder="blur"
          quality={quality || 100}
        />
      )}
    </>
  );
}
