export interface SocialLink {
  label: string;
  href: string;
  handle?: string;
}

const resumeUrl = "https://docs.google.com/document/d/1dfpqjG9VjvsazAiMtI5rL_7BCwLo74T5B_mNx0-uv_M/edit?resourcekey=0-xEHKHx-bZ8JKhIhX-OD-rQ&tab=t.0";

export const siteConfig = {
  resumeUrl,
  name: "Andy Chiu",
  title: "Applied AI Global Product Lead",
  location: "San Francisco, CA",
  headline: "Applied AI Global Product Lead at Google and UC Berkeley MIDS candidate. Building internal AI-assisted products that turn customer intelligence into practical decisions.",
  bio: [
    "I bring a seller’s perspective to building AI products. Before moving into product leadership at Google, I worked directly with small businesses and enterprise customers on growth strategy, digital advertising, and technical integrations. That experience shapes how I connect customer needs with products people can adopt and use.",
    "I lead internal products in Google’s Global Business Applied AI organization. My work began with a multi-year transformation of the core Google Ads CRM: bringing workflows closer to real customer interactions, from initial design and engineering partnership through global rollout and adoption.",
    "Since 2025, my focus has expanded to AI-assisted measurement intelligence and solution recommendations. Those products are launched; I’m now developing a specialized CRM that connects their insights with enterprise implementation work. Across both chapters, I bring a seller’s perspective to making complex tools more useful.",
    "I’m completing my Master of Information and Data Science at UC Berkeley. My technical work spans research data workflows, data science, and web development, with a focus on turning complex AI systems into dependable, human-centered products."
  ],
  status: {
    available: true,
    text: "Building platforms @ Google · MIDS @ UC Berkeley",
  },
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andyachiu", handle: "andyachiu" },
    { label: "GitHub", href: "https://github.com/andyachiu", handle: "@andyachiu" },
    { label: "theandychiu+website@gmail.com", href: "mailto:theandychiu+website@gmail.com" },
    { label: "Résumé", href: resumeUrl },
  ] as SocialLink[],
};
