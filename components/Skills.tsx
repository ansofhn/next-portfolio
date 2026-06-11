"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-5 sm:px-10 py-24 bg-[#1c1b18] text-[#f7f6f2]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#c8a96e] mb-3 flex items-center gap-2">
            <span className="inline-block w-6 h-px bg-[#c8a96e]" />
            Capabilities
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight leading-tight">
            Skills &amp; Tools
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 mb-5 pb-3 border-b border-white/10">
                {group.category}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-white/70"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#c8a96e] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
