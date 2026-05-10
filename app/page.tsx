import AnimatedText from "@/components/AnimatedText";
import PlaceholderImage from "@/components/PlaceholderImage";
import ProfilePortrait from "@/components/ProfilePortrait";
import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import VideoEmbed from "@/components/VideoEmbed";

const projects = [
  {
    title: "Gladiator Booking & Operations Platform",
    description:
      "A scalable booking and administration system for managing boat cruises, beach house reservations, operational workflows, and customer management.",
    tags: ["Next.js", "React", "Supabase", "Vercel", "Product Design"],
    href: "/work/gladiator",
    imageLabel: "Gladiator dashboard screenshot",
    imageSrc: "/gladiator-dahsboard.png",
    liveUrl: "https://admin.gladiatorleisures.com"
  },
  {
    title: "Moneda Digital Systems & Website Redesign",
    description:
      "Redesigned institutional digital systems and communication infrastructure to improve investor-facing clarity, scalability, and operational consistency.",
    tags: ["UX/UI", "Brand Systems", "Information Architecture", "Web Design"],
    href: "/work/moneda",
    imageLabel: "Moneda website screenshot",
    imageSrc: "/moneda-homepage.png",
    liveUrl: "https://www.moneda.africa/"
  },
  {
    title: "1952 Africa CMS & Digital Platform",
    description:
      "A scalable content management and digital archive system for organizing artist profiles, artworks, programs, exhibitions, and institutional storytelling.",
    tags: ["Next.js", "React", "Supabase", "CMS Architecture", "Vercel"],
    href: "/work/1952-africa",
    imageLabel: "1952 Africa CMS and digital archive preview",
    imageSrc: "/1952-africa-homepage.png",
    liveUrl: "https://www.1952africa.art/"
  }
];

const skillGroups = [
  {
    title: "Design",
    skills: ["UX/UI Design", "Wireframing", "Design Systems", "Responsive Design", "Information Architecture"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "JavaScript", "HTML/CSS", "Supabase", "API Integrations", "Vercel"]
  },
  {
    title: "Workflow",
    skills: ["AI-Assisted Development", "Frontend Architecture", "SEO Fundamentals", "Cross-Browser Optimization"]
  }
];

export default function Home() {
  return (
    <main>
      <section
        data-nav-theme="dark"
        className="relative min-h-screen overflow-hidden bg-ink px-5 pb-16 pt-36 text-bone md:px-8 md:pt-44"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="mb-7 text-xs font-medium uppercase tracking-[0.32em] text-gold">
              Product Designer & Frontend Builder
            </p>
            <AnimatedText
              lines={["David Adewale", "designs and ships", "scalable digital", "experiences."]}
              className="font-serif text-[17vw] leading-[0.88] tracking-normal md:text-[8.2vw] lg:text-[7.4rem]"
            />
          </div>
          <div className="md:pb-4">
            <ProfilePortrait />
            <p className="max-w-xl text-xl leading-8 text-bone/82 md:text-2xl md:leading-9">
              I design and ship scalable digital experiences using modern frontend tools,
              AI-assisted workflows, and systems-driven product thinking.
            </p>
            <p className="mt-7 max-w-xl text-base leading-7 text-bone/54">
              Hybrid designer-developer with experience building booking platforms, CMS
              systems, operational tools, and investor-facing digital experiences across
              startups, hospitality, finance, and media.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl md:mt-24">
          <VideoEmbed
            title="Selected interface montage"
            src="https://www.youtube.com/embed/sT-mjojTjDI?si=QcEpwQHZM60ahgdq"
          />
        </div>
      </section>

      <section
        id="work"
        data-nav-theme="light"
        className="bg-paper px-5 py-24 text-ink md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Selected Work"
            title="Case studies with systems, product thinking, and build detail."
            copy="A focused selection of digital platforms, institutional systems, and frontend experiences designed for clarity and scale."
          />
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        data-nav-theme="dark"
        className="bg-charcoal px-5 py-24 text-bone md:px-8 md:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <SectionHeader eyebrow="About" title="Designer by craft. Builder by habit." dark />
          <div className="space-y-7 text-xl leading-9 text-bone/70 md:text-2xl md:leading-10">
            <p>
              I’m a multidisciplinary designer working across product design, frontend
              development, digital systems, and strategic communications.
            </p>
            <p>
              My work focuses on building scalable systems that balance usability,
              operational clarity, storytelling, and business goals.
            </p>
            <p>
              Over the last 5+ years, I’ve worked with startups, agencies, and
              investment-focused organizations to design and ship digital products,
              communication systems, operational platforms, and web experiences.
            </p>
          </div>
        </div>
      </section>

      <section
        id="skills"
        data-nav-theme="light"
        className="bg-paper px-5 py-24 text-ink md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skills"
            title="A practical toolkit for designing, building, and scaling products."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="border-t border-ink/12 pt-6">
                <h3 className="mb-6 font-serif text-3xl text-ink">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 px-3 py-1.5 text-sm text-ink/68"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        data-nav-theme="dark"
        className="bg-ink px-5 py-24 text-bone md:px-8 md:py-32"
      >
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeader
            eyebrow="Contact"
            title="Let’s build something thoughtful."
            copy="Whether it’s a product, platform, or digital experience, I enjoy working on systems that combine clarity, usability, and execution."
            dark
          />
          <a
            href="mailto:adewaledavidola@gmail.com"
            className="inline-flex rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            adewaledavidola@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}
