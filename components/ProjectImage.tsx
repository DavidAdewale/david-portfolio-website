import ScreenshotImage from "./ScreenshotImage";

type ProjectImageProps = {
  alt: string;
  src: string;
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export default function ProjectImage({
  alt,
  src,
  className = "",
  priority = false,
  tone = "light"
}: ProjectImageProps) {
  return (
    <div
      className={`self-start overflow-hidden rounded-[8px] border p-2 shadow-[0_28px_90px_rgba(17,16,14,0.14)] ${
        tone === "dark" ? "border-bone/10 bg-bone/[0.045]" : "border-ink/10 bg-ink/[0.035]"
      } ${className}`}
    >
      <ScreenshotImage
        src={src}
        alt={alt}
        priority={priority}
        sizes="(min-width: 768px) 56vw, 100vw"
      />
    </div>
  );
}
