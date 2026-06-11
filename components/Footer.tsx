import Link from "next/link";
import { siteConfig } from "@/lib/data";
import { FiGithub, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";

const socials = [
  { href: siteConfig.socials.github, icon: FiGithub, label: "GitHub" },
  { href: siteConfig.socials.instagram, icon: FiInstagram, label: "Instagram" },
  { href: siteConfig.socials.linkedin, icon: FiLinkedin, label: "LinkedIn" },
  { href: `mailto:${siteConfig.email}`, icon: FiMail, label: "Email" },
];

const footerLinks = [
  { href: "/", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1b18] text-[#f7f6f2] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 font-bold text-sm bg-[#c8a96e] text-[#1c1b18] rounded-full select-none">
                AH
              </div>
              <div>
                <p className="font-bold text-sm">{siteConfig.name}</p>
                <p className="text-[10px] tracking-widest uppercase text-white/30">
                  {siteConfig.role}
                </p>
              </div>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Building fast, accessible, and beautifully crafted web
              experiences.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
              Navigation
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
              Contact
            </h4>
            <div className="space-y-1 text-sm text-white/50">
              <p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.email}
                </a>
              </p>
              <p>{siteConfig.phone}</p>
              <p>{siteConfig.location}</p>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={href}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="p-2 rounded-full border border-white/10 text-white/40 hover:text-white hover:border-white/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20">{siteConfig.copyright}</p>
          <p className="text-xs text-white/20">
            Made with spells and potions
          </p>
        </div>
      </div>
    </footer>
  );
}
