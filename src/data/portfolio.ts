export type PortfolioIcon =
  "code" | "layers" | "server" | "workflow" | "sparkles" | "cpu";

export interface NavigationItem {
  label: string;
  href: string;
  sectionId: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  purpose: string;
  category: string;
  status: "Concept" | "In development" | "Completed";
  role: string;
  stack: readonly string[];
  challenge: string;
  outcome: string;
  year: string;
  liveUrl: string;
  githubUrl: string;
  caseStudyUrl: string;
  accent: "ice" | "graphite" | "cobalt" | "silver" | "amber";
}

export interface FocusArea {
  title: string;
  description: string;
  technologies: readonly string[];
  icon: PortfolioIcon;
}

export interface JourneyItem {
  year: string;
  title: string;
  context: string;
  description: string;
  category: string;
  link: string;
}

export interface OverviewCard {
  title: string;
  description: string;
  href: string;
  icon: "overview" | "work" | "engineering" | "journey" | "about";
}

// Edit this single object to personalise the entire portfolio.
// Empty optional links are hidden automatically.
export const portfolio = {
  seo: {
    title: "Vinit Raj — Software Engineer",
    description:
      "Portfolio of Vinit Raj, a software engineer building thoughtful digital products, automation platforms, and production systems.",
  },
  profile: {
    name: "Vinit Raj",
    monogram: "VR",
    role: "Software Engineer",
    currentRole: "Software Engineer",
    currentLearningFocus:
      "Product engineering, infrastructure automation, and interfaces",
    eyebrow: "SOFTWARE ENGINEER · CREATIVE TECHNOLOGIST",
    headline: "Engineering thoughtful digital experiences.",
    description:
      "I build reliable, intuitive, and carefully crafted software at the intersection of engineering, product thinking, and design.",
    availability: "Open to meaningful opportunities",
    location: "Based in India · Building for the world",
    portraitImage: "/images/vinit-hero-shared-v4.webp",
    portraitAlt: "Portrait of Vinit Raj",
    principle: "Good engineering should feel clear, reliable, and intentional.",
    longView:
      "The long view: combine technical thinking with meaningful public impact.",
    interests: [
      { id: "travel", label: "World travel" },
      { id: "mobility", label: "Bikes & cars" },
      { id: "systems", label: "Building systems" },
      { id: "impact", label: "Public impact" },
    ],
    about: [
      "I’m Vinit Raj, a software engineer interested in building technology that is useful, reliable, and carefully considered. I enjoy working across software, interfaces, infrastructure automation, and production systems.",
      "Outside engineering, I’m passionate about travelling, bikes, cars, and understanding how ambitious ideas become real systems. My long-term ambition is to serve the nation as an IAS officer, combining technical thinking with public impact.",
    ],
  },
  navigation: [
    { label: "Work", href: "#work", sectionId: "work" },
    {
      label: "Engineering",
      href: "#engineering",
      sectionId: "engineering",
    },
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ] satisfies NavigationItem[],
  overviewCards: [
    {
      title: "Overview",
      description: "A concise view of purpose, craft, and direction.",
      href: "#glance",
      icon: "overview",
    },
    {
      title: "Selected Work",
      description: "Live products and operational systems built for real use.",
      href: "#work",
      icon: "work",
    },
    {
      title: "Engineering",
      description: "Systems, interfaces, automation, and production delivery.",
      href: "#engineering",
      icon: "engineering",
    },
    {
      title: "Journey",
      description: "Curiosity, deliberate practice, and the long view.",
      href: "#journey",
      icon: "journey",
    },
    {
      title: "About",
      description: "The interests and ambitions beyond the code.",
      href: "#about",
      icon: "about",
    },
  ] satisfies OverviewCard[],
  socials: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "LeetCode", href: "" },
    { label: "X", href: "" },
  ] satisfies SocialLink[],
  contact: {
    email: "vinitraj@icloud.com",
    resumeUrl: "",
    heading: "Let’s build something meaningful.",
    description:
      "I’m interested in thoughtful software, ambitious technical projects, and opportunities where engineering can create measurable value.",
  },
  // Replace these non-numeric values when verified figures are available.
  metrics: [
    {
      label: "Experience",
      value: "Growing",
      detail: "Learning through deliberate practice",
    },
    {
      label: "Projects",
      value: "In progress",
      detail: "Ideas becoming working systems",
    },
    {
      label: "Technologies",
      value: "Expanding",
      detail: "Choosing tools for the problem",
    },
    {
      label: "Problem solving",
      value: "Continuous",
      detail: "Improving one problem at a time",
    },
  ] satisfies Metric[],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "APIs",
    "Databases",
    "Automation",
    "Prototyping",
  ],
  projects: [
    {
      slug: "huee",
      title: "Huee",
      image: "/images/projects/huee-commerce-platform.webp",
      imageAlt:
        "Cinematic visualization of Huee's storefront, shopping cart, and secure administration platform",
      purpose:
        "A made-to-order product catalogue with customer accounts, persistent carts, order requests, and a secure commerce administration platform.",
      category: "Commerce platform",
      status: "In development",
      role: "Full-stack product engineering",
      stack: ["React", "Express", "PostgreSQL", "Prisma"],
      challenge:
        "Unify a polished public storefront, customer commerce flows, and granular staff operations without compromising the security boundary.",
      outcome:
        "Built a full-stack catalogue with isolated customer and admin authentication, role-based permissions, audit records, and production deployment runbooks.",
      year: "2026",
      liveUrl: "https://huee.spaceway.io",
      githubUrl: "https://github.com/vinitraaaj/Huee",
      caseStudyUrl: "",
      accent: "ice",
    },
    {
      slug: "catalog",
      title: "Catalog",
      image: "/images/projects/catalog-operations-platform.webp",
      imageAlt:
        "Cinematic visualization of Catalog's product workflow, taxonomy, review, and export system",
      purpose:
        "A role-based internal system for managing product records, users, audit trails, exports, and operational review workflows.",
      category: "Internal operations platform",
      status: "In development",
      role: "Full-stack engineering",
      stack: ["React", "Express", "PostgreSQL", "Prisma"],
      challenge:
        "Turn a multi-role product workflow into a dependable workspace with clear permissions, traceable actions, and efficient catalogue operations.",
      outcome:
        "Delivered product and category management, user administration, audit logs, exports, recycle-bin recovery, and tested operational flows.",
      year: "2026",
      liveUrl: "https://testing.niddleman.com",
      githubUrl: "",
      caseStudyUrl: "",
      accent: "graphite",
    },
    {
      slug: "latching",
      title: "Latching",
      image: "/images/projects/latching-automation-platform.webp",
      imageAlt:
        "Cinematic visualization of Latching's secure browser-automation pipeline and report output",
      purpose:
        "A production platform that automates Flipkart product-latching jobs, tracks progress, and delivers resilient downloadable reports.",
      category: "Marketplace automation",
      status: "In development",
      role: "Platform and automation engineering",
      stack: ["React", "Node.js", "Python", "Selenium"],
      challenge:
        "Run browser automation safely and reliably while protecting seller data, preserving partial results, and controlling resource-heavy jobs.",
      outcome:
        "Built a secured job platform with isolated browser processes, atomic reports, restart recovery, cancellation safeguards, and production health checks.",
      year: "2026",
      liveUrl: "https://latching.spaceway.io",
      githubUrl: "",
      caseStudyUrl: "",
      accent: "cobalt",
    },
    {
      slug: "ansible-load-balanced-webservers",
      title: "Automating Web Servers with Ansible",
      image: "/images/projects/ansible-load-balancing.webp",
      imageAlt:
        "Cinematic infrastructure visualization of an Ansible controller, load balancer, backend web servers, and scale-out node",
      purpose:
        "An automated AWS web-server fleet with round-robin traffic distribution and repeatable horizontal scaling.",
      category: "Infrastructure automation",
      status: "Completed",
      role: "Cloud and automation engineering",
      stack: ["Ansible", "AWS EC2", "HAProxy", "Apache HTTPD"],
      challenge:
        "Configure a load balancer and multiple backend web servers consistently, then make newly provisioned nodes join the pool with one repeatable workflow.",
      outcome:
        "Implemented HAProxy round-robin balancing, automated Apache backends through Ansible playbooks, and verified scale-out by adding another server to the fleet.",
      year: "2023",
      liveUrl: "",
      githubUrl: "",
      caseStudyUrl: "/documents/server-automation-ansible.pdf",
      accent: "amber",
    },
  ] satisfies Project[],
  focusAreas: [
    {
      title: "Product Engineering",
      description:
        "Connecting user needs, technical choices, and careful delivery into one coherent product.",
      technologies: ["TypeScript", "Next.js", "APIs"],
      icon: "layers",
    },
    {
      title: "Frontend Systems",
      description:
        "Building accessible interfaces with durable patterns, responsive behaviour, and clear states.",
      technologies: ["React", "CSS", "Design systems"],
      icon: "code",
    },
    {
      title: "Backend Development",
      description:
        "Learning to shape reliable services, data flows, and integrations with pragmatic boundaries.",
      technologies: ["Node.js", "Databases", "REST"],
      icon: "server",
    },
    {
      title: "Automation",
      description:
        "Removing repetitive work through understandable workflows that remain easy to inspect.",
      technologies: ["Scripts", "APIs", "Workflows"],
      icon: "workflow",
    },
    {
      title: "Interaction & Motion",
      description:
        "Using animation to clarify hierarchy, feedback, and progression rather than decorate.",
      technologies: ["Framer Motion", "Prototyping", "Accessibility"],
      icon: "sparkles",
    },
    {
      title: "Cloud & Infrastructure",
      description:
        "Automating repeatable deployments, traffic routing, service operation, and production safeguards across cloud systems.",
      technologies: ["AWS", "Ansible", "Nginx"],
      icon: "server",
    },
  ] satisfies FocusArea[],
  // Replace these visibly marked entries with verified education and work history.
  journey: [
    {
      year: "Add year",
      title: "Add your first milestone",
      context: "Education or early project",
      description:
        "Replace this entry with a verified starting point in your journey.",
      category: "Placeholder",
      link: "",
    },
    {
      year: "Add year",
      title: "Add your next chapter",
      context: "Role, project, or achievement",
      description:
        "Use this space for a factual milestone and the lesson it shaped.",
      category: "Placeholder",
      link: "",
    },
    {
      year: "Now",
      title: "Continuous learning",
      context: "Current focus",
      description:
        "Deepening product engineering, automation, interfaces, and production infrastructure work.",
      category: "Learning",
      link: "",
    },
  ] satisfies JourneyItem[],
  principles: [
    "Clarity over complexity",
    "Reliability before scale",
    "Details are part of the product",
    "Motion should have purpose",
    "Keep learning",
    "Build for real people",
  ],
} as const;

export type Portfolio = typeof portfolio;
