import Image from "next/image";
import ProjectImage from "@/components/ProjectImage";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  "Art Direction",
  "Graphic Design",
  "Campaign Design",
  "Social Media Design",
  "Video Editing",
  "Motion Graphics",
  "Brand Consistency"
];

const campaigns = ["Come Journey With Us 2024", "Come Find Your Joy 2025"];

const keyVisuals = [
  {
    title: "Come Journey With Us",
    caption:
      "A destination-led key visual built around expressive brush typography, lifestyle photography, and clear campaign messaging.",
    src: "/sat kv1.jpg",
    alt: "South African Tourism Come Journey With Us key visual"
  },
  {
    title: "Come Find Your Joy",
    caption:
      "A bright campaign visual using travel photography, expressive type, destination context, and the South African Tourism brand system.",
    src: "/sat kv2.jpg",
    alt: "South African Tourism Come Find Your Joy key visual"
  },
  {
    title: "Campaign Extension",
    caption:
      "Additional key visual exploration for adapting the campaign look across outdoor, digital, and social placements.",
    src: "/sat kv 3.jpg",
    alt: "South African Tourism campaign extension key visual"
  }
];

const socialPosts = [
  "/sat social media 1.jpg",
  "/sat social media 2.jpg",
  "/sat social media 3.jpg",
  "/sat social media 4.jpg",
  "/sat social media 5.jpg",
  "/sat social media 6.jpg",
  "/sat social media 7.jpg",
  "/sat social media 8.jpg",
  "/sat social media 9.jpg"
];

const decisions = [
  {
    title: "Emotion-Led Campaign Language",
    copy: "The visual direction centered joy, discovery, and movement, using energetic photography and expressive typography to make each destination feel immediate."
  },
  {
    title: "Flexible Asset System",
    copy: "The campaign elements were structured to work across hero posters, social media posts, motion assets, and outdoor placements without losing brand consistency."
  },
  {
    title: "Destination Context",
    copy: "Location labels, campaign headlines, and photography treatments helped each asset communicate a specific travel moment while staying part of one campaign family."
  },
  {
    title: "Brand Integration",
    copy: "The South African Tourism identity was kept visible and consistent while allowing campaign typography, imagery, and color to carry the emotional tone."
  }
];

export default function SouthAfricanTourismCaseStudy() {
  return (
    <main className="bg-paper text-ink">
      <section
        data-nav-theme="dark"
        className="bg-ink px-5 pb-20 pt-36 text-bone md:px-8 md:pb-28 md:pt-44"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            Graphic Design Case Study
          </p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.94] text-balance md:text-8xl">
            South African Tourism Campaign Graphics
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            Creating campaign visuals, social media graphics, video assets, and a cohesive
            design language for South African Tourism’s 2024 and 2025 campaign rollouts.
          </p>
          <a
            href="https://www.behance.net/gallery/235717421/South-African-Tourism"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            View Behance Project
          </a>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-5 pb-16 text-bone md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <ProjectImage
            alt="South African Tourism campaign key visual"
            src="/sat kv1.jpg"
            priority
            tone="dark"
          />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <aside className="space-y-10">
            <MetaList title="My Role" items={roles} />
            <MetaList title="Campaigns" items={campaigns} />
          </aside>
          <div className="space-y-16">
            <CaseBlock title="Overview">
              <p>
                South African Tourism needed a cohesive set of creative assets for two
                campaign phases: “Come Journey With Us” in 2024 and “Come Find Your Joy”
                in 2025.
              </p>
              <p>
                My role covered art direction, graphic design, video editing, and campaign
                asset execution across digital, social, and outdoor-facing formats.
              </p>
              <p>
                The work focused on translating travel emotion into clear, flexible
                campaign visuals that could scale across multiple destinations and formats.
              </p>
            </CaseBlock>

            <CaseBlock title="Creative Direction">
              <p>
                The visual language paired high-energy destination photography with bold
                brush typography, crisp location labels, and South African Tourism brand
                placement.
              </p>
              <p>
                Yellow accents carried warmth and optimism, while the layout system kept
                messaging clear across hero posters, social posts, and motion-led assets.
              </p>
            </CaseBlock>
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="bg-charcoal px-5 py-24 text-bone md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Key Visuals"
            title="Hero campaign graphics designed for recognition and rollout."
            copy="The key visuals established the campaign tone before being extended into social, motion, and platform-specific assets."
            dark
          />
          <div className="grid gap-8">
            {keyVisuals.map((visual) => (
              <figure key={visual.title} className="grid gap-5 md:grid-cols-[1.35fr_0.65fr] md:items-end">
                <ProjectImage alt={visual.alt} src={visual.src} tone="dark" />
                <figcaption className="border-t border-bone/10 pt-5">
                  <h3 className="font-serif text-3xl text-bone">{visual.title}</h3>
                  <p className="mt-4 text-base leading-7 text-bone/62">{visual.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Social Media"
            title="Campaign posts built for fast recognition in-feed."
            copy="Portrait social assets extended the campaign system into destination-led posts with consistent type, image treatment, color, and logo placement."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {socialPosts.map((src, index) => (
              <figure
                key={src}
                className="overflow-hidden rounded-[8px] border border-ink/10 bg-ink/[0.035] p-2 shadow-[0_24px_70px_rgba(17,16,14,0.12)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-ink/5">
                  <Image
                    src={src}
                    alt={`South African Tourism social media campaign design ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Design System"
            title="A campaign language that could flex without feeling fragmented."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {decisions.map((decision) => (
              <article key={decision.title} className="border-t border-ink/12 pt-6">
                <h3 className="font-serif text-3xl">{decision.title}</h3>
                <p className="mt-4 text-base leading-7 text-ink/62">{decision.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        data-nav-theme="dark"
        className="bg-ink px-5 py-24 text-bone md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <CaseBlock title="Execution" dark>
            <p>
              The work moved from hero visual direction into practical asset production:
              adapting campaign elements for social media, campaign posters, video
              moments, and brand-led communication assets.
            </p>
            <p>
              Each format needed to preserve the campaign feeling while respecting
              placement constraints, legibility, and South African Tourism’s brand
              presence.
            </p>
          </CaseBlock>
          <CaseBlock title="Outcome" dark>
            <p>
              The final assets created a cohesive visual identity across tourism
              touchpoints and supported campaign rollout across digital, social, and
              outdoor platforms.
            </p>
            <p>
              The project demonstrates my ability to move beyond interface design into
              campaign storytelling, graphic systems, and production-ready visual assets.
            </p>
          </CaseBlock>
        </div>
      </section>
    </main>
  );
}

function MetaList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-ink/12 pt-5">
      <h2 className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-clay">{title}</h2>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/68">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseBlock({
  title,
  children,
  dark = false
}: {
  title: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <article>
      <h2 className={`mb-6 font-serif text-4xl md:text-5xl ${dark ? "text-bone" : "text-ink"}`}>
        {title}
      </h2>
      <div className={`space-y-5 text-lg leading-8 ${dark ? "text-bone/66" : "text-ink/64"}`}>
        {children}
      </div>
    </article>
  );
}
