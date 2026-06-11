"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.socials.github, label: "GitHub" },
  { href: siteConfig.socials.instagram, label: "Instagram" },
  { href: siteConfig.socials.linkedin, label: "LinkedIn" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const overlayVariants = {
    hidden: { opacity: 0, y: "-100%" },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.32, 0.72, 0, 1] },
    },
    exit: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.35, ease: [0.32, 0.72, 0, 1], delay: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 30 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.08, duration: 0.4, ease: "easeOut" },
    }),
    exit: (i: number) => ({
      opacity: 0,
      y: 20,
      transition: { delay: i * 0.04, duration: 0.2 },
    }),
  };

  return (
    <>
      {/* Main bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#f7f6f2]/95 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-5 mx-auto max-w-7xl sm:px-10">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-10 h-10 font-bold text-sm bg-[#1c1b18] text-[#f7f6f2] rounded-full select-none group-hover:bg-[#c8a96e] transition-colors duration-200">
              AH
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="font-bold text-sm tracking-tight text-[#1c1b18]">
                {siteConfig.name}
              </div>
              <div className="text-[10px] font-medium tracking-widest uppercase text-[#1c1b18]/50">
                {siteConfig.role}
              </div>
            </div>
          </Link>

          {/* Hamburger */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="relative z-50 p-2 rounded-md text-[#1c1b18] hover:bg-[#1c1b18]/5 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block text-white"
                >
                  <HiOutlineXMark className="w-7 h-7" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <HiOutlineBars3 className="w-7 h-7" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#1c1b18] flex flex-col"
          >
            {/* Top spacer for navbar height */}
            <div className="h-20" />

            {/* Menu content */}
            <nav className="flex flex-col items-center justify-center flex-1 gap-1 pb-20">
              <motion.p
                custom={-1}
                variants={linkVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="mb-4 text-xs font-semibold tracking-[0.3em] uppercase text-[#c8a96e]"
              >
                Navigation
              </motion.p>

              {navLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <Link
                    href={href}
                    className={`block text-5xl md:text-6xl font-bold tracking-tight transition-colors duration-150 ${
                      pathname === href
                        ? "text-white"
                        : "text-white/30 hover:text-white"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <div className="w-12 h-px bg-white/10 my-6" />

              {socialLinks.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  custom={navLinks.length + i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                >
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-2xl md:text-3xl font-semibold text-white/30 hover:text-[#c8a96e] transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              exit={{ opacity: 0 }}
              className="text-center pb-8 text-xs text-white/20 tracking-widest"
            >
              {siteConfig.copyright}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
