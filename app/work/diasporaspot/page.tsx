import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";
export const metadata: Metadata = { title: "DiasporaSpot — Content & Workshop Platform | David Adewale", description: "How I designed, built, and continue to manage DiasporaSpot, including its CMS, workshop registrations, payments, and email integrations." };
export default function DiasporaSpotCaseStudy() {
  return <WebsiteCaseStudy
    name="DiasporaSpot"
    intro="I designed and built DiasporaSpot’s website and the systems behind its content and workshops. I currently manage and develop the platform, from the publishing experience to registrations, payments, and connected email workflows."
    url="https://www.diasporaspot.com/"
    image="/diasporaspot-homepage.png"
    stack={["Next.js", "React", "Sanity", "Supabase", "Stripe", "MailerLite", "Vercel"]}
    context="DiasporaSpot needed a useful digital home for people navigating life and work abroad. I translated that purpose into a platform where visitors can discover practical resources and workshops, and the team can publish content and manage participation."
    scope={[
      { title: "Website & content experience", copy: "I designed and developed the responsive website, including the homepage, article hub and detail pages, workshop discovery, and opportunities content. I structured navigation and page layouts around finding useful information and taking the next step." },
      { title: "Content management system", copy: "I configured Sanity CMS and its content models for articles, workshops, and opportunities. The publishing workflow gives the team control over routine content updates without requiring changes to the website’s code." },
      { title: "Workshop registration & payments", copy: "I built workshop detail and registration flows, with Stripe checkout for paid sessions and Supabase supporting registration data. The platform’s development also includes discount-code handling, event capacity checks, and waitlist workflows." },
      { title: "Email, analytics & deployment", copy: "I connected MailerLite for email capture and workshop-specific groups, added Google Analytics and Microsoft Clarity, and set up deployment on Vercel with the custom domain. These integrations support communication and visibility into website use." }
    ]}
    management="I continue to manage the website and develop its functionality as the platform grows. That includes maintaining its content and integration layer and improving the journey from discovering a workshop to registering for it."
    improvements={["Publishing support: maintaining the CMS structure and the way content appears across the website.", "Workshop development: extending registration, payment, discount, and capacity workflows as event requirements evolve.", "Ongoing improvements: troubleshooting issues and refining the usability of content and workshop pages."]}
    screens={[
      { src: "/diasporaspot-articles.png", title: "Article discovery", copy: "A structured home for practical resources, designed to make content easy to browse." },
      { src: "/diasporaspot-article-detail.png", title: "Long-form reading", copy: "Article pages with a clear reading hierarchy, metadata, and related content discovery." },
      { src: "/diasporaspot-workshops.png", title: "Workshop discovery", copy: "A dedicated workshop listing experience connecting visitors with relevant sessions." },
      { src: "/diasporaspot-workshop-detail.png", title: "Workshop information", copy: "Session detail pages that connect the workshop’s offer with signup and registration actions." }
    ]}
    next={{ name: "Gladiator", href: "/work/gladiator" }}
  />;
}
