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
  title: "David Adewale | Product Designer & Frontend Builder",
  description:
    "Portfolio of David Adewale, a product designer and frontend builder creating scalable digital experiences.",
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
        <div className="noise" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
