"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { HiArrowDown } from "react-icons/hi2";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-10 max-w-7xl mx-auto">
      {/* Subtle background mark */}
      <div className="pointer-events-none absolute top-32 right-0 sm:right-10 text-[clamp(80px,15vw,180px)] font-bold text-[#1c1b18]/[0.03] leading-none select-none tracking-tighter">
        ANSOF
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-4xl pt-32 pb-20"
      >
        {/* Eyebrow */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase text-[#1c1b18]/50"
        >
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          {siteConfig.name}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[1.02] tracking-tight text-[#1c1b18] text-balance"
        >
          Front End
          <br />
          <span className="text-[#c8a96e]">Developer</span>
          <br />
          based in Indonesia
        </motion.h1>

        {/* Body */}
        <motion.p
          variants={itemVariants}
          className="mt-7 max-w-xl text-base sm:text-lg text-[#1c1b18]/60 leading-relaxed"
        >
          {siteConfig.tagline} I work with React, Next.js, and a sharp eye for
          detail to build products people actually enjoy using.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c1b18] text-[#f7f6f2] text-sm font-semibold rounded-full hover:bg-[#c8a96e] transition-colors duration-200"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1c1b18]/70 hover:text-[#1c1b18] transition-colors"
          >
            About me
            <span className="text-[#c8a96e]">→</span>
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-5 sm:left-10 flex items-center gap-2 text-xs text-[#1c1b18]/30"
      >
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <HiArrowDown />
        </motion.span>
        scroll
      </motion.div>
    </section>
  );
}
