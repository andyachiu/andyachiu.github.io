export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

export const siteConfig = {
  name: "Andy Chiu",
  title: "AI Product Manager",
  location: "San Francisco, CA",
  headline: "Product Manager at Google & UC Berkeley MIDS candidate. Building core technology platforms, agentic workflows, and high-craft data systems.",
  bio: [
    "At Google, I focus on building core technology platforms and internal tooling that scale enterprise operations. Currently completing my Master of Information and Data Science (MIDS) at UC Berkeley School of Information with a focus on AI Product Management.",
    "My technical foundation bridges computational biology, data science, and modern web development. I care deeply about taking complex AI systems from research prototype to dependable, human-centered products."
  ],
  status: {
    available: true,
    text: "Building platforms @ Google · MIDS @ UC Berkeley",
  },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andyachiu", handle: "andyachiu" },
    { label: "GitHub", href: "https://github.com/andyachiu", handle: "@andyachiu" },
    { label: "Email", href: "mailto:andychiu@ischool.berkeley.edu" },
    { label: "Resume", href: "/resume.pdf" },
  ] as SocialLink[],
};
