export interface Exploration {
  question: string;
  note: string;
  premise: string;
  states: { label: string; title: string; explanation: string; artifactLabel: string; artifact: string[]; takeaway: string }[];
}

// Explanations derive from the existing public portfolio summary. Examples are conceptual,
// not screenshots, product specifications, executed requests, or measured outcomes.
export const explorations: Record<string, Exploration> = {
  'Customer Intelligence & Recommendations': {
    question: 'Where does AI help—and where do rules matter?',
    note: 'Conceptual walkthrough',
    premise: 'Customer context, solution eligibility, and a useful explanation answer different questions. Explore the role of each.',
    states: [
      { label: 'Customer context', title: 'Start with the situation, not the recommendation.',
        explanation: 'Customer interactions become structured measurement insights. That context gives a recommendation something concrete to respond to.',
        artifactLabel: 'Question this layer answers', artifact: ['What is the customer trying to understand?', 'Which measurement needs emerge from the interaction?'],
        takeaway: 'Product lens: useful guidance begins with an understandable customer need.' },
      { label: 'Eligibility rules', title: 'A plausible suggestion still needs to fit.',
        explanation: 'Customer context helps establish relevance; eligibility rules address the applicable conditions. A solution can sound relevant without meeting those conditions.',
        artifactLabel: 'Two different questions', artifact: ['Relevance: could this address the customer’s need?', 'Eligibility: does it meet the conditions for this solution?'],
        takeaway: 'Product lens: a convincing explanation is not evidence of eligibility.' },
      { label: 'AI explanations', title: 'Make the reasoning usable.',
        explanation: 'LLM-generated explanations accompany expert-validated guidance, helping technical sellers understand recommendations in the context of the customer’s needs.',
        artifactLabel: 'What the explanation needs to connect', artifact: ['The customer’s measurement needs', 'The proposed solution and why it may fit', 'The conditions that matter to the decision'],
        takeaway: 'Product lens: the explanation should help someone evaluate the recommendation.' },
    ],
  },
  'Autonomous Agent Tooling & Workflows': {
    question: 'What happens after an agent receives a request?',
    note: 'Illustrative scenario · no tools are executed',
    premise: 'Example request: “Compare these two project notes and draft an agenda for my next review.” Follow what context, tools, and memory could contribute.',
    states: [
      { label: 'Understand', title: 'Establish the task and its boundaries.',
        explanation: 'A model needs the relevant material and a clear desired result. In this example, the request is to prepare a draft, not to send an invitation.',
        artifactLabel: 'Example working context', artifact: ['Inputs: two project notes', 'Output: a review agenda draft', 'Boundary: no message or calendar invitation requested'],
        takeaway: 'Why it matters: an explicit deliverable gives the agent a useful stopping point.' },
      { label: 'Use tools', title: 'Connect the request to information and action.',
        explanation: 'Google Workspace and terminal tools connect the model to task material. In this example, a possible tool step is retrieving the supplied notes, then using their differences to structure a draft.',
        artifactLabel: 'Illustrative agenda structure', artifact: ['1. Changes since the previous note', '2. Open questions to resolve', '3. Decisions for the review'],
        takeaway: 'Why it matters: tools let the agent work with task material beyond the conversation. This is a sample structure, not a generated result.' },
      { label: 'Carry forward', title: 'Keep continuity without assuming old context is current.',
        explanation: 'Persistent cross-session memory can help a later request start with less setup. In this example, the preferred agenda format is worth retaining; the project notes still need to be current.',
        artifactLabel: 'Example of useful continuity', artifact: ['Reusable preference: concise, decision-focused agendas', 'Next request still needs: current project notes', 'Previously unresolved questions need rechecking'],
        takeaway: 'Why it matters: memory can reduce repetition, while current evidence still matters.' },
    ],
  },
  'Smart Streets, Faster Fixes': {
    question: 'What would the study test?',
    note: 'Research proposal · no study results claimed',
    premise: 'The proposal asks whether vehicle-mounted LiDAR could improve hazard detection and street maintenance in Oakland. Compare the approaches, then explore what success would need to mean.',
    states: [
      { label: 'Compare approaches', title: 'Compare LiDAR detection with OAK311.',
        explanation: 'The proposed design establishes a baseline and randomizes road clusters. The comparison asks how a different detection approach might change maintenance work.',
        artifactLabel: 'Proposed comparison', artifact: ['Vehicle-mounted LiDAR: another way to detect road hazards', 'OAK311: the reporting comparison named in the proposal', 'Road clusters: the proposed unit of randomization'],
        takeaway: 'Research lens: detecting more hazards alone would not establish that maintenance improved.' },
      { label: 'Operational outcomes', title: 'Follow detection through to practical work.',
        explanation: 'The proposal considers better hazard detection and fewer manual inspections. These are questions to evaluate, not demonstrated benefits.',
        artifactLabel: 'Questions for the proposed evaluation', artifact: ['Does hazard detection improve?', 'Can the approach reduce manual inspections?', 'Does better information support street maintenance?'],
        takeaway: 'Research lens: distinguish a promising detection method from evidence of operational improvement.' },
      { label: 'Resident perspectives', title: 'Ask whether improvements are felt fairly.',
        explanation: 'The mixed-methods proposal includes resident surveys on safety and fairness alongside operational measures. That broadens the evaluation beyond what sensors can observe.',
        artifactLabel: 'A second perspective on success', artifact: ['Operational measures: what changes in the work?', 'Resident surveys: how are safety and fairness perceived?', 'Equity: does the approach support more equitable maintenance?'],
        takeaway: 'Research lens: operational performance and resident experience answer complementary questions.' },
    ],
  },
};
