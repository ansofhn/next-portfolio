"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/data";
import { HiArrowUpRight } from "react-icons/hi2";

type Props = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col bg-[#1c1b18] overflow-hidden rounded-sm"
    >
      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#302f2c]">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[60px] font-bold text-white/5 select-none">
              {project.title.charAt(0)}
            </span>
          </div>
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1b18] via-[#1c1b18]/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8 gap-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-[#c8a96e] mb-1">
              {project.period}
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-sm text-white/40 mt-0.5">{project.category}</p>
          </div>
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 p-2 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/40 transition-colors"
            >
              <HiArrowUpRight className="w-4 h-4" />
            </Link>
          )}
        </div>

        <p className="text-sm text-white/50 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-white/5 text-white/40 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
