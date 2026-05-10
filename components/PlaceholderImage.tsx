"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type PlaceholderImageProps = {
  label: string;
  tone?: "dark" | "light";
  className?: string;
};

export default function PlaceholderImage({
  label,
  tone = "dark",
  className = ""
}: PlaceholderImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [1.04, 1, 1.03]);

  return (
    <motion.div
      ref={ref}
      className={`overflow-hidden rounded-[8px] border ${tone === "dark" ? "border-bone/10 bg-bone/[0.045]" : "border-ink/10 bg-ink/[0.04]"} ${className}`}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ y, scale }}
        className={`flex min-h-[320px] items-center justify-center p-8 md:min-h-[520px] ${tone === "dark" ? "text-bone" : "text-ink"}`}
      >
        <div className="w-full max-w-3xl rounded-[8px] border border-current/10 bg-current/[0.035] p-6">
          <div className="mb-14 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-current/22" />
            <span className="h-2.5 w-2.5 rounded-full bg-current/16" />
            <span className="h-2.5 w-2.5 rounded-full bg-current/10" />
          </div>
          <p className="text-center font-serif text-3xl leading-none md:text-6xl">{label}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
