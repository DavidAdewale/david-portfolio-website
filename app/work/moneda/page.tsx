import ProjectImage from "@/components/ProjectImage";
import ProjectScreenGrid from "@/components/ProjectScreenGrid";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  "Product Design",
  "UX/UI Design",
  "Website Design",
  "Communication Systems",
  "Information Architecture",
  "Presentation Systems",
  "Brand Direction"
];

const objectives = [
  "Improve communication clarity",
  "Strengthen institutional credibility",
  "Simplify information hierarchy",
  "Create scalable communication systems",
  "Improve cross-platform consistency"
];

const screens = [
  {
    title: "Website Homepage",
    caption:
      "A redesigned public-facing homepage focused on institutional credibility, clearer positioning, and stronger investor-facing presentation.",
    src: "/moneda-homepage.png",
    alt: "Moneda homepage screenshot",
    liveUrl: "https://www.moneda.africa/"
  },
  {
    title: "Capital Page",
    caption:
      "A structured capital page designed to communicate investment focus areas, institutional messaging, and strategic clarity.",
    src: "/moneda-capital.png",
    alt: "Moneda capital page screenshot",
    liveUrl: "https://www.moneda.africa/capital"
  },
  {
    title: "Investor Form",
    caption:
      "A focused investor intake flow for collecting key information while keeping the experience direct, credible, and easy to complete.",
    src: "/moneda-investor-form.png",
    alt: "Moneda investor form screenshot",
    liveUrl: "https://www.moneda.africa/investment-termsheet"
  },
  {
    title: "Reports System",
    caption:
      "A reports interface for organizing institutional updates and improving access to structured investor-facing documents.",
    src: "/moneda-reports.png",
    alt: "Moneda reports page screenshot",
    liveUrl: "https://www.moneda.africa/news"
  }
];

export default function MonedaCaseStudy() {
  return (
    <main className="bg-paper text-ink">
      <section
        data-nav-theme="dark"
        className="bg-ink px-5 pb-20 pt-36 text-bone md:px-8 md:pb-28 md:pt-44"
      >
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.32em] text-gold">
            Case Study
          </p>
          <h1 className="max-w-6xl font-serif text-6xl leading-[0.94] text-balance md:text-8xl">
            Moneda Digital Systems & Website Redesign
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            Redesigning digital systems and institutional communication infrastructure for
            a pan-African investment platform.
          </p>
          <a
            href="https://www.moneda.africa/"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            Visit Live Site
          </a>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-5 pb-16 text-bone md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <ProjectImage
            alt="Moneda website screenshot"
            src="/moneda-homepage.png"
            priority
            tone="dark"
          />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <aside className="space-y-10">
            <MetaList title="My Role" items={roles} />
            <MetaList title="Objectives" items={objectives} />
          </aside>
          <div className="space-y-16">
            <CaseBlock title="Overview">
              <p>
                Moneda Invest Africa required a more scalable and institutionally credible
                digital presence aligned with its growth across investment, infrastructure,
                agriculture, and energy sectors.
              </p>
              <p>
                The project focused on redesigning digital systems, improving communication
                clarity, and creating scalable frameworks across investor-facing and
                internal touchpoints.
              </p>
            </CaseBlock>
            <CaseBlock title="Process">
              <p>
                The redesign process focused on improving structure, usability, navigation,
                consistency, and presentation clarity.
              </p>
              <p>
                The system was designed to scale across websites, investor materials,
                internal systems, presentations, and social media.
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
            eyebrow="System Direction"
            title="Sharper institutional communication across every touchpoint."
            dark
          />
          <ProjectScreenGrid screens={screens} dark />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:items-start">
          <SectionHeader eyebrow="Outcome" title="A clearer digital foundation for growth." />
          <CaseBlock title="Result">
            <p>
              The redesign improved Moneda’s institutional presentation, digital
              consistency, and communication scalability across both internal and external
              touchpoints.
            </p>
            <p>
              The new systems also improved the quality and scalability of investor-facing
              materials and operational communication frameworks.
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
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <h2 className="mb-6 font-serif text-4xl text-ink md:text-5xl">{title}</h2>
      <div className="space-y-5 text-lg leading-8 text-ink/64">{children}</div>
    </article>
  );
}
