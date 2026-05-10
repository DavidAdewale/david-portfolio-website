"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProfilePortrait() {
  return (
    <motion.div
      className="relative mx-auto mb-10 flex aspect-square w-[min(74vw,20rem)] items-end justify-center overflow-hidden rounded-full border border-gold/35 bg-gold shadow-[0_26px_90px_rgba(184,138,74,0.22)] md:mx-0 md:ml-auto md:mb-14 md:w-[min(30vw,24rem)]"
      initial={{ opacity: 0, y: 34, scale: 0.94, rotate: -2 }}
      animate={{
        opacity: 1,
        y: [0, -10, -4, -13, 0],
        x: [0, 5, -3, 4, 0],
        scale: 1,
        rotate: [-1.2, 0.7, -0.5, 0.9, -1.2]
      }}
      transition={{
        opacity: { duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] },
        scale: { duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] },
        y: { duration: 8.5, repeat: Infinity, ease: "easeInOut" },
        x: { duration: 9.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 10, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,250,242,0.28),transparent_34%),linear-gradient(145deg,rgba(200,111,58,0.34),transparent_62%)]" />
      <motion.div
        className="absolute inset-[8%] rounded-full border border-bone/18"
        animate={{ scale: [1, 1.025, 0.995, 1], opacity: [0.62, 0.82, 0.58, 0.62] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <Image
        src="/david.png"
        alt="Portrait of David Adewale"
        width={900}
        height={900}
        priority
        className="relative z-10 h-[105%] w-[105%] object-contain object-bottom drop-shadow-[0_22px_34px_rgba(17,16,14,0.22)]"
      />
    </motion.div>
  );
}
