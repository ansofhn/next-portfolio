"use client";

import { motion } from "framer-motion";
import { caseStudy } from "@/lib/data";

const columns = [
  { label: "Challenge", items: [caseStudy.challenge], accent: false },
  { label: "Approach", items: caseStudy.approach, accent: false },
  { label: "Deliverables", items: caseStudy.deliverables, accent: false },
  { label: "Outcome", items: caseStudy.outcome, accent: true },
];

export default function CaseStudy() {
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
          Case Study
        </p>
        <h2 className="font-display text-[clamp(1.75rem,4.5vw,3rem)] font-extrabold text-[#1c1b18] tracking-tight leading-tight">
          {caseStudy.title}
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: 0.1 }}
        className="border border-[#1c1b18]/10 rounded-sm p-6 sm:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {columns.map((col) => (
            <div
              key={col.label}
              className={`rounded-sm p-4 ${
                col.accent ? "bg-[#c8a96e]/10" : "bg-[#1c1b18]/[0.03]"
              }`}
            >
              <p
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase mb-2 ${
                  col.accent ? "text-[#997a3d]" : "text-[#1c1b18]/35"
                }`}
              >
                {col.label}
              </p>
              <ul className="space-y-1.5">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className={`text-[13px] leading-relaxed ${
                      col.accent ? "text-[#1c1b18]/70" : "text-[#1c1b18]/55"
                    }`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}