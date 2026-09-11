export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    period: "2020 — Present",
    role: "Senior Consultant / Technical Product Lead",
    company: "Google",
    description: "Building core technology platforms and custom automation tooling for Google Sales teams to drive enterprise scale. Recognized as go-to product expert and cross-functional technical leader.",
  },
  {
    period: "2024 — Present",
    role: "M.S. in Information and Data Science (MIDS)",
    company: "UC Berkeley School of Information",
    description: "Graduate studies focused on AI Product Management, applied machine learning, statistical modeling, and data ethics.",
  },
  {
    period: "Earlier",
    role: "Senior Business Analyst & Solutions Consultant",
    company: "Enterprise Commerce & Systems",
    description: "Led enterprise architecture and platform delivery across digital commerce systems. Certified in SAP Hybris and MIT Supply Chain Analytics.",
  },
];
