import Image from "next/image";
import dimensions from "./image-dimensions.json";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

/** Preserve the whole interface and reserve its exact height before loading. */
export default function ScreenshotImage({ src, alt, sizes, priority = false }: Props) {
  const size = dimensions[src as keyof typeof dimensions];
  return (
    <Image
      src={src}
      alt={alt}
      width={size.width}
      height={size.height}
      sizes={sizes}
      priority={priority}
      className="screenshot-image"
    />
  );
}
