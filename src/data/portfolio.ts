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
  caseStudy: {
    highlights: readonly string[];
    architecture: readonly {
      title: string;
      description: string;
    }[];
    decisions: readonly {
      title: string;
      description: string;
    }[];
  };
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
    portraitImage: "/images/vinit-authentic-portrait.webp",
    portraitAlt: "Vinit Raj smiling at the camera",
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
      caseStudy: {
        highlights: [
          "Customer accounts and persistent carts",
          "Made-to-order product and order-request flows",
          "Separate customer and staff authentication",
          "Role-based permissions and audit records",
        ],
        architecture: [
          {
            title: "Customer experience",
            description:
              "A React storefront presents the catalogue and coordinates account, cart, and order-request states.",
          },
          {
            title: "Application service",
            description:
              "Express APIs connect product discovery, customer workflows, orders, and staff operations.",
          },
          {
            title: "Data foundation",
            description:
              "Prisma provides typed access to PostgreSQL for catalogue, identity, permissions, and order data.",
          },
          {
            title: "Operational control",
            description:
              "A separated administration surface applies staff roles and records sensitive actions for review.",
          },
        ],
        decisions: [
          {
            title: "Separate the trust boundaries",
            description:
              "Customer and administrative authentication are isolated so public commerce flows do not share the staff security boundary.",
          },
          {
            title: "Model intent before fulfilment",
            description:
              "Made-to-order purchases become explicit order requests, preserving the operational step between selection and fulfilment.",
          },
          {
            title: "Make operations traceable",
            description:
              "Role checks and audit records keep staff actions understandable as the operational surface expands.",
          },
        ],
      },
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
      caseStudy: {
        highlights: [
          "Role-aware product and category management",
          "User administration and permission boundaries",
          "Audit history and operational review",
          "Exports and recycle-bin recovery",
        ],
        architecture: [
          {
            title: "Role-aware workspace",
            description:
              "The React interface presents only the catalogue operations available to the signed-in user.",
          },
          {
            title: "Operational API",
            description:
              "Express services coordinate products, categories, users, audit activity, exports, and recovery flows.",
          },
          {
            title: "Consistent data access",
            description:
              "Prisma and PostgreSQL provide a structured foundation for connected records and recoverable state changes.",
          },
          {
            title: "Review and output",
            description:
              "Audit trails and exports turn catalogue activity into information that operators can inspect and use.",
          },
        ],
        decisions: [
          {
            title: "Design permissions into the workflow",
            description:
              "Roles shape available actions at the interface and service layers instead of being added as a superficial gate.",
          },
          {
            title: "Prefer recovery over silent deletion",
            description:
              "Recycle-bin behaviour protects operators from accidental loss while keeping catalogue maintenance efficient.",
          },
          {
            title: "Treat auditability as a feature",
            description:
              "Operational changes remain reviewable, improving accountability and making support work easier to reason about.",
          },
        ],
      },
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
      caseStudy: {
        highlights: [
          "Secured job intake and progress tracking",
          "Isolated Selenium browser processes",
          "Atomic downloadable report generation",
          "Restart recovery and cancellation safeguards",
        ],
        architecture: [
          {
            title: "Job intake",
            description:
              "The React interface submits product-latching work and exposes clear progress and completion states.",
          },
          {
            title: "Controlled orchestration",
            description:
              "Node.js services validate work, coordinate execution, and protect the boundaries around seller data.",
          },
          {
            title: "Isolated automation",
            description:
              "Python and Selenium workers run browser-heavy tasks in separate processes so one job cannot destabilise the rest.",
          },
          {
            title: "Durable output",
            description:
              "Results are written atomically and preserved through interruption, cancellation, or application restart.",
          },
        ],
        decisions: [
          {
            title: "Isolate expensive work",
            description:
              "Browser processes are separated from the application service to contain memory pressure and automation failures.",
          },
          {
            title: "Preserve useful partial progress",
            description:
              "The reporting flow protects completed work instead of discarding an entire run when a later item fails.",
          },
          {
            title: "Design cancellation as a state transition",
            description:
              "Cancellation safeguards coordinate process shutdown and reporting rather than abruptly terminating the job.",
          },
        ],
      },
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
      caseStudy: {
        highlights: [
          "Repeatable EC2 web-server configuration",
          "HAProxy round-robin traffic distribution",
          "Automated Apache HTTPD backends",
          "Verified horizontal scale-out workflow",
        ],
        architecture: [
          {
            title: "Automation control",
            description:
              "An Ansible controller applies repeatable configuration from inventory and playbooks to the target fleet.",
          },
          {
            title: "Traffic entry point",
            description:
              "HAProxy accepts incoming requests and distributes them across the available backend servers.",
          },
          {
            title: "Web-server fleet",
            description:
              "Apache HTTPD runs on multiple AWS EC2 instances configured through the same automation workflow.",
          },
          {
            title: "Scale-out path",
            description:
              "A newly provisioned node is configured consistently and added to the load-balancing pool for verification.",
          },
        ],
        decisions: [
          {
            title: "Make configuration repeatable",
            description:
              "Playbooks replace manual server setup, reducing drift between the load balancer and backend instances.",
          },
          {
            title: "Separate traffic from serving",
            description:
              "HAProxy owns distribution while Apache nodes focus on serving responses, creating a clear scaling boundary.",
          },
          {
            title: "Verify scale through behaviour",
            description:
              "The project confirms round-robin distribution before and after adding another backend to the fleet.",
          },
        ],
      },
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
