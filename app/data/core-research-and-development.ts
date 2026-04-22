import { HiNewspaper, HiCpuChip, HiAcademicCap } from 'react-icons/hi2';

export const portfolioSegments = [
  {
    title: 'BlockCanvas - The Blockchain Systems Design Newsletter',
    description:
      'A newsletter that breaks down blockchain and decentralized systems from an engineering and architectural perspective — focusing on design decisions, trade-offs, and real-world implications, not hype cycles.',
    banner: '/_/block_canvas_wide_banner.png',
    link: 'https://blockcanvas.substack.com/',
    icon: HiNewspaper,
    isExternal: true
  },
  {
    title: 'Designing Decentralized Systems',
    description:
      'A systems-design reference for understanding, architecting, and evaluating blockchain systems/protocols.',
    banner: '/_/designing_decentralized_systems_banner.svg',
    link: 'https://github.com/Okpainmo/designing-decentralized-systems',
    icon: HiCpuChip,
    isExternal: true
  },
  {
    title: 'My Blockchain Research Publications',
    description:
      'Exploring the depths of decentralized infrastructure, consensus algorithms, and system security through academic and technical publications.',
    banner: '/_/okpainmo__the-logo.png',
    link: '/blockchain-research-publications',
    icon: HiAcademicCap,
    isExternal: false
  }
];
