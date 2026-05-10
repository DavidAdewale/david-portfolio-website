import ProjectImage from "@/components/ProjectImage";
import ProjectScreenGrid from "@/components/ProjectScreenGrid";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  "Product Design",
  "UX/UI Design",
  "CMS Architecture",
  "Frontend Development",
  "Information Architecture",
  "Content Systems Design",
  "Digital Strategy",
  "Workflow Structuring"
];

const stack = [
  "Next.js",
  "React",
  "Supabase",
  "CMS Architecture",
  "Responsive Web Design",
  "Vercel"
];

const challengeItems = [
  "artist documentation",
  "artwork cataloguing",
  "residency programs",
  "exhibitions",
  "institutional storytelling",
  "ongoing content publishing"
];

const processItems = [
  "artists",
  "artworks",
  "exhibitions",
  "accelerator programs",
  "institutional initiatives",
  "editorial content"
];

const architectureItems = [
  "modular content relationships",
  "reusable CMS structures",
  "scalable information hierarchy",
  "responsive layouts",
  "simplified content management workflows"
];

const processScreens = [
  {
    title: "Admin Dashboard",
    caption:
      "A central CMS overview for monitoring platform activity, managing content areas, and giving internal teams a clear starting point for updates.",
    src: "/admin-dashboard.png",
    alt: "1952 Africa admin dashboard screenshot"
  },
  {
    title: "Programs Management",
    caption:
      "An administrative programs interface designed to organize accelerator initiatives, exhibitions, and institutional activities in one structured workflow.",
    src: "/admin-programs.png",
    alt: "1952 Africa admin programs management screenshot"
  },
  {
    title: "Public Programs Page",
    caption:
      "A public-facing programs page that presents initiatives with editorial clarity while drawing from the underlying CMS structure.",
    src: "/1952-web-programs.png",
    alt: "1952 Africa public programs page screenshot"
  },
  {
    title: "Works Archive",
    caption:
      "A digital works archive for showcasing artwork records, improving discovery, and supporting long-term cultural documentation.",
    src: "/1952-web-works.png",
    alt: "1952 Africa works archive screenshot"
  }
];

const decisions = [
  {
    title: "Modular Content Architecture",
    copy: "The CMS was structured around reusable content relationships that allowed artists, artworks, exhibitions, and programs to connect dynamically across the platform."
  },
  {
    title: "Scalable Digital Archive",
    copy: "The system was designed to function as both a public-facing website and a long-term digital archive documenting artists, collections, and institutional activities."
  },
  {
    title: "Simplified Content Management",
    copy: "Administrative workflows were intentionally simplified to make ongoing content updates easier for internal teams managing artist and exhibition information."
  },
  {
    title: "Institutional Storytelling",
    copy: "The visual and structural direction balanced contemporary presentation with editorial clarity, helping communicate 1952 Africa's cultural mission while maintaining usability and scalability."
  }
];

const aiWorkflow = [
  "frontend implementation",
  "layout exploration",
  "content structuring",
  "debugging",
  "system planning",
  "iterative refinement"
];

const outcomes = [
  "content organization",
  "operational structure",
  "digital consistency",
  "long-term scalability",
  "institutional presentation"
];

export default function Africa1952CaseStudy() {
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
            1952 Africa CMS & Digital Platform
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            Designing and building a scalable content management and digital archive system
            for an African art and cultural platform.
          </p>
          <a
            href="https://www.1952africa.art/"
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
            alt="1952 Africa CMS and digital archive preview"
            src="/1952-africa-homepage.png"
            priority
            tone="dark"
          />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.75fr_1.25fr] md:gap-20">
          <aside className="space-y-10">
            <MetaList title="My Role" items={roles} />
            <MetaList title="Stack" items={stack} />
          </aside>
          <div className="space-y-16">
            <CaseBlock title="Overview">
              <p>
                1952 Africa is a cultural platform and creative accelerator focused on
                supporting emerging African artists through exhibitions, residencies,
                grants, workshops, and digital storytelling initiatives.
              </p>
              <p>
                The project involved designing and building a scalable website and content
                management system capable of organizing artist profiles, artworks, programs,
                exhibitions, and institutional content across multiple digital touchpoints.
              </p>
              <p>
                The goal was to create a structured digital infrastructure that could
                support both public-facing storytelling and long-term operational
                scalability.
              </p>
            </CaseBlock>

            <CaseBlock title="The Challenge">
              <p>The platform required a structured system capable of managing:</p>
              <TokenList items={challengeItems} />
              <p>
                The challenge was to design a digital experience that balanced cultural
                storytelling, usability, scalability, operational simplicity, and content
                flexibility while ensuring the system remained easy to manage internally as
                the organization expanded its programs and artist network.
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
            eyebrow="Process"
            title="Structuring cultural storytelling into a scalable CMS."
            dark
          />
          <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-start">
            <ProjectImage
              alt="1952 Africa content model diagram"
              src="/1952-africa-content-model.png"
              tone="dark"
            />
            <div className="space-y-7 text-lg leading-8 text-bone/68">
              <p>
                The project began with mapping the different content structures required
                across the platform, including artists, artworks, exhibitions, accelerator
                programs, institutional initiatives, and editorial content.
              </p>
              <TokenList items={processItems} dark />
              <p>From there, the system was designed around:</p>
              <TokenList items={architectureItems} dark />
              <p>
                The platform architecture prioritized flexibility so that new artists,
                programs, and collections could be continuously added without restructuring
                the system.
              </p>
            </div>
          </div>
          <div className="mt-16">
            <ProjectScreenGrid screens={processScreens} dark />
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Key Design Decisions"
            title="A CMS system built for culture, continuity, and scale."
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

      <section className="bg-ink px-5 py-24 text-bone md:px-8 md:py-32" data-nav-theme="dark">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-20">
          <CaseBlock title="AI-Assisted Workflow" dark>
            <p>AI-assisted workflows were used to accelerate:</p>
            <TokenList items={aiWorkflow} dark />
            <p>
              AI functioned as a workflow acceleration layer while maintaining design
              consistency and architectural control throughout development.
            </p>
          </CaseBlock>
          <CaseBlock title="Outcome" dark>
            <p>
              The result was a scalable digital platform and CMS system capable of
              documenting and showcasing 1952 Africa's growing ecosystem of artists,
              exhibitions, programs, and cultural initiatives.
            </p>
            <p>The platform improved:</p>
            <TokenList items={outcomes} dark />
            <p>
              It also created a stronger foundation for future growth and digital
              storytelling initiatives.
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

function TokenList({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`rounded-full border px-3 py-1.5 text-sm ${
            dark ? "border-bone/12 text-bone/72" : "border-ink/10 text-ink/68"
          }`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}
