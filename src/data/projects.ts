export interface Project {
  title: string;
  displayTitle?: string;
  category: string;
  context?: string;
  contribution?: string;
  accessNote?: string;
  access?: "Private repository" | "Proprietary";
  workflow?: string[];
  interactiveWorkflow?: boolean;
  links?: { label: string; href: string }[];
  description: string;
  tags: string[];
  href: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Customer Intelligence & Recommendations",
    category: "APPLIED AI",
    context: "Google · AI work since 2025 · Launched products",
    access: "Proprietary",
    description: "AI-assisted products that turn customer interactions into structured measurement insights and help technical sellers evaluate suitable solutions. Combines customer context, eligibility rules, and expert-validated guidance with LLM-generated explanations.",
    contribution: "Product strategy, user research, roadmap, engineering prioritization, launch, and adoption.",
    workflow: ["Structure customer intelligence", "Evaluate solution fit", "Explain recommendations"],
    tags: ["Product Strategy", "LLMs", "Decision Support"],
    href: "",
    year: "2025 — Present",
  },
  {
    title: "Enterprise Implementation CRM",
    category: "INTERNAL TOOLS",
    context: "Google · Internal platform · In development",
    access: "Proprietary",
    description: "A specialized CRM in development that connects measurement insights and solution recommendations with enterprise project tracking, stakeholder coordination, and leadership reporting. Builds on the newer AI products, distinct from the earlier core Google Ads CRM transformation.",
    contribution: "Leading product development and cross-functional coordination.",
    workflow: ["Connect insights & recommendations", "Coordinate implementation work", "Track projects & report progress"],
    tags: ["CRM", "Product Development", "Enterprise Workflows"],
    href: "",
    year: "In development",
  },
  {
    title: "Autonomous Agent Tooling & Workflows",
    displayTitle: "Autonomous agent tooling & workflows",
    category: "AI SYSTEMS",
    interactiveWorkflow: true,
    description: "Production agent harnesses connecting LLMs to Google Workspace and terminal tool execution with persistent cross-session memory.",
    tags: ["AI Agents", "LLMs", "Developer Tools"],
    href: "https://github.com/andyachiu/automation",
    year: "2025",
    featured: true,
  },
  {
    title: "Research Data Workflows",
    category: "BIOINFORMATICS",
    access: "Proprietary",
    workflow: ["Organize large genomic datasets", "Support repeatable data analysis", "Streamline bioinformatics workflows"],
    description: "A proprietary bioinformatics tool for organizing and analyzing large genomic datasets. Streamlines data processing and repeatable analysis to support research across complex biological data.",
    tags: ["Bioinformatics", "Genomic Data", "Large Datasets"],
    href: "https://github.com/andyachiu",
    year: "2025",
    featured: true,
  },
  {
    title: "HealthCharts: Longitudinal Biomarker Engine",
    displayTitle: "HealthCharts",
    access: "Private repository",
    category: "HEALTH DATA",
    workflow: ["Wearable telemetry", "Lab panels", "Trend analytics"],
    description: "Personal health data platform synthesizing wearable telemetry and lab panels into actionable visual trend analytics.",
    tags: ["Data Viz", "R", "Python"],
    href: "https://github.com/andyachiu",
    year: "2025",
    featured: true,
  },
  {
    title: "Global Happiness EDA & Predictive App",
    displayTitle: "Global Happiness",
    access: "Private repository",
    category: "DATA SCIENCE",
    workflow: ["Explore", "Model", "Publish"],
    description: "Full-lifecycle exploratory data analysis, Quarto publication deck, and interactive dashboard modeling well-being indicators.",
    tags: ["Data Science", "Quarto", "AWS"],
    href: "https://github.com/UC-Berkeley-I-School/200-FA2025-EDA-DreamTeam",
    links: [{ label: "Repository (access required)", href: "https://github.com/UC-Berkeley-I-School/200-FA2025-EDA-DreamTeam" }],
    year: "2025",
    featured: true,
  },
  {
    title: "Smart Streets, Faster Fixes",
    category: "CIVIC DATA SCIENCE",
    context: "UC Berkeley · MIDS 201 · Team research proposal",
    description: "Designed a proposed cluster-randomized study to evaluate whether vehicle-mounted LiDAR could improve road hazard detection, reduce manual inspections, and support more equitable street maintenance in Oakland. Combines operational measures with resident surveys on safety and fairness.",
    contribution: "My contribution: research questions, project coordination, holistic review and editing, and the presentation deck.",
    workflow: ["Establish baseline & randomize road clusters", "Compare LiDAR detection with OAK311", "Evaluate operational outcomes & resident perceptions"],
    tags: ["LiDAR", "Experimental Design", "Mixed Methods"],
    href: "https://docs.google.com/document/d/1y9-q9t8j92sYsWe7ZgtA-NajGn4wjkR0q2xbGrVEQGk/edit?tab=t.0",
    links: [
      { label: "Presentation", href: "https://docs.google.com/presentation/d/1t2L140QE3jTovETdPTDrzbHW3WGnZhCJZ4P9CW53q8k/edit" },
      { label: "Research proposal", href: "https://docs.google.com/document/d/1y9-q9t8j92sYsWe7ZgtA-NajGn4wjkR0q2xbGrVEQGk/edit?tab=t.0" },
    ],
    accessNote: "Presentation requires UC Berkeley access.",
    year: "2025",
  },
  {
    title: "Packing Assistant",
    access: "Private repository",
    category: "PERSONAL AUTOMATION",
    context: "Personal project · Adaptive travel checklists",
    description: "A reusable packing system that turns trip duration, destination needs, and modular templates into personalized checklists. Scales item quantities, preserves packing progress, and uses AI-assisted post-trip reflections to improve future lists.",
    workflow: ["Combine trip details & reusable templates", "Generate a tailored packing checklist", "Refine future lists with post-trip feedback"],
    tags: ["Python", "YAML", "LLMs"],
    href: "https://github.com/andyachiu/packing-assistant",
    year: "2026",
  },
];
