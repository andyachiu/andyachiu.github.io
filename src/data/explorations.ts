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
  'AI Workflow Tooling & Persistent Memory': {
    question: 'What should the next briefing remember?',
    note: 'Implemented workflow · fictional example',
    premise: 'A morning briefing flags a project review and the notes to prepare. By evening, what should carry forward—and what needs checking again?',
    states: [
      { label: 'Fresh context', title: 'Bring scattered signals into one decision.',
        explanation: 'The scheduled workflow gathers current calendar events, unread email, reminders, and weather before asking Claude to compose a briefing. The program owns the sequence of actions.',
        artifactLabel: 'Fictional morning inputs', artifact: ['Calendar: project review at 10 AM', 'Email: feedback requested before the review', 'Reminder: bring discussion notes'],
        takeaway: 'Design choice: give the model a bounded synthesis task with current source material.' },
      { label: 'Useful delivery', title: 'Make the result fit the moment.',
        explanation: 'The response becomes a message of up to 1,200 characters, with priority given to useful schedule details and actions. Only after sending succeeds does the workflow save the delivered text to memory.',
        artifactLabel: 'An illustrative focus', artifact: ['Prepare discussion notes before the 10 AM review.', 'Delivery succeeds → remember the final briefing', 'Delivery fails → do not record it as sent'],
        takeaway: 'Design choice: remember what reached the delivery step, rather than every draft the model produced.' },
      { label: 'Next briefing', title: 'Carry the context forward. Recheck the facts.',
        explanation: 'The next run receives the recipient’s three most recent briefings from the past seven days, plus explicitly saved presentation preferences. Current inputs must support any follow-up; a past mention cannot establish that a task is still open or completed.',
        artifactLabel: 'What persists—and what needs fresh evidence', artifact: ['Remember: the earlier preparation focus', 'Keep: a saved preference for short sentences', 'Recheck: whether a response or next step is still needed'],
        takeaway: 'Design choice: cap history at 14 briefings, prune old entries, and give the user controls to inspect or clear memory.' },
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
