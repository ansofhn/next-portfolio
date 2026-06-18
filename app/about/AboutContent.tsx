"use client";

import { motion, Variants } from "framer-motion";
import { siteConfig, skills } from "@/lib/data";

const experience = [
  {
    company: "Astra Digital International",
    role: "Business Analyst",
    period: "May 2023 – Present",
    description:
      "Facilitated requirement gathering, produced FSD/BRD/UAC, and aligned business and engineering teams across automotive digital initiatives.",
    responsibilities: [
      "Facilitated requirement gathering workshops with business stakeholders",
      "Produced FSD, BRD, and UAC using Gherkin standards",
      "Defined dashboard metrics, business rules, and KPI calculations",
      "Coordinated alignment between business users, developers, QA, and UI/UX",
      "Managed change requests and backlog refinement using Jira",
      "Conducted impact analysis and UAT support",
    ],
  },
  {
    company: "PT Adyatma Cendekia Sinergi Abadi",
    role: "Frontend Developer",
    period: "May 2022 – May 2024",
    description:
      "Developed responsive and interactive user interfaces for web applications using modern JavaScript frameworks.",
    responsibilities: [
      "Built responsive user interfaces using HTML, CSS, and JavaScript",
      "Translated UI/UX designs into interactive web pages",
      "Optimized front-end performance and accessibility",
      "Collaborated with design and back-end teams on feature integration",
      "Performed debugging, testing, and cross-browser validation",
      "Maintained front-end documentation and development standards",
    ],
  },
];

const education = [
  {
    school: "Universitas Indraprasta PGRI",
    field: "Bachelor of Computer Science",
    period: "2023 – 2027",
  },
  {
    school: "SMKN 1 Cibinong",
    field: "Sistem Informatika Jaringan dan Aplikasi",
    period: "2019 – 2023",
  },
];

export default function AboutContent() {
  const itemAnim: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <div className="px-5 sm:px-10 max-w-7xl mx-auto pt-36 pb-20">
      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="mb-20"
      >
        <p className="text-xs font-semibold tracking-[0.25em] uppercase text-[#1c1b18]/40 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-[#c8a96e]" />
          About me
        </p>
        <h1 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold tracking-tight leading-tight text-[#1c1b18]">
          The person behind
          <br />
          the <span className="text-[#c8a96e]">code</span>
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 gap-20 lg:grid-cols-5">
        {/* Bio column */}
        <div className="lg:col-span-3 space-y-16">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55 }}
            className="space-y-5"
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1c1b18]/30 border-b border-[#1c1b18]/10 pb-3">
              Bio
            </h2>
            <p className="text-base sm:text-lg text-[#1c1b18]/70 leading-relaxed">
              {siteConfig.bio}
            </p>
            <p className="text-base sm:text-lg text-[#1c1b18]/70 leading-relaxed">
              I specialize in requirement elicitation, Functional Specification
              Documents (FSD), User Acceptance Criteria (UAC), dashboard metric
              definitions, and stakeholder alignment across automotive digital
              initiatives.
              <br />
              <br />
              With a technical background, I bridge the gap between business and
              engineering teams to ensure solutions are practical, measurable,
              and user-centric.
            </p>
          </motion.div>

          {/* Experience */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1c1b18]/30 border-b border-[#1c1b18]/10 pb-3">
              Experience
            </h2>
            {experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                custom={i}
                variants={itemAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="group grid grid-cols-[1fr_auto] gap-4 p-6 border border-[#1c1b18]/8 hover:border-[#c8a96e]/40 rounded-sm transition-colors duration-200"
              >
                <div className="space-y-1">
                  <p className="font-bold text-[#1c1b18]">{exp.company}</p>
                  <p className="text-sm text-[#1c1b18]/50">{exp.role}</p>
                  <p className="text-sm text-[#1c1b18]/60 mt-2 leading-relaxed">
                    {exp.description}
                    {exp.responsibilities && (
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j} className="text-sm text-[#1c1b18]/60">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-[#1c1b18]/30 whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1c1b18]/30 border-b border-[#1c1b18]/10 pb-3">
              Education
            </h2>
            {education.map((edu, i) => (
              <motion.div
                key={edu.school}
                custom={i}
                variants={itemAnim}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="p-6 border border-[#1c1b18]/8 rounded-sm"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <p className="font-bold text-[#1c1b18]">{edu.school}</p>
                    <p className="text-sm text-[#1c1b18]/50 mt-0.5">
                      {edu.field}
                    </p>
                  </div>
                  <span className="text-xs text-[#1c1b18]/30 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills sidebar */}
        <aside className="lg:col-span-2 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="sticky top-28"
          >
            <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#1c1b18]/30 border-b border-[#1c1b18]/10 pb-3 mb-8">
              Skills
            </h2>
            <div className="space-y-8">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-semibold tracking-widest uppercase text-[#c8a96e] mb-3">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-[#1c1b18]/5 text-[#1c1b18]/60 border border-[#1c1b18]/8"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact quick info */}
            <div className="mt-10 p-6 bg-[#1c1b18] rounded-sm space-y-3">
              <p className="text-xs font-semibold tracking-widest uppercase text-[#c8a96e]">
                Contact
              </p>
              <p className="text-sm text-white/60">{siteConfig.email}</p>
              <p className="text-sm text-white/60">{siteConfig.location}</p>
            </div>
          </motion.div>
        </aside>
      </div>
    </div>
  );
}
