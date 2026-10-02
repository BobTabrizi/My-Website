import type { StaticImageData } from 'next/image';

import agility from '@/assets/images/agility.png';
import helloWorld from '@/assets/images/hello-world.png';

export type Project = {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  details: string[];
  stack: string[];
  stat?: { value: string; label: string };
  links: { label: string; href: string }[];
  image: StaticImageData;
  imageAlt: string;
};

export const projects: Project[] = [
  {
    slug: 'agility',
    name: 'Agility',
    kind: 'Real-time web app',
    summary: 'Shared rooms for agile teams: planning poker, polls, anonymous feedback, and fair ways to pick who goes next.',
    details: [
      'Anyone can open a room and share a link or QR code. Everyone sees the same activity live over Socket.IO, with no accounts needed.',
      'Room data lives behind a swappable storage layer (in memory or DynamoDB), with versioned writes so votes cast at the same moment never overwrite each other.',
      'Ships as one Node server behind Caddy on AWS EC2, with health checks, graceful restarts, rate limiting, and CI in both GitHub Actions and Jenkins.',
    ],
    stack: ['Next.js', 'TypeScript', 'Socket.IO', 'DynamoDB', 'AWS EC2', 'Docker', 'Vitest', 'GitHub Actions'],
    links: [
      { label: 'Live site', href: 'https://agilityplanner.cc' },
      { label: 'GitHub', href: 'https://github.com/BobTabrizi/agility' },
    ],
    image: agility,
    imageAlt: 'Agility home page: a Start a room form next to a list of activities including Planning Poker, Poll, Wheel, and Plinko',
  },
  {
    slug: 'hello-world',
    name: 'Hello World',
    kind: 'Web app',
    summary: 'Explore the music of any country on Earth, no Spotify login required.',
    details: [
      'A custom REST API gathers and stores playlist data from Spotify endpoints so countries can be searched and browsed quickly.',
      'Every track plays through the YouTube Data API, so anyone can listen without signing in to Spotify.',
    ],
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'AWS S3'],
    links: [{ label: 'GitHub', href: 'https://github.com/BobTabrizi/Hello-World' }],
    image: helloWorld,
    imageAlt: 'Hello World home screen: a country search box over a night sky with the northern lights',
  },
];
