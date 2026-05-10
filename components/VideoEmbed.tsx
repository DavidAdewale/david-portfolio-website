"use client";

import { motion } from "framer-motion";

type VideoEmbedProps = {
  title: string;
  src: string;
};

export default function VideoEmbed({ title, src }: VideoEmbedProps) {
  return (
    <motion.div
      className="overflow-hidden rounded-[8px] border border-bone/10 bg-bone/[0.045] p-2 shadow-[0_30px_110px_rgba(0,0,0,0.22)]"
      initial={{ opacity: 0, y: 34, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative aspect-video overflow-hidden rounded-[6px] bg-ink">
        <iframe
          className="absolute inset-0 h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}
