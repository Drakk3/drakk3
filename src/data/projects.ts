export type Status = 'Deployed' | 'In Development' | 'Contributor';

export const projects: {
  name: string;
  description: string;
  status: Status;
  tags: string[];
  gradient: string;
  url: string;
}[] = [
  {
    name: 'DevFlow',
    description: 'A full-stack project management tool built for developer teams — with kanban boards, sprint planning, and GitHub integration.',
    status: 'Deployed',
    tags: ['Next.js', 'PostgreSQL', 'TypeScript'],
    gradient: 'linear-gradient(135deg,#1a0035 0%,#0d001a 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'Pocket Finance',
    description: 'Cross-platform mobile app for personal budget tracking with AI-powered spending insights and real-time bank sync.',
    status: 'In Development',
    tags: ['React Native', 'Node.js', 'MongoDB'],
    gradient: 'linear-gradient(135deg,#001a0d 0%,#001a00 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'OpenLog',
    description: 'Lightweight open-source logging service with structured logs, query language, and real-time dashboard for self-hosted deployments.',
    status: 'Deployed',
    tags: ['Python', 'Docker', 'GraphQL'],
    gradient: 'linear-gradient(135deg,#001528 0%,#000d1a 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
  {
    name: 'UIkit-Dark',
    description: 'An accessible dark-mode component library for React with 40+ components, Figma tokens, and TypeScript-first API.',
    status: 'Contributor',
    tags: ['React', 'Tailwind', 'Storybook'],
    gradient: 'linear-gradient(135deg,#1a0a00 0%,#120500 50%,#000 100%)',
    url: 'https://github.com/drakk3',
  },
];

export const badgeVariant: Record<Status, string> = {
  'Deployed':        'success',
  'In Development':  'warning',
  'Contributor':     'info',
};
