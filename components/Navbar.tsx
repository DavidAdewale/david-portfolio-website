"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const updateTheme = () => {
      const sampleY = 36;
      const sampleX = window.innerWidth / 2;
      const section = document
        .elementsFromPoint(sampleX, sampleY)
        .map((element) => element.closest<HTMLElement>("[data-nav-theme]"))
        .find(Boolean);

      const nextTheme = section?.dataset.navTheme === "light" ? "light" : "dark";
      setTheme(nextTheme);
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  return (
    <motion.header
      data-theme={theme}
      className="site-nav fixed left-0 right-0 top-0 z-40 px-4 pt-4 md:px-8"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 shadow-soft backdrop-blur-xl transition-colors duration-500 md:px-5">
        <Link href="/" className="nav-brand text-sm font-semibold tracking-tight">
          David Adewale
        </Link>
        <div className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-xs font-medium transition md:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
