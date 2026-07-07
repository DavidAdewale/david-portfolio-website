"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PlaceholderImage from "./PlaceholderImage";
import ProjectImage from "./ProjectImage";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  href: string;
  imageLabel: string;
  imageSrc?: string;
  liveUrl?: string;
  liveLabel?: string;
  index?: number;
};

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  imageLabel,
  imageSrc,
  liveUrl,
  liveLabel = "Live Site",
  index = 0
}: ProjectCardProps) {
  return (
    <motion.article
      className="grid gap-8 border-t border-ink/10 py-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14 md:py-16"
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col justify-between gap-10 md:py-4">
        <div>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.28em] text-clay">
            0{index + 1} / Selected Work
          </p>
          <h3 className="max-w-xl font-serif text-4xl leading-[1.02] text-ink md:text-6xl">
            {title}
          </h3>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/64 md:text-lg">{description}</p>
        </div>
        <div>
          <motion.div
            className="mb-7 flex flex-wrap gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.045, delayChildren: 0.22 } }
            }}
          >
            {tags.map((tag) => (
              <motion.span
                key={tag}
                className="rounded-full border border-ink/10 px-3 py-1.5 text-xs font-medium text-ink/66"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
          <div className="flex flex-wrap gap-3">
            <Link
              href={href}
              className="inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-bone transition hover:bg-clay"
            >
              View Case Study
            </Link>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-full border border-ink/12 px-5 py-3 text-sm font-semibold text-ink transition hover:border-clay hover:text-clay"
              >
                {liveLabel}
              </a>
            ) : null}
          </div>
        </div>
      </div>
      {imageSrc ? (
        <ProjectImage alt={imageLabel} src={imageSrc} />
      ) : (
        <PlaceholderImage label={imageLabel} tone="light" />
      )}
    </motion.article>
  );
}
