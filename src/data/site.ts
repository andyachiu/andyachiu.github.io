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
    "I bring a seller’s perspective to building AI products. Before moving into product leadership at Google, I worked directly with small businesses and enterprise customers on growth strategy, digital advertising, and technical integrations. That experience shapes how I connect customer needs with products people can adopt and use.",
    "As an Applied AI Global Product Lead at Google, I build platforms and workflows for sales teams, bringing together product strategy, user research, go-to-market planning, and cross-functional delivery. My background spans enterprise account management, Google Ads, sales operations, and seller advocacy.",
    "I’m completing my Master of Information and Data Science at UC Berkeley. My technical work spans research data workflows, data science, and web development, with a focus on turning complex AI systems into dependable, human-centered products."
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
