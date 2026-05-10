import ProjectImage from "@/components/ProjectImage";
import ProjectScreenGrid from "@/components/ProjectScreenGrid";
import SectionHeader from "@/components/SectionHeader";

const roles = [
  "Product Design",
  "UX/UI Design",
  "Frontend Development",
  "Backend Architecture",
  "Workflow Mapping",
  "Information Architecture",
  "Design Systems",
  "Product Direction"
];

const stack = ["Next.js", "React", "Supabase", "Vercel"];

const decisions = [
  {
    title: "Centralized Administration",
    copy: "A unified admin system was designed to give operators visibility across bookings, payment statuses, customers, schedules, and inventory management."
  },
  {
    title: "Flexible Booking Architecture",
    copy: "The platform was structured to support multiple booking types while maintaining consistency across the user experience."
  },
  {
    title: "Reusable Design Systems",
    copy: "Reusable layouts, interface components, and interaction patterns were created to improve scalability and maintain consistency across the platform."
  },
  {
    title: "Operational Clarity",
    copy: "The interface hierarchy prioritized clarity and fast decision-making for administrators managing multiple operational tasks simultaneously."
  }
];

const screens = [
  {
    title: "Bookings Management",
    caption:
      "A centralized bookings view for tracking reservations, customer details, booking categories, and operational status across services.",
    src: "/gladiator-bookings.png",
    alt: "Gladiator bookings management screen"
  },
  {
    title: "Boat Inventory",
    caption:
      "A structured boat management interface for organizing vessel details, availability, pricing, and operational records.",
    src: "/gladiator-boats.png",
    alt: "Gladiator boats management screen"
  },
  {
    title: "Beach House Listings",
    caption:
      "A content and inventory view for managing beach house properties, listing details, booking readiness, and service information.",
    src: "/gladiator-beach-houses.png",
    alt: "Gladiator beach houses management screen"
  },
  {
    title: "Transport Operations",
    caption:
      "A focused operational screen for coordinating transport options and supporting logistics around customer reservations.",
    src: "/gladiator-transport.png",
    alt: "Gladiator transport operations screen"
  }
];

export default function GladiatorCaseStudy() {
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
            Gladiator Booking & Operations Platform
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            A scalable digital platform designed to centralize bookings, operational
            workflows, customer management, and administrative visibility across
            hospitality services.
          </p>
          <a
            href="https://admin.gladiatorleisures.com"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            Visit Live Platform
          </a>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-5 pb-16 text-bone md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <ProjectImage
            alt="Gladiator dashboard screenshot"
            src="/gladiator-dahsboard.png"
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
                Gladiator needed a centralized operational platform capable of managing
                boat cruises, beach house reservations, customer bookings, payment
                tracking, and internal workflows across multiple service categories.
              </p>
              <p>
                The existing system relied heavily on fragmented communication, manual
                coordination, and disconnected operational processes, making scalability
                increasingly difficult.
              </p>
              <p>
                The goal was to design and build a unified digital platform that
                simplified operations while creating a scalable foundation for future
                growth.
              </p>
            </CaseBlock>

            <CaseBlock title="Challenge">
              <p>
                The operational workflow lacked centralized visibility across bookings,
                payments, scheduling, inventory, and customer management.
              </p>
              <p>
                Information was spread across multiple touchpoints, creating friction,
                inefficiencies, and operational inconsistency.
              </p>
              <p>
                The platform needed to support multiple booking types, simplify admin
                workflows, improve visibility, and remain scalable as operations expanded.
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
          <SectionHeader eyebrow="Process" title="Mapping operations into a scalable product system." dark />
          <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:items-start">
            <ProjectImage
              alt="Gladiator operational user flow map"
              src="/gladiator-user-flow.png"
              tone="dark"
            />
            <div className="space-y-7 text-lg leading-8 text-bone/68">
              <p>
                I started by mapping the operational structure of the business and
                identifying the major workflow dependencies involved in managing bookings,
                schedules, inventory, and customer interactions.
              </p>
              <p>The platform architecture was structured around three core booking categories:</p>
              <div className="grid gap-3 text-bone">
                <span className="border-t border-bone/10 pt-3">Boat Cruises</span>
                <span className="border-t border-bone/10 pt-3">Beach Houses</span>
                <span className="border-t border-bone/10 pt-3">Boat Rentals</span>
              </div>
              <p>
                The design and development process focused on simplifying booking flows,
                reducing operational friction, improving administrative visibility,
                building reusable interface systems, and ensuring scalability across
                future services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operational Screens"
            title="Interfaces designed around daily admin workflows."
            copy="The platform extended beyond booking capture into the operational surfaces needed to manage services, inventory, properties, and logistics."
          />
          <ProjectScreenGrid screens={screens} />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader eyebrow="Key Decisions" title="Designed around operational speed and future services." />
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
          <CaseBlock title="AI-Assisted Workflow" dark>
            <p>
              AI-assisted tools were used throughout the workflow to accelerate frontend
              implementation, debugging, component generation, iteration cycles, and
              architecture exploration.
            </p>
            <p>
              AI functioned as an acceleration layer within the development workflow while
              maintaining design and technical judgment throughout implementation.
            </p>
          </CaseBlock>
          <CaseBlock title="Outcome" dark>
            <p>
              The result was a scalable digital platform that significantly improved
              operational structure, centralized booking management, and created a more
              organized customer experience.
            </p>
            <p>
              The system established a stronger operational foundation for future growth
              while improving visibility, usability, and operational consistency across
              the business.
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
      <div className={`space-y-5 text-lg leading-8 ${dark ? "text-bone/66" : "text-ink/64"}`}>{children}</div>
    </article>
  );
}
