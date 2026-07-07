import ProjectImage from "@/components/ProjectImage";
import ProjectScreenGrid from "@/components/ProjectScreenGrid";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  "Web Design",
  "Frontend Development",
  "Product Strategy",
  "Brand Strategy Support",
  "Content Architecture",
  "CMS Workflow",
  "UX Direction"
];

const stack = [
  "Next.js",
  "React",
  "Sanity CMS",
  "MailerLite",
  "Vercel",
  "Google Analytics",
  "Microsoft Clarity"
];

const screens = [
  {
    title: "Homepage Direction",
    caption:
      "A warm, content-first homepage that introduces DiasporaSpot as a practical hub for building life abroad.",
    src: "/diasporaspot-homepage.png",
    alt: "DiasporaSpot homepage screenshot"
  },
  {
    title: "Articles Hub",
    caption:
      "An SEO-friendly article system designed to help the team publish practical resources for diaspora professionals, students, and newcomers.",
    src: "/diasporaspot-articles.png",
    alt: "DiasporaSpot articles page screenshot"
  },
  {
    title: "Workshop Discovery",
    caption:
      "A workshop listing experience that makes upcoming sessions easy to find and turns interest into waitlist and registration actions.",
    src: "/diasporaspot-workshops.png",
    alt: "DiasporaSpot workshops page screenshot"
  },
  {
    title: "Careers Surface",
    caption:
      "A careers section that supports future contributor and team opportunities as the platform grows.",
    src: "/diasporaspot-careers.png",
    alt: "DiasporaSpot careers page screenshot"
  }
];

const workflowScreens = [
  {
    title: "Article Detail",
    caption:
      "Long-form content pages structured around clear reading hierarchy, categories, metadata, and related article discovery.",
    src: "/diasporaspot-article-detail.png",
    alt: "DiasporaSpot article detail screenshot"
  },
  {
    title: "Workshop Detail",
    caption:
      "Workshop pages connect session details to signup workflows and MailerLite groups for workshop-specific communication.",
    src: "/diasporaspot-workshop-detail.png",
    alt: "DiasporaSpot workshop detail screenshot"
  },
  {
    title: "Homepage Content Blocks",
    caption:
      "The homepage connects core user needs with article discovery, workshop promotion, and community positioning.",
    src: "/diasporaspot-homepage-content.png",
    alt: "DiasporaSpot homepage content sections screenshot"
  }
];

const decisions = [
  {
    title: "Content-First Platform Structure",
    copy: "The site was shaped as a scalable digital hub rather than a generic landing page, with articles, workshops, jobs, and community touchpoints forming the core product surface."
  },
  {
    title: "CMS Workflow for Independence",
    copy: "Sanity CMS was set up so the client could publish and manage articles, workshops, and jobs without depending on a developer for routine content updates."
  },
  {
    title: "Workshop Signup Infrastructure",
    copy: "Workshop forms were connected to MailerLite so each workshop can create and use a workshop-specific mailing group for follow-up communication."
  },
  {
    title: "Measurement and Growth Readiness",
    copy: "Google Analytics and Microsoft Clarity were added to support visibility into user behavior, while the platform was structured for future paid workshop workflows."
  }
];

export default function DiasporaSpotCaseStudy() {
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
            DiasporaSpot Content Platform & Website
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            Designing and developing a content-driven digital hub for diaspora audiences
            navigating life, work, workshops, and opportunities abroad.
          </p>
          <a
            href="https://www.diasporaspot.com/"
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
            alt="DiasporaSpot homepage screenshot"
            src="/diasporaspot-homepage.png"
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
                DiasporaSpot is a platform for diaspora audiences navigating life, work,
                learning, and opportunities abroad. The project needed to launch the brand
                with a credible digital presence while creating an SEO-friendly foundation
                for content and workshop growth.
              </p>
              <p>
                My role extended beyond building pages. I supported the website direction,
                user experience, content structure, CMS workflow, and ongoing platform
                strategy so the product could operate as a practical digital hub.
              </p>
              <p>
                The primary conversion goal was to guide users toward workshop discovery
                and signups while keeping articles, jobs, and community resources easy to
                access.
              </p>
            </CaseBlock>

            <CaseBlock title="Challenge">
              <p>
                The brand was still finding its footing, so the work required a clear
                strategic direction as much as execution. The site needed to feel warm,
                approachable, and community-driven without losing credibility.
              </p>
              <p>
                The platform also needed to be manageable for a non-technical team, with
                a content model that could support articles, workshops, jobs, registration
                workflows, and future growth.
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
            eyebrow="Platform Strategy"
            title="Turning an early-stage brand into a useful digital hub."
            copy="The platform was structured around the realities of living abroad: finding information, discovering workshops, joining useful communities, and accessing opportunities."
            dark
          />
          <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-start">
            <ProjectImage
              alt="DiasporaSpot homepage content sections"
              src="/diasporaspot-homepage-content.png"
              tone="dark"
            />
            <div className="space-y-7 text-lg leading-8 text-bone/68">
              <p>
                The information architecture grouped DiasporaSpot around practical user
                needs: articles for self-paced learning, workshops for active support,
                jobs for opportunities, and community as the broader platform layer.
              </p>
              <p>
                This helped the site move beyond a simple launch page into a content
                system that can grow with the brand, support SEO, and make new resources
                discoverable over time.
              </p>
              <div className="grid gap-3 text-bone">
                <span className="border-t border-bone/10 pt-3">Articles and practical resources</span>
                <span className="border-t border-bone/10 pt-3">Workshop discovery and signups</span>
                <span className="border-t border-bone/10 pt-3">Jobs and future opportunity listings</span>
                <span className="border-t border-bone/10 pt-3">Email capture and platform growth loops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Product Screens"
            title="A content-led interface for learning, workshops, and opportunities."
            copy="The website was designed to make the platform useful from launch while leaving room for ongoing content, workshop, and community growth."
          />
          <ProjectScreenGrid screens={screens} />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="CMS & Workflows"
            title="Publishing and signup workflows built for a growing team."
            copy="Sanity CMS and MailerLite integrations helped turn the website into an operating system for publishing content and managing workshop interest."
          />
          <ProjectScreenGrid screens={workflowScreens} />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Key Decisions"
            title="Designed for clarity, content ownership, and platform growth."
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
          <CaseBlock title="Implementation" dark>
            <p>
              I built the site with Next.js and React, deployed it on Vercel, connected
              the custom domain, and set up the CMS and integration layer for content and
              workshop operations.
            </p>
            <p>
              MailerLite was connected so workshops can create workshop-specific groups,
              supporting signup collection and future communication workflows. Google
              Analytics and Microsoft Clarity were added to support measurement after
              launch.
            </p>
          </CaseBlock>
          <CaseBlock title="Outcome" dark>
            <p>
              DiasporaSpot launched with a credible public website, a client-manageable
              content workflow, workshop waitlist functionality, analytics tracking, and
              a scalable structure for articles, jobs, and future paid workshops.
            </p>
            <p>
              The project reflects a strategy-led web build: shaping the platform
              direction, then translating it into a usable, maintainable digital system.
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
