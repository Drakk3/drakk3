export type Status = 'Deployed' | 'In Development' | 'Completed';
export type Category = 'Tech' | 'Operations';

export const projects: {
  name: string;
  description: string;
  status: Status;
  category: Category;
  tags: string[];
  gradient: string;
  url: string;
}[] = [
  {
    name: 'API Explorer',
    description: 'Web app for consuming and testing third-party REST APIs — built to practice real-world HTTP request handling, authentication flows, and dynamic data rendering.',
    status: 'Deployed',
    category: 'Tech',
    tags: ['JavaScript', 'REST API', 'Fetch'],
    gradient: 'linear-gradient(135deg,#0f0028 0%,#1a0035 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'drakk3 Assistant',
    description: "Intelligent assistant running on a Raspberry Pi — integrates OpenAI's API for natural language processing and Plaid API for financial data context. Built with JavaScript, designed to run as a local always-on device.",
    status: 'In Development',
    category: 'Tech',
    tags: ['JavaScript', 'OpenAI API', 'Plaid API', 'Raspberry Pi'],
    gradient: 'linear-gradient(135deg,#001a28 0%,#000d1a 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'Luxury Dept. Structuring & Training',
    description: 'Full structuring and onboarding program for the Luxury department — defined roles, built training materials, and established operational standards to ensure consistency and performance from day one.',
    status: 'Completed',
    category: 'Operations',
    tags: ['Team Training', 'SOP Design', 'Dept. Structuring'],
    gradient: 'linear-gradient(135deg,#1a1200 0%,#0d0900 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'SOP Optimization & Confluence Implementation',
    description: 'Reviewed and restructured Standard Operating Procedures across operations and corporate levels. Migrated and organized all documentation into Confluence, creating a centralized, searchable knowledge base aligned with company structure.',
    status: 'Completed',
    category: 'Operations',
    tags: ['SOP', 'Confluence', 'Process Optimization', 'Documentation'],
    gradient: 'linear-gradient(135deg,#001a14 0%,#000d0a 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'National & International Training Program',
    description: 'Building a cross-border training initiative to extend DC Las Vegas operational processes and standards to national and international warehouse locations — standardizing workflows, adapting SOPs for each region, and developing a scalable training infrastructure.',
    status: 'In Development',
    category: 'Operations',
    tags: ['Training', 'International Ops', 'DC Las Vegas', 'Warehouse Management'],
    gradient: 'linear-gradient(135deg,#001428 0%,#000a1a 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
];

export const badgeVariant: Record<Status, string> = {
  'Deployed':        'deployed',
  'In Development':  'warning',
  'Completed':       'completed',
};
