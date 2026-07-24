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
  "Customer Experience Design",
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
    copy: "The platform was structured to support multiple booking types across the customer-facing website and internal admin system."
  },
  {
    title: "Connected Customer and Admin Flows",
    copy: "The customer site was designed for discovery and booking intent, while the admin platform supported the operational follow-through after requests were submitted."
  },
  {
    title: "Operational Clarity",
    copy: "The interface hierarchy prioritized clarity and fast decision-making for administrators managing multiple operational tasks simultaneously."
  },
  {
    title: "Reusable Design Systems",
    copy: "Reusable layouts, interface components, and interaction patterns were created to improve scalability and maintain consistency across the platform."
  }
];

const customerScreens = [
  {
    title: "Customer Homepage",
    caption:
      "A public-facing charter experience positioning Gladiator around private yacht charters, boat transfers, and waterfront stays in Lagos.",
    src: "/gladiator-customer-homepage.png",
    alt: "Gladiator customer-facing homepage screenshot"
  },
  {
    title: "Booking Discovery",
    caption:
      "A guided discovery surface for filtering destinations, browsing available experience categories, and moving users toward charter requests.",
    src: "/gladiator-customer-booking.png",
    alt: "Gladiator customer booking discovery screenshot"
  },
  {
    title: "Service Positioning",
    caption:
      "Customer-facing sections communicate concierge support, privacy, timing, and arrival details before users make a booking request.",
    src: "/gladiator-customer-services.png",
    alt: "Gladiator customer service positioning screenshot"
  },
  {
    title: "Waterfront Stays",
    caption:
      "The customer site also supports private stay discovery, extending the platform beyond yacht charters into broader leisure experiences.",
    src: "/gladiator-customer-stays.png",
    alt: "Gladiator customer waterfront stays screenshot"
  }
];

const adminScreens = [
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
            Gladiator Customer Booking & Operations Platform
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-8 text-bone/68 md:text-2xl md:leading-9">
            A customer-facing booking website and internal operations platform designed
            to support private charters, boat transfers, waterfront stays, and
            administrative visibility across hospitality services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.gladiatorleisures.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full bg-bone px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
            >
              Visit Customer Site
            </a>
            <a
              href="https://admin.gladiatorleisures.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-full border border-bone/16 px-5 py-3 text-sm font-semibold text-bone transition hover:border-gold hover:text-gold"
            >
              Visit Admin Platform
            </a>
          </div>
        </div>
      </section>

      <section data-nav-theme="dark" className="bg-ink px-5 pb-16 text-bone md:px-8 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <ProjectImage
            alt="Gladiator customer-facing homepage screenshot"
            src="/gladiator-customer-homepage.png"
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
                Gladiator needed a connected digital platform that could serve customers
                publicly while giving the team a centralized operational system behind
                the scenes.
              </p>
              <p>
                The public site needed to position private yacht charters, boat transfers,
                and waterfront stays clearly, then guide users toward booking requests and
                booking lookup flows.
              </p>
              <p>
                The admin platform supported the operational side: booking management,
                customer records, service inventory, payment visibility, and internal
                workflows across multiple service categories.
              </p>
            </CaseBlock>

            <CaseBlock title="Challenge">
              <p>
                The customer journey and internal workflow had to work together. A public
                booking interface could not be treated separately from the operational
                system that would manage requests after submission.
              </p>
              <p>
                Information was previously spread across multiple touchpoints, creating
                friction, manual coordination, and limited visibility across bookings,
                inventory, schedules, and customer details.
              </p>
              <p>
                The platform needed to support multiple booking types, improve customer
                discovery, simplify admin workflows, and remain scalable as operations
                expanded.
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
                The design and development process focused on connecting customer-facing
                booking intent with operational follow-through: simplifying discovery,
                reducing admin friction, improving visibility, and building reusable
                systems for future services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Customer Website"
            title="A public booking experience for private leisure services."
            copy="The customer-facing website gives users a polished way to understand the offer, explore available categories, and start a charter or stay request."
          />
          <ProjectScreenGrid screens={customerScreens} />
        </div>
      </section>

      <section data-nav-theme="light" className="px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Admin Platform"
            title="Interfaces designed around daily admin workflows."
            copy="The admin platform extends the customer booking experience into the operational surfaces needed to manage services, inventory, properties, and logistics."
          />
          <ProjectScreenGrid screens={adminScreens} />
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
              The result was a connected customer and operations platform: a polished
              public-facing site for booking intent and a centralized admin system for
              managing the operational work behind each service.
            </p>
            <p>
              The system established a stronger operational foundation for future growth
              while improving customer presentation, usability, internal visibility, and
              operational consistency across the business.
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
