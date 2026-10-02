export type Role = {
  company: string;
  title: string;
  start: string;
  end: string;
  highlights: string[];
};

export const experience: Role[] = [
  {
    company: 'Booz Allen Hamilton',
    title: 'Senior Software Engineer',
    start: '2025',
    end: 'Now',
    highlights: [
      'Moved the front end build from Webpack 4 to Vite, cutting build times by about 30%.',
      'Built support tooling with Docker and AWS (EC2, S3, DynamoDB).',
      'Built a cross-VM end-to-end test suite with Robot Framework and Selenium.',
      'Scrum Master for a nine-engineer team.',
    ],
  },
  {
    company: 'G2 Software Systems',
    title: 'Full Stack Software Engineer',
    start: '2021',
    end: '2025',
    highlights: [
      'Led a team of 3–5 engineers across a React front end and Java Spring back end.',
      'Designed and built Spring REST endpoints for customizable data management.',
      'Led a full UI redesign with the client, from wireframes to production.',
      'Architected API mocking with Mock Service Worker for end-to-end UI testing.',
    ],
  },
  {
    company: 'UC San Diego IT Services',
    title: 'ITS Lead Technician',
    start: '2019',
    end: '2020',
    highlights: ['Built internal web tools for the IT department while finishing my degree.'],
  },
];
