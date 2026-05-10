"use client";

import { motion } from "framer-motion";

type AnimatedTextProps = {
  lines: string[];
  className?: string;
};

export default function AnimatedText({ lines, className = "" }: AnimatedTextProps) {
  return (
    <div className={className} aria-label={lines.join(" ")}>
      {lines.map((line, index) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: 0.14 * index,
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
