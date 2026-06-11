export const siteConfig = {
  name: "Ansof Habibunnadjar",
  role: "Business Analyst | Software Developer",
  tagline: "Building fast, accessible, and beautifully crafted web experiences.",
  bio: "Over the past 3 years as a Front End Developer, I've partnered with companies and early-stage startups to design and ship digital products that are both visually sharp and technically sound. I specialise in React and Next.js, and I care deeply about performance and user experience.",
  email: "ansofhn5@gmail.com",
  phone: "085692751958",
  location: "Bogor, Indonesia",
  socials: {
    github: "https://github.com/ansofhn",
    instagram: "https://www.instagram.com/ansofhn",
    linkedin: "https://www.linkedin.com/in/ansofhn/",
  },
  copyright: `© ${new Date().getFullYear()} Ansof Habibunnadjar`,
};

export type Project = {
  id: string;
  title: string;
  category: string;
  period: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
};

export const featuredProjects: Project[] = [
  {
    id: "trustlink",
    title: "Trustlink CDI",
    category: "Identity Verification Platform",
    period: "Jan 2023 – Present",
    description:
      "End-to-end identity verification platform for corporate clients. Designed and built the front-end dashboard, document-upload flow, and real-time status tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/TrustlinkCDI.png",
  },
  {
    id: "g11game",
    title: "G11 Game",
    category: "Game Development",
    period: "Sep 2022 – Mar 2023",
    description:
      "Garuda Eleven — a football management game web app with live match simulation, squad management, and league standings.",
    tags: ["React", "Framer Motion", "REST API"],
    image: "/assets/G11.png",
  },
  {
    id: "encrease",
    title: "Encrease",
    category: "Entrepreneurial Creator School",
    period: "Dec 2022 – Feb 2023",
    description:
      "Marketing and landing site for an entrepreneurship programme targeting Gen-Z creators. Focused on conversion rate and mobile-first design.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/assets/Encrease.png",
  },
  {
    id: "movsoft",
    title: "Movsoft",
    category: "Video Streaming Platform",
    period: "Nov 2022 – Dec 2022",
    description:
      "A movie discovery and streaming-link aggregator with search, filtering by genre, and a watchlist feature.",
    tags: ["React", "TMDB API", "Tailwind CSS"],
    image: "/assets/Movsoft.png",
  },
  {
    id: "joss-laundry",
    title: "Joss Laundry",
    category: "UMKM Business System",
    period: "Sep 2022 – Oct 2022",
    description:
      "Order management and invoice system for a local laundry SME. Includes order tracking, customer records, and print-ready receipts.",
    tags: ["Next.js", "Tailwind CSS"],
    image: "/assets/Josslaundry.png",
  },
  {
    id: "chikufarm",
    title: "Chikufarm",
    category: "Farm Management System",
    period: "May 2022 – Aug 2022",
    description:
      "Dashboard for a chicken farm operation — tracks flock health, feed logs, mortality rates, and weight milestones.",
    tags: ["React", "Chart.js", "Tailwind CSS"],
    image: "/assets/Chikufarm.png",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "Figma", "Vercel", "VS Code"],
  },
  {
    category: "Practices",
    items: ["Responsive Design", "Performance Optimisation", "SEO", "Accessibility (a11y)"],
  },
];
