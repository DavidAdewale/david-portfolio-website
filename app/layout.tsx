import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata: Metadata = {
  title: "David Adewale | Web Design, Development & Website Management",
  description:
    "I design, build, and manage websites. Explore Gladiator and DiasporaSpot: customer experiences, content platforms, booking systems, and ongoing website care.",
  metadataBase: new URL("https://david-adewale.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Navbar />
        <div id="main-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
