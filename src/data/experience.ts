export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    period: "2024 — Present",
    role: "AI Product Manager",
    company: "Product & AI Systems",
    description: "Driving 0 → 1 development for agentic systems, model evaluation frameworks, and developer workflows.",
  },
  {
    period: "2022 — 2024",
    role: "Data Scientist & Computational Lead",
    company: "Bioinformatics & Genomics",
    description: "Designed high-throughput data processing pipelines, sequence analysis algorithms, and quantitative models in Python and R.",
  },
  {
    period: "2020 — 2022",
    role: "Product & Technical Strategy",
    company: "Data Systems",
    description: "Managed cross-functional technical roadmaps bridging engineering, data science, and user research.",
  },
];
