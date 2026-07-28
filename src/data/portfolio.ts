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

export interface Experiment {
  title: string;
  status: "Concept" | "In development" | "Documenting";
  description: string;
  stack: readonly string[];
  progress: string;
  githubUrl: string;
  notes: string;
  accent: "plotter" | "keyboard" | "dial";
}

// Edit this single object to personalise the entire portfolio.
// Empty optional links are hidden automatically.
export const portfolio = {
  seo: {
    title: "Vinit Raj — Software Engineer",
    description:
      "Portfolio of Vinit Raj, a software engineer building thoughtful digital products, systems, and technical experiments.",
  },
  profile: {
    name: "Vinit Raj",
    monogram: "VR",
    role: "Software Engineer",
    currentRole: "Software Engineer",
    currentLearningFocus: "Product engineering, automation, and interfaces",
    eyebrow: "SOFTWARE ENGINEER · CREATIVE TECHNOLOGIST",
    headline: "Engineering thoughtful digital experiences.",
    description:
      "I build reliable, intuitive, and carefully crafted software at the intersection of engineering, product thinking, and design.",
    availability: "Open to meaningful opportunities",
    location: "Based in India · Building for the world",
    portraitImage: "",
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
      "I’m Vinit Raj, a software engineer interested in building technology that is useful, reliable, and carefully considered. I enjoy working across software, interfaces, automation, and hands-on technical experiments.",
      "Outside engineering, I’m passionate about travelling, bikes, cars, and understanding how ambitious ideas become real systems. My long-term ambition is to serve the nation as an IAS officer, combining technical thinking with public impact.",
    ],
  },
  navigation: [
    { label: "Overview", href: "#overview", sectionId: "overview" },
    { label: "Work", href: "#work", sectionId: "work" },
    {
      label: "Engineering",
      href: "#engineering",
      sectionId: "engineering",
    },
    { label: "Journey", href: "#journey", sectionId: "journey" },
    { label: "About", href: "#about", sectionId: "about" },
    { label: "Contact", href: "#contact", sectionId: "contact" },
  ] satisfies NavigationItem[],
  socials: [
    { label: "GitHub", href: "" },
    { label: "LinkedIn", href: "" },
    { label: "LeetCode", href: "" },
    { label: "X", href: "" },
  ] satisfies SocialLink[],
  contact: {
    email: "",
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
      slug: "developer-workflow-console",
      title: "Developer Workflow Console",
      purpose: "A focused command centre for repeatable engineering workflows.",
      category: "Developer platform",
      status: "Concept",
      role: "Product and engineering",
      stack: ["Next.js", "TypeScript", "Node.js"],
      challenge:
        "Bring scattered developer tasks into one clear, dependable interface.",
      outcome:
        "A configurable concept ready to be replaced with a verified case study.",
      year: "Concept",
      liveUrl: "",
      githubUrl: "",
      accent: "ice",
    },
    {
      slug: "automation-toolkit",
      title: "Useful Automation Toolkit",
      purpose:
        "Small automations that remove repetitive work without adding noise.",
      category: "Automation tool",
      status: "Concept",
      role: "Engineering",
      stack: ["TypeScript", "APIs", "Task queues"],
      challenge:
        "Design automation that remains understandable, observable, and safe.",
      outcome:
        "Placeholder project architecture for a future documented build.",
      year: "Concept",
      liveUrl: "",
      githubUrl: "",
      accent: "graphite",
    },
    {
      slug: "pen-plotter-lab",
      title: "Pen Plotter Lab",
      purpose: "Turning digital paths into precise physical drawings.",
      category: "Hardware experiment",
      status: "In development",
      role: "Hardware and software exploration",
      stack: ["Microcontroller", "Motion control", "Vector paths"],
      challenge:
        "Coordinate movement, calibration, and drawing quality across hardware.",
      outcome:
        "An active experiment; documentation and results will be added as verified.",
      year: "In development",
      liveUrl: "",
      githubUrl: "",
      accent: "cobalt",
    },
    {
      slug: "backlit-keyboard-integration",
      title: "Backlit Keyboard Integration",
      purpose:
        "Exploring a clean bridge between a repurposed keyboard and modern systems.",
      category: "Hardware experiment",
      status: "Concept",
      role: "Systems exploration",
      stack: ["Embedded input", "USB", "Firmware"],
      challenge:
        "Understand the keyboard matrix, backlight control, and host communication.",
      outcome: "Concept scope only; no production claim is made.",
      year: "Concept",
      liveUrl: "",
      githubUrl: "",
      accent: "silver",
    },
    {
      slug: "display-volume-dial",
      title: "Display Volume Dial",
      purpose: "A tactile desktop control with useful visual feedback.",
      category: "Hardware experiment",
      status: "In development",
      role: "Interaction and prototyping",
      stack: ["Rotary encoder", "Display", "Microcontroller"],
      challenge:
        "Make physical input feel responsive while keeping the display state accurate.",
      outcome:
        "Prototype direction in progress; media and source links remain optional.",
      year: "In development",
      liveUrl: "",
      githubUrl: "",
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
      title: "Hardware Experiments",
      description:
        "Exploring the useful edge where software meets physical controls, sensors, and machines.",
      technologies: ["Microcontrollers", "Firmware", "Prototyping"],
      icon: "cpu",
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
        "Deepening product engineering, automation, interfaces, and hands-on technical work.",
      category: "Learning",
      link: "",
    },
  ] satisfies JourneyItem[],
  experiments: [
    {
      title: "Pen plotter",
      status: "In development",
      description:
        "A compact motion system that translates vector paths into physical line work.",
      stack: ["Motion control", "Microcontroller", "Vector tooling"],
      progress: "Mechanics and control path exploration",
      githubUrl: "",
      notes: "Add verified build notes, imagery, and calibration results here.",
      accent: "plotter",
    },
    {
      title: "Backlit keyboard integration",
      status: "Concept",
      description:
        "An investigation into repurposing a backlit keyboard through a custom hardware interface.",
      stack: ["Keyboard matrix", "USB", "Firmware"],
      progress: "Architecture research",
      githubUrl: "",
      notes: "Document electrical findings and compatibility once tested.",
      accent: "keyboard",
    },
    {
      title: "Volume-control dial",
      status: "In development",
      description:
        "A tactile volume controller pairing a rotary input with an information display.",
      stack: ["Rotary encoder", "Display", "Host controls"],
      progress: "Interaction prototype",
      githubUrl: "",
      notes:
        "Add enclosure, display, and integration details as the prototype matures.",
      accent: "dial",
    },
  ] satisfies Experiment[],
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
