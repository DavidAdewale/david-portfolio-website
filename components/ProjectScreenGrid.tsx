import ProjectImage from "./ProjectImage";

export type ProjectScreen = {
  title: string;
  caption: string;
  src: string;
  alt: string;
  liveUrl?: string;
};

type ProjectScreenGridProps = {
  screens: ProjectScreen[];
  dark?: boolean;
};

export default function ProjectScreenGrid({
  screens,
  dark = false
}: ProjectScreenGridProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {screens.map((screen) => {
        const image = (
          <ProjectImage alt={screen.alt} src={screen.src} tone={dark ? "dark" : "light"} />
        );

        return (
          <figure key={screen.title} className="space-y-4">
            {screen.liveUrl ? (
              <a
                href={screen.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="block transition duration-500 hover:scale-[0.985]"
              >
                {image}
              </a>
            ) : (
              image
            )}
            <figcaption className={`border-t pt-4 ${dark ? "border-bone/10" : "border-ink/10"}`}>
              <h3 className={`font-serif text-3xl ${dark ? "text-bone" : "text-ink"}`}>
                {screen.title}
              </h3>
              <p className={`mt-3 text-base leading-7 ${dark ? "text-bone/62" : "text-ink/62"}`}>
                {screen.caption}
              </p>
              {screen.liveUrl ? (
                <a
                  href={screen.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex text-sm font-semibold text-gold transition hover:text-bone"
                >
                  Open page
                </a>
              ) : null}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
