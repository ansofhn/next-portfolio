"use client";

import { motion } from "framer-motion";
import { baProjects } from "@/lib/data";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";

export default function BAProjects() {
  return (
    <section id="ba-projects" className="px-5 sm:px-10 py-24 lg:py-32 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-16"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1c1b18]/40 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          Business Analysis Work
        </p>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[#1c1b18] tracking-tight leading-tight">
          BA Projects
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {baProjects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[#1c1b18] rounded-sm p-7"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#c8a96e] mb-1.5">
                  {project.period}
                </p>
                <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-snug">
                  {project.title}
                </h3>
              </div>
              <span className="shrink-0 text-[11px] px-2.5 py-1 rounded-full bg-[#c8a96e]/10 text-[#c8a96e] whitespace-nowrap">
                {project.role}
              </span>
            </div>

            {/* Scope + Deliverables */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-2">
                  Scope
                </p>
                <ul className="space-y-1.5">
                  {project.scope.map((s) => (
                    <li key={s} className="text-sm text-white/60 leading-snug">
                      — {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/30 mb-2">
                  Deliverables
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.deliverables.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/55"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact */}
            <div className="flex items-start gap-2.5 pt-4 border-t border-white/10">
              <HiOutlineArrowTrendingUp className="w-4 h-4 text-[#c8a96e] mt-0.5 shrink-0" />
              <p className="text-sm text-white/55 italic leading-relaxed">
                {project.impact}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}