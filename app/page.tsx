import Image from "next/image";
import Link from "next/link";
import ScreenshotImage from "@/components/ScreenshotImage";

const websites = [
  {
    number: "01", name: "Gladiator", category: "HOSPITALITY & LEISURE", href: "/work/gladiator", url: "https://www.gladiatorleisures.com", domain: "gladiatorleisures.com", image: "/gladiator-customer-homepage.png",
    title: "From a customer’s first click to the team’s daily operations.",
    description: "I designed and built Gladiator’s customer website and the admin platform behind it, connecting yacht charters, boat transfers, and waterfront stays with the tools the team uses to manage bookings.",
    scope: ["Customer website & booking journeys", "Admin dashboard & booking management", "Vessel, property & transport management", "Customer records & payment status workflows"],
    management: "I currently manage the website and platform, resolving issues and improving customer journeys and operational features as the business evolves.",
    stack: "Next.js · React · Supabase · Vercel"
  },
  {
    number: "02", name: "DiasporaSpot", category: "CONTENT, COMMUNITY & EVENTS", href: "/work/diasporaspot", url: "https://www.diasporaspot.com", domain: "diasporaspot.com", image: "/diasporaspot-homepage.png",
    title: "A publishing platform built to turn interest into participation.",
    description: "I designed and built DiasporaSpot’s website, bringing articles, workshops, and opportunities into one experience, with a CMS for the team and connected registration, payment, and email workflows.",
    scope: ["Responsive website & article publishing", "Sanity CMS for content and workshops", "Workshop registration & Stripe checkout", "MailerLite integration & analytics setup"],
    management: "I currently manage and develop the site, supporting its content systems and improving workshop discovery, registration, and the integrations behind them.",
    stack: "Next.js · Sanity · Supabase · Stripe · MailerLite"
  }
];
const otherWork = [
  { name: "Moneda", type: "Website redesign & digital communications", image: "/moneda-homepage.png", href: "/work/moneda" },
  { name: "1952 Africa", type: "CMS & digital archive", image: "/1952-africa-homepage.png", href: "/work/1952-africa" },
  { name: "South African Tourism", type: "Art direction & campaign design", image: "/sat kv1.jpg", href: "/work/south-african-tourism" }
];

