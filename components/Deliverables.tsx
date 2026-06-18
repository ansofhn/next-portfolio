"use client";

import { motion } from "framer-motion";
import { deliverables } from "@/lib/data";
import { HiCheck } from "react-icons/hi2";

export default function Deliverables() {
  return (
    <section className="px-5 sm:px-10 py-24 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55 }}
        className="mb-12"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1c1b18]/40 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          What I Deliver
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1c1b18] tracking-tight leading-tight">
          Deliverables
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="bg-[#1c1b18]/[0.03] rounded-sm p-8 sm:p-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {deliverables.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c8a96e]/15 shrink-0">
                <HiCheck className="w-3 h-3 text-[#c8a96e]" />
              </span>
              <span className="text-sm text-[#1c1b18]/75">{item}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}