export const site = {
  name: 'Bob Tabrizi',
  role: 'Full stack software engineer',
  location: 'San Diego, CA',
  email: 'bobak.tabrizi@gmail.com',
  resume: '/Bob_Tabrizi_Resume.pdf',
  github: 'https://github.com/BobTabrizi',
  linkedin: 'https://www.linkedin.com/in/bobtabrizi',
  source: 'https://github.com/BobTabrizi/My-Website',
  description:
    'Bob Tabrizi is a full stack software engineer in San Diego building React and TypeScript front ends, the Java and Node services behind them, and the tooling that helps teams ship.',
};

export const toolbox: { label: string; items: string[] }[] = [
  { label: 'Front end', items: ['React', 'TypeScript', 'Next.js', 'Redux', 'React Native', 'HTML & CSS'] },
  { label: 'Back end', items: ['Java Spring', 'Node.js', 'Express', 'REST APIs', 'PostgreSQL', 'MongoDB'] },
  { label: 'Testing', items: ['Vitest', 'Jest', 'React Testing Library', 'MSW', 'Selenium', 'Robot Framework'] },
  { label: 'Cloud & delivery', items: ['AWS', 'Docker', 'Jenkins', 'GitHub Actions', 'Vite', 'Webpack'] },
];
