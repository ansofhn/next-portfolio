export const siteConfig = {
  name: "Ansof Habibunnadjar",
  role: "IT Business Analyst & Software Developer",
  tagline:
    "Bridging business needs and technology solutions through requirement analysis, stakeholder collaboration, and data-driven decision making.",
  bio: "Over the past several years, I have been working closely with business stakeholders, development teams, and end users to transform business challenges into digital solutions.",
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

export type BAProject = {
  id: string;
  title: string;
  period: string;
  role: string;
  scope: string[];
  deliverables: string[];
  impact: string;
};

export const baProjects: BAProject[] = [
  {
    id: "BA-002",
    title: "DIDX - mTOYOTA & DXMI Platform",
    period: "Nov 2024 – Present",
    role: "Business Analyst",
    scope: [
      "Customer-facing (mTOYOTA) platform",
      "Dealer-facing (DXMI) platform",
      "Responsible for requirement gathering",
      "Business process design",
      "Dashboard metric definition",
      "Stakeholder alignment",
      "End-to-end feature delivery across customer registration, vehicle ownership, appraisal, trade-in, and analytics dashboards",
    ],
    deliverables: [
      "Functional Specification Documents (FSD)",
      "Business Requirement Analysis",
      "User Acceptance Criteria (Gherkin)",
      "Business Rules & Policy Documentation",
      "Dashboard Metric Definitions",
      "KPI Calculation Logic",
      "Data Mapping & Validation Rules",
      "User Stories & Jira Tickets",
      "Process Flow Diagrams",
      "Change Request Documentation",
      "UAT Support & Validation",
    ],
    impact:
      "Delivered enhancements across mTOYOTA and DXMI platforms used by customers and Toyota dealer",
  },
  {
    id: "BA-001",
    title: "Digiroom Auto2000",
    period: "May 2023 – Oct 2024",
    role: "Business Analyst",
    scope: [
      "Responsible for requirement analysis",
      "Business process improvement",
      "Digital sales journey enhancement",
      "Collaborated with BU, product owners, UI/UX, developers, and QA to define and deliver operational features",
    ],
    deliverables: [
      "Business Requirements Documents (BRD)",
      "Functional Specification Documents (FSD)",
      "User Stories & Acceptance Criteria",
      "Business Rules Documentation",
      "Process Flow & User Journey Mapping",
      "Change Request Analysis",
      "UAT Support & Validation",
    ],
    impact:
      "Improved digital vehicle sales journey and customer acquisition processes.",
  },
];

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

export const technicalProjects: Project[] = [
  {
    id: "g11game",
    title: "G11 Game",
    category: "Game Development",
    period: "Apr 2022 – May 2024",
    description:
      "Garuda Eleven — a football management game web app with live match simulation, squad management, and league standings.",
    tags: ["React", "Framer Motion", "REST API"],
    image: "/assets/G11.png",
  },
  {
    id: "trustlink",
    title: "Trustlink CDI",
    category: "Identity Verification Platform",
    period: "Apr 2022 – May 2024",
    description:
      "End-to-end identity verification platform for corporate clients. Designed and built the front-end dashboard, document-upload flow, and real-time status tracking.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/assets/TrustlinkCDI.png",
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
    tags: ["Next.js", "TMDB API", "Tailwind CSS"],
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
    tags: ["Next.js", "Tailwind CSS"],
    image: "/assets/Chikufarm.png",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  {
    category: "Business Analysis",
    items: [
      "Requirement Gathering",
      "Stakeholder Management",
      "Gap Analysis",
      "Process Improvement",
      "User Story Writing",
      "Gherkin UAC",
      "UAT Support",
      "Root Cause Analysis",
    ],
  },
  {
    category: "Documentation",
    items: [
      "BRD",
      "FSD",
      "Business Rules",
      "Jira Ticketing",
      "Confluence",
      "Wireframing",
    ],
  },
  {
    category: "Analytics",
    items: [
      "SQL",
      "Dashboard Metrics Definition",
      "Data Validation",
      "Excel",
      "Power BI",
    ],
  },
  {
    category: "Technical",
    items: ["React", "Next.js", "Tailwind CSS", "HTML/CSS", "REST API", "Git"],
  },
];

export const deliverables: string[] = [
  "Business Requirement Document (BRD)",
  "Functional Specification Document (FSD)",
  "User Acceptance Criteria (Gherkin)",
  "Jira User Stories",
  "Business Rules",
  "Dashboard Metric Definitions",
  "Process Flow Diagrams",
  "UAT Support Documents",
  "Gap Analysis",
  "Change Request Documentation",
];

export const impactMetrics = [
  { value: "[ISI: 20+]", label: "Stakeholder workshops facilitated" },
  { value: "[ISI: 50+]", label: "Jira user stories & UAC scenarios delivered" },
  { value: "[ISI: 5]", label: "Enterprise dashboards with defined metrics" },
];

export type CaseStudy = {
  title: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  outcome: string[];
};

export const caseStudy: CaseStudy = {
  title: "Optimizing Trade-In Journey",

  challenge:
    "The trade-in process involved multiple stakeholders and touchpoints, creating inconsistencies in lead handling, status tracking, and customer visibility throughout the journey.",

  approach: [
    "Conducted stakeholder workshops with business users and operational teams",
    "Mapped the end-to-end trade-in customer journey",
    "Analyzed business process gaps and system dependencies",
    "Defined business rules, statuses, and lead management workflows",
    "Created functional specifications and acceptance criteria",
  ],

  deliverables: [
    "Business Process Flow",
    "Functional Specification Document (FSD)",
    "User Acceptance Criteria (UAC)",
    "Business Rules Documentation",
  ],

  outcome: [
    "Improved visibility of trade-in lead progression for customers and internal teams",
    "Standardized trade-in status definitions across systems",
    "Reduced ambiguity during development and testing phases",
    "Enabled a more seamless customer experience within the mTOYOTA ecosystem",
  ],
};