export default function Home() {
  return (
    <main className="portfolio">
      <section className="home-hero" data-nav-theme="light">
        <div className="page-shell">
          <div className="hero-topline"><span className="eyebrow">DAVID ADEWALE / DESIGNER & DEVELOPER</span><span className="location">Based in Lagos · Working beyond borders</span></div>
          <div className="hero-layout">
            <div>
              <h1>Websites built<br />with purpose.<br /><em>Managed with care.</em></h1>
              <p className="hero-copy">I design, build, and manage websites that help businesses show up well and work better. From the pages your customers see to the systems your team relies on.</p>
              <div className="hero-actions"><a className="button-primary" href="#work">Explore my website work <span aria-hidden="true">↘</span></a><a className="text-link" href="#contact">Let’s talk about your site <span aria-hidden="true">↗</span></a></div>
            </div>
            <div className="hero-aside">
              <div className="portrait-frame"><Image src="/david.png" alt="David Adewale, website designer and developer" fill priority sizes="(min-width: 900px) 330px, 240px" className="object-contain object-bottom" /></div>
              <div className="portrait-caption"><span>Design thinking.<br />Technical follow-through.</span><span className="caption-arrow" aria-hidden="true">↗</span></div>
            </div>
          </div>
          <div className="hero-proof"><span className="eyebrow">BUILT BY ME. STILL MANAGED BY ME.</span><a href="#gladiator">Gladiator <span aria-hidden="true">↗</span></a><a href="#diasporaspot">DiasporaSpot <span aria-hidden="true">↗</span></a><span className="proof-note">Design → Development → Ongoing care</span></div>
        </div>
      </section>

      <section id="work" className="work-section" data-nav-theme="light">
        <div className="page-shell">
          <div className="section-intro"><div><p className="eyebrow">01 / SELECTED WEBSITE WORK</p><h2>Beyond the homepage.</h2></div><p>Two websites I built and continue to manage. Here’s what went into them, on the screen and behind the scenes.</p></div>
          {websites.map((project) => <article className="featured-project" id={project.name.toLowerCase()} key={project.name}>
            <div className="project-heading"><h3><span>{project.number}</span>{project.name}</h3><span className="status-label"><i /> Built & currently managed by me</span></div>
            <div className="project-layout">
              <Link className={`website-preview ${project.number === "02" ? "preview-warm" : ""}`} href={project.href} aria-label={`Explore the ${project.name} case study`}>
                <div className="browser-bar"><span aria-hidden="true">● ● ●</span><span>{project.domain}</span><span aria-hidden="true">↗</span></div>
                <div className="website-screen"><ScreenshotImage src={project.image} alt={`${project.name} website I designed and developed`} sizes="(min-width: 900px) 57vw, 100vw" /></div>
                <span className="preview-caption">Explore the project <span aria-hidden="true">↗</span></span>
              </Link>
              <div className="project-details"><p className="eyebrow">{project.category}</p><h4>{project.title}</h4><p>{project.description}</p><h5>WHAT I BUILT</h5><ul className="scope-list">{project.scope.map(item => <li key={item}><span aria-hidden="true">↗</span>{item}</li>)}</ul><div className="management-note"><span className="eyebrow">ONGOING RESPONSIBILITY</span><p>{project.management}</p></div><div className="project-links"><Link className="text-link" href={project.href}>Full case study <span aria-hidden="true">↗</span></Link><a href={project.url} target="_blank" rel="noreferrer">Visit live site ↗</a></div><p className="stack-note">{project.stack}</p></div>
            </div>
          </article>)}
        </div>
      </section>

      <section id="management" className="management-section" data-nav-theme="dark"><div className="page-shell"><div className="section-intro"><div><p className="eyebrow">02 / WEBSITE MANAGEMENT</p><h2>A website needs someone<br /><em>who stays with it.</em></h2></div><p>Launching is one part of the job. I can take responsibility for the updates, fixes, and improvements that keep your website useful as your business changes.</p></div><div className="service-grid">{[
        ["01", "Keep it current", "Page updates, new content, campaign landing pages, and CMS support that keep your website aligned with what your business is doing."],
        ["02", "Keep it working", "Troubleshooting forms, booking flows, payments, and integrations. Tracking down issues and checking the complete journey after a fix."],
        ["03", "Make it better", "Clearer navigation, better mobile layouts, technical SEO foundations, and thoughtful improvements informed by how people use the site."]
      ].map(([n,title,copy]) => <article key={n}><span className="service-number">{n} /</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="management-bottom"><span>One point of contact for design, development, and day-to-day improvements.</span><a href="#contact" className="text-link">Let’s discuss what you need ↗</a></div></div></section>

      <section className="other-section" data-nav-theme="light"><div className="page-shell"><div className="section-intro"><div><p className="eyebrow">03 / A WIDER DESIGN PRACTICE</p><h2>More work. Same attention.</h2></div><p>A background in brand and communication design helps me make websites that feel considered, consistent, and true to the business.</p></div><div className="other-grid">{otherWork.map(project => <Link href={project.href} className="other-project" key={project.name}><div className="other-image"><ScreenshotImage src={project.image} alt={`${project.name} project preview`} sizes="(min-width: 768px) 33vw, 100vw" /></div><div className="other-title"><h3>{project.name}</h3><span aria-hidden="true">↗</span></div><p>{project.type}</p></Link>)}</div></div></section>

      <section id="about" className="about-section" data-nav-theme="light"><div className="page-shell about-layout"><div><p className="eyebrow">04 / A LITTLE ABOUT ME</p><h2>A designer’s eye.<br />A builder’s mindset.</h2></div><div><p className="about-lead">I’m David, a designer and developer who connects how a website looks with how it actually works.</p><p>My experience spans hospitality, community platforms, finance, arts, and tourism. I work across user experience, visual design, development, and the practical systems behind a site: content management, bookings, payments, and email integrations.</p><p>With Gladiator and DiasporaSpot, my work continues after launch. That ongoing involvement shapes how I build: clear for customers, manageable for the team, and ready to improve over time.</p><div className="expertise-tags">{["Web design & development", "Website management", "CMS & integrations", "Brand & communication design"].map(s => <span key={s}>{s}</span>)}</div></div></div></section>

      <section id="contact" className="contact-section" data-nav-theme="dark"><div className="page-shell"><p className="eyebrow">LET’S WORK TOGETHER</p><h2>Your website deserves<br /><em>a capable pair of hands.</em></h2><div className="contact-bottom"><p>Need someone to manage your site, improve what’s there, or build what comes next? Let’s talk.</p><a className="button-primary" href="mailto:adewaledavidola@gmail.com">Email David <span aria-hidden="true">↗</span></a></div><a className="contact-email" href="mailto:adewaledavidola@gmail.com">adewaledavidola@gmail.com</a></div></section>
    </main>
  );
}
