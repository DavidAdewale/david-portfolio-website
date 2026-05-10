"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  copy?: string;
  dark?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  copy,
  dark = false
}: SectionHeaderProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-4xl text-center md:mb-16"
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow ? (
        <p className={`mb-4 text-xs font-medium uppercase tracking-[0.32em] ${dark ? "text-gold" : "text-clay"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-serif text-4xl leading-[0.98] text-balance md:text-6xl ${dark ? "text-bone" : "text-ink"}`}>
        {title}
      </h2>
      {copy ? (
        <p className={`mx-auto mt-6 max-w-2xl text-base leading-7 md:text-lg ${dark ? "text-bone/64" : "text-ink/62"}`}>
          {copy}
        </p>
      ) : null}
    </motion.div>
  );
}
