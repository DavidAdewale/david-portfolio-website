import type { Metadata } from "next";
import WebsiteCaseStudy from "@/components/WebsiteCaseStudy";
export const metadata: Metadata = { title: "Gladiator — Website & Operations Platform | David Adewale", description: "How I designed, built, and continue to manage Gladiator’s customer booking website and internal operations platform." };
export default function GladiatorCaseStudy() {
  return <WebsiteCaseStudy
    name="Gladiator"
    intro="I designed and built the customer website and internal admin platform for Gladiator’s leisure business. I currently manage both, connecting the experience of booking a yacht, transfer, or waterfront stay with the operational work behind it."
    url="https://www.gladiatorleisures.com"
    image="/gladiator-customer-homepage.png"
    stack={["Next.js", "React", "Supabase", "Vercel"]}
    context="Gladiator needed a clear way for customers to explore its services and book, alongside practical tools for the team to manage reservations, inventory, customer information, and payment status. My scope covered both sides of that experience."
    scope={[
      { title: "Customer website & service discovery", copy: "I designed and developed the public website around yacht charters, boat transfers, and waterfront stays, with service pages, listing details, and responsive layouts that help customers understand their options." },
      { title: "Booking journeys", copy: "I built the customer flows for choosing a service and submitting a booking, with availability and pricing logic, customer details, and booking lookup. The website connects the customer’s request with the records used by the operations team." },
      { title: "Internal admin platform", copy: "I built the team’s dashboard and booking management interfaces to bring reservations, customer records, payment statuses, and operational information together in one place." },
      { title: "Inventory & operational tools", copy: "I built management screens for boats, beach houses, and transport, allowing the team to maintain listing information, pricing, and service details alongside the bookings those services generate." }
    ]}
    management="I continue to manage the customer site and admin platform. My work includes troubleshooting reported issues, refining booking behavior, and developing features as the team’s day-to-day needs change."
    improvements={["Customer experience: refining navigation, service discovery, and booking flows.", "Platform maintenance: investigating errors and checking that customer and admin workflows stay connected.", "Operational development: improving booking controls, pricing behavior, and the tools available to administrators."]}
    screens={[
      { src: "/gladiator-live-booking.png", title: "Customer booking experience", copy: "Service discovery and booking entry points for customers planning a leisure experience." },
      { src: "/gladiator-live-stays.png", title: "Waterfront stays", copy: "Property discovery extends the customer website beyond charters and transfers." },
      { src: "/gladiator-bookings.png", title: "Booking management", copy: "An internal view for handling reservations, customer details, and booking status." },
      { src: "/gladiator-boats.png", title: "Vessel management", copy: "Tools for maintaining the inventory and details behind the customer-facing listings." },
      { src: "/gladiator-beach-houses.png", title: "Property management", copy: "A dedicated interface for organizing beach house listings and service information." },
      { src: "/gladiator-transport.png", title: "Transport operations", copy: "Operational tools supporting transport options and the logistics around reservations." }
    ]}
    next={{ name: "DiasporaSpot", href: "/work/diasporaspot" }}
  />;
}
