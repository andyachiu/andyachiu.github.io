export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export const siteConfig = {
  name: "Andy Chiu",
  title: "AI Product Manager",
  location: "San Francisco Bay Area",
  headline: "AI Product Manager building at the intersection of agentic workflows, complex systems, and user craft.",
  bio: [
    "I focus on taking AI products from research prototypes to dependable production software. My background bridges computational workflows, data science, and intuitive interface design.",
    "Currently exploring autonomous coding agents, human-in-the-loop evals, and developer experience."
  ],
  status: {
    available: true,
    text: "Building & exploring 0 → 1 AI products",
  },
  links: [
    { label: "GitHub", href: "https://github.com/andyachiu", handle: "@andyachiu" },
    { label: "LinkedIn", href: "https://linkedin.com/in/andyachiu", handle: "andyachiu" },
    { label: "Email", href: "mailto:hello@andychiu.com" },
    { label: "Resume", href: "/resume.pdf" },
  ] as SocialLink[],
};
