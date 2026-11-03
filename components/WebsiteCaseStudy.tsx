import ScreenshotImage from "./ScreenshotImage";
import Link from "next/link";

type Props = {
  name: string; intro: string; url: string; image: string; stack: string[];
  context: string; scope: { title: string; copy: string }[];
  management: string; improvements: string[];
  screens: { src: string; title: string; copy: string }[];
  next: { name: string; href: string };
};
export default function WebsiteCaseStudy({ name, intro, url, image, stack, context, scope, management, improvements, screens, next }: Props) {
  return <main className="portfolio case-study">
    <section data-nav-theme="light" className="case-hero"><div className="page-shell"><Link href="/#work" className="text-link">← Selected website work</Link><div className="case-title-row"><div><p className="eyebrow">WEBSITE DESIGN, DEVELOPMENT & ONGOING MANAGEMENT</p><h1>{name}</h1></div><span className="status-label"><i /> Built & currently managed by me</span></div><p className="case-intro">{intro}</p><a className="button-primary" href={url} target="_blank" rel="noreferrer">Visit live website ↗</a><div className="case-cover"><ScreenshotImage src={image} alt={`${name} website designed and built by David Adewale`} priority sizes="(min-width: 1280px) 1208px, 100vw" /></div><div className="case-facts"><div><span className="eyebrow">MY RESPONSIBILITY</span><p>Design · Development · Ongoing management</p></div><div><span className="eyebrow">TOOLS & SYSTEMS</span><p>{stack.join(" · ")}</p></div></div></div></section>
    <section data-nav-theme="light" className="case-section"><div className="page-shell"><div className="section-intro"><div><p className="eyebrow">THE BRIEF</p><h2>A website with a job to do.</h2></div><p>{context}</p></div><div className="scope-grid">{scope.map((item, i) => <article key={item.title}><span className="eyebrow">0{i + 1} / WHAT I BUILT</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div></div></section>
    <section data-nav-theme="dark" className="management-section"><div className="page-shell"><div className="section-intro"><div><p className="eyebrow">MY WORK CONTINUES AFTER LAUNCH</p><h2>Built by me.<br /><em>Still managed by me.</em></h2></div><p>{management}</p></div><div className="case-improvements">{improvements.map(item => <p key={item}><span aria-hidden="true">↗</span>{item}</p>)}</div></div></section>
    <section data-nav-theme="light" className="case-section"><div className="page-shell"><div className="section-intro"><div><p className="eyebrow">INSIDE THE BUILD</p><h2>The experience, in detail.</h2></div><p>Selected screens from the project, showing the customer experience and the systems supporting it.</p></div><div className="case-screens">{screens.map(screen => <figure key={screen.src}><div className="case-screen"><ScreenshotImage src={screen.src} alt={screen.title} sizes="(min-width: 1280px) 589px, (min-width: 768px) 50vw, 100vw" /></div><figcaption><h3>{screen.title}</h3><p>{screen.copy}</p></figcaption></figure>)}</div></div></section>
    <section data-nav-theme="dark" className="contact-section"><div className="page-shell"><p className="eyebrow">DESIGN, BUILD, AND THE WORK THAT FOLLOWS</p><h2>Need this level of care<br /><em>for your website?</em></h2><div className="contact-bottom"><a className="button-primary" href="mailto:adewaledavidola@gmail.com">Let’s talk about your site ↗</a><Link className="text-link" href={next.href}>Next project: {next.name} →</Link></div></div></section>
  </main>;
}
