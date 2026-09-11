export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    period: "2022 — Present",
    role: "Applied AI Global Product Lead",
    company: "Google",
    description: "Leading product development for global sales platforms and AI-enabled workflows. Combining seller experience with user research, product validation, go-to-market strategy, and cross-functional delivery to support adoption across sales teams.",
  },
  {
    period: "2024 — Present",
    role: "M.S. in Information and Data Science (MIDS)",
    company: "UC Berkeley School of Information",
    description: "Graduate studies focused on AI Product Management, applied machine learning, statistical modeling, and data ethics.",
  },
  {
    period: "2020 — 2022",
    role: "Senior Account Manager · Apps",
    company: "Google · Large Customer Solutions",
    description: "Managed a major enterprise customer relationship across Google Ads. Partnered with marketing and innovation teams on growth strategy, new-product testing, media planning, and custom technical integrations. Brought customer feedback into product teams and led sales operations improvements.",
  },
  {
    period: "2019 — 2020",
    role: "Account Strategist",
    company: "Google · Customer Solutions",
    description: "Advised small and medium-sized businesses on Google Ads, digital strategy, and web and mobile performance. Supported sellers with YouTube and app campaign expertise, mentored new teammates, and contributed frontline feedback to sales tool development.",
  },
  {
    period: "Earlier",
    role: "Senior Business Analyst & Solutions Consultant",
    company: "Enterprise Commerce & Systems",
    description: "Led enterprise architecture and platform delivery across digital commerce systems. Certified in SAP Hybris and MIT Supply Chain Analytics.",
  },
];
