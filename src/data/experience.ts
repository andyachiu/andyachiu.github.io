export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight?: string;
}

export const experiences: Experience[] = [
  {
    period: "September 2022 — Present",
    role: "Applied AI Global Product Lead",
    company: "Google · Global Business Applied AI",
    description: "Led an earlier multi-year core Google Ads CRM transformation from design and engineering delivery through global rollout. Since 2025, expanded into AI-assisted measurement and recommendations, now launched, with a specialized implementation CRM in development.",
  },
  {
    period: "In Progress",
    role: "M.S. in Information and Data Science (MIDS)",
    company: "UC Berkeley School of Information",
    description: "Graduate studies focused on AI Product Management, applied machine learning, statistical modeling, and data ethics.",
  },
  {
    period: "March 2020 — September 2022",
    role: "Senior Account Manager · Apps",
    company: "Google · Large Customer Solutions",
    description: "Managed a major enterprise customer relationship across Google Ads. Partnered with marketing and innovation teams on growth strategy, new-product testing, media planning, and custom technical integrations. Brought customer feedback into product teams and led sales operations improvements.",
  },
  {
    period: "January 2019 — March 2020",
    role: "Account Strategist",
    company: "Google · Customer Solutions",
    description: "Advised small and medium-sized businesses on Google Ads, digital strategy, and web and mobile performance. Supported sellers with YouTube and app campaign expertise, mentored new teammates, and contributed frontline feedback to sales tool development.",
  },
  {
    period: "June 2016 — December 2018",
    role: "Consultant",
    company: "Clarkston Consulting",
    description: "Worked across life sciences and digital commerce on supply-chain strategy, operational analytics, and business readiness for enterprise systems change.",
  },
];
