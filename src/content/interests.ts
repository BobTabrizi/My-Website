import {
  ChessIcon,
  DuolingoIcon,
  PadresIcon,
  RuneLiteIcon,
  RunIcon,
  SatelliteIcon,
  SnowboardIcon,
  YamahaIcon,
} from '@/components/InterestIcons';

export type Interest = {
  name: string;
  Icon: (props: { className?: string }) => React.JSX.Element;
  /** Icon size override, e.g. so pixel art scales by a whole number. */
  iconClass?: string;
};

// More icons, like the OSRS UltimateIronmanIcon, are available in InterestIcons.tsx.
export const interests: Interest[] = [
  { name: 'San Diego Padres', Icon: PadresIcon },
  { name: 'Space', Icon: SatelliteIcon, iconClass: 'size-12' },
  { name: 'Yamaha Motorcycles', Icon: YamahaIcon },
  { name: 'Duolingo', Icon: DuolingoIcon },
  { name: 'Track & Field', Icon: RunIcon, iconClass: 'size-12' },
  { name: 'Chess', Icon: ChessIcon, iconClass: 'size-12' },
  { name: 'Snowboarding', Icon: SnowboardIcon, iconClass: 'size-12' },
  { name: 'Open Source', Icon: RuneLiteIcon, iconClass: 'size-12' },
];
