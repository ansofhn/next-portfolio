"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/lib/data";

export default function Callback() {
  return (
    <section className="px-5 sm:px-10 py-28 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-sm bg-[#1c1b18] px-8 py-16 sm:px-16 sm:py-20 text-[#f7f6f2]"
      >
        {/* Background typography mark */}
        <span className="pointer-events-none absolute right-0 bottom-0 text-[clamp(60px,12vw,140px)] font-extrabold text-white/[0.03] leading-none select-none pr-4 pb-2">
          LET'S GO
        </span>

        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c8a96e] mb-4 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          Open for work
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-tight tracking-tight text-balance mb-8 max-w-xl">
          Have a project in mind? Let's build it.
        </h2>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#c8a96e] text-[#1c1b18] text-sm font-bold rounded-full hover:bg-white transition-colors duration-200"
        >
          Get in touch →
        </Link>

        {/* Contact snippet */}
        <p className="mt-6 text-xs text-white/30">
          or reach me directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-white/50 underline hover:text-white transition-colors"
          >
            {siteConfig.email}
          </a>
        </p>
      </motion.div>
    </section>
  );
}
