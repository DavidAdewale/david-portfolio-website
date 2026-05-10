"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectImageProps = {
  alt: string;
  src: string;
  className?: string;
  priority?: boolean;
  tone?: "dark" | "light";
};

export default function ProjectImage({
  alt,
  src,
  className = "",
  priority = false,
  tone = "light"
}: ProjectImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [1.045, 1, 1.035]);

  return (
    <motion.div
      ref={ref}
      className={`self-start overflow-hidden rounded-[8px] border p-2 shadow-[0_28px_90px_rgba(17,16,14,0.14)] ${
        tone === "dark" ? "border-bone/10 bg-bone/[0.045]" : "border-ink/10 bg-ink/[0.035]"
      } ${className}`}
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        style={{ scale }}
        className="relative aspect-[16/11] overflow-hidden rounded-[6px] bg-ink/5 md:aspect-[16/10]"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 768px) 56vw, 100vw"
          className="object-cover object-top"
        />
      </motion.div>
    </motion.div>
  );
}
