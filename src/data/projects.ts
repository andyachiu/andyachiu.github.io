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
    title: "Autonomous Agent Tooling & Workflows",
    description: "Production agent harnesses connecting LLMs to Google Workspace and terminal tool execution with persistent cross-session memory.",
    tags: ["AI Agents", "LLMs", "Developer Tools"],
    href: "https://github.com/andyachiu/automation",
    year: "2025",
    featured: true,
  },
  {
    title: "Kobu: Genomic Sequence Extraction",
    description: "Bioinformatics tool for extracting 3' UTR sequences from GenBank records, trimming poly-A tails, and clustering by sequence identity.",
    tags: ["Bioinformatics", "Python", "Biopython"],
    href: "https://github.com/andyachiu",
    year: "2025",
    featured: true,
  },
  {
    title: "HealthCharts: Longitudinal Biomarker Engine",
    description: "Personal health data platform synthesizing wearable telemetry and lab panels into actionable visual trend analytics.",
    tags: ["Data Viz", "R", "Python"],
    href: "https://github.com/andyachiu",
    year: "2025",
    featured: true,
  },
  {
    title: "Global Happiness EDA & Predictive App",
    description: "Full-lifecycle exploratory data analysis, Quarto publication deck, and interactive dashboard modeling well-being indicators.",
    tags: ["Data Science", "Quarto", "AWS"],
    href: "https://github.com/andyachiu/mids-R",
    year: "2025",
    featured: true,
  },
];
