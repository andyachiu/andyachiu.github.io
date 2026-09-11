export interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  year: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Autonomous Agent Tooling",
    description: "Multi-agent workflows, tool execution guardrails, and persistent memory architectures for AI coding assistants.",
    tags: ["Agents", "LLMs", "Developer Tools"],
    href: "https://github.com/andyachiu",
    year: "2025",
    featured: true,
  },
  {
    title: "Kobu",
    description: "High-throughput 3' UTR sequence extraction and deduplication engine built for genomic pipeline reliability.",
    tags: ["Bioinformatics", "Python", "Data Science"],
    href: "https://github.com/andyachiu",
    year: "2024",
    featured: true,
  },
  {
    title: "HealthCharts",
    description: "Interactive longitudinal health metrics visualization engine synthesizing wearable telemetry into actionable trend insights.",
    tags: ["Visualization", "Product", "R / Python"],
    href: "https://github.com/andyachiu",
    year: "2024",
    featured: true,
  },
  {
    title: "Automation Briefing Engine",
    description: "Context-aware daily briefing agent synthesizing Google Workspace events, triage queues, and action items.",
    tags: ["AI Automation", "APIs", "0 → 1"],
    href: "https://github.com/andyachiu",
    year: "2024",
    featured: true,
  },
];
