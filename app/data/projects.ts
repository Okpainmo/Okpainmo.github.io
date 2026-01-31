import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlineCube,
  HiOutlineCircleStack,
  HiOutlineSquare3Stack3D,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineCpuChip,
  HiOutlineDevicePhoneMobile,
  HiOutlineCommandLine,
  HiOutlinePresentationChartLine,
  HiOutlineFingerPrint
} from 'react-icons/hi2';

export interface Project {
  id: string;
  title: string;
  description: string;
  storyLink: string;
  skills: string[];
  role: string[];
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  icon: any;
}

export const opensourceProjects: Project[] = [
  {
    id: 'os-1',
    title: 'RustyCore Engine',
    description:
      'A high-performance, asynchronous networking core built with Rust for distributed systems.',
    storyLink: '/blog/rustycore-story',
    skills: ['Rust', 'Tokio', 'Serde'],
    role: [
      'CTO(Zed Labs)',
      'Back-end Developer',
      'Project Architect',
      'Front-end Developer',
      'Cloud/DevOps'
    ],
    tags: ['Networking', 'Backend', 'Open Source'],
    githubLink: 'https://github.com/okpainmo/rustycore',
    liveLink: 'https://crates.io/crates/rustycore',
    icon: HiOutlineCube
  },
  {
    id: 'os-2',
    title: 'Zk-Proof Visualizer',
    description:
      'A visual tool for understanding and debugging zero-knowledge proofs in real-time.',
    storyLink: '/blog/zk-visualizer-story',
    skills: ['TypeScript', 'Three.js', 'SnarkJS'],
    role: ['Front-end Developer', 'Cloud/DevOps'],
    tags: ['ZKP', 'Blockchain', 'Visualization'],
    githubLink: 'https://github.com/okpainmo/zk-visualizer',
    icon: HiOutlineSquare3Stack3D
  },
  {
    id: 'os-3',
    title: 'Solana Seed Vault',
    description:
      'A Rust library implementing the Seed Vault specification for secure key management.',
    storyLink: '/blog/solana-seed-vault',
    skills: ['Rust', 'Anchor', 'Cryptography'],
    role: ['Back-end Developer', 'Project Architect'],
    tags: ['Solana', 'Security', 'Wallet'],
    githubLink: 'https://github.com/okpainmo/seed-vault-rs',
    icon: HiOutlineFingerPrint
  },
  {
    id: 'os-4',
    title: 'EVM Gas Tracker',
    description:
      'CLI tool for real-time gas monitoring across 15+ EVM-compatible networks.',
    storyLink: '/blog/evm-gas-tracker',
    skills: ['Go', 'Web3.js', 'Redis'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    tags: ['Monitoring', 'DevOps', 'EVM'],
    githubLink: 'https://github.com/okpainmo/gas-tracker',
    icon: HiOutlineCommandLine
  }
];

export const clientProjects: Project[] = [
  {
    id: 'cp-1',
    title: 'Nexus DEX Interface',
    description:
      'A professional-grade trading interface for a decentralized exchange with deep liquidity monitoring.',
    storyLink: '/projects/nexus-dex',
    skills: ['Next.js', 'Redux Toolkit', 'Ethers.js'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    tags: ['DeFi', 'Web3', 'Frontend'],
    liveLink: 'https://nexus-dex.finance',
    icon: HiOutlineGlobeAlt
  },
  {
    id: 'cp-2',
    title: 'AuthGuard API',
    description:
      'Secure authentication and authorization middleware for enterprise-scale microservices.',
    storyLink: '/projects/authguard',
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    skills: ['Go', 'gRPC', 'PostgreSQL'],
    tags: ['Security', 'Infrastructure', 'API'],
    githubLink: 'https://github.com/client/authguard',
    icon: HiOutlineShieldCheck
  },
  {
    id: 'cp-3',
    title: 'Yield Optimizer Dashboard',
    description:
      'Analytics platform for monitoring liquidation risks and yield farming strategies across protocols.',
    storyLink: '/projects/yield-optimizer',
    skills: ['React', 'D3.js', 'GraphQL'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    tags: ['Analytics', 'DeFi', 'Dashboard'],
    liveLink: 'https://yield-opt.app',
    icon: HiOutlineChartBar
  },
  {
    id: 'cp-4',
    title: 'Cross-Chain SDK',
    description:
      'A developer SDK for seamless asset transfers and message passing between L1 and L2 networks.',
    storyLink: '/projects/bridge-sdk',
    skills: ['Node.js', 'Solidity', 'Hardhat'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    tags: ['Interoperability', 'Web3', 'SDK'],
    githubLink: 'https://github.com/client/bridge-sdk',
    icon: HiOutlineCpuChip
  }
];

export const templateProjects: Project[] = [
  {
    id: 'tp-1',
    title: 'Premium Portfolio Kit',
    description:
      'A production-ready portfolio template for senior engineers with built-in SEO and analytics.',
    storyLink: '/templates/portfolio-kit',
    skills: ['Tailwind CSS', 'Framer Motion', 'Next.js'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Cloud/DevOps',
      'Smart-contract Developer',
      'Smart-contract Integration Specialist'
    ],
    tags: ['Design System', 'Productivity', 'Starter'],
    githubLink: 'https://github.com/okpainmo/portfolio-kit',
    icon: HiOutlineCodeBracket
  },
  {
    id: 'tp-2',
    title: 'Modern SaaS Boilerplate',
    description:
      'Complete stack for building SaaS applications with Stripe, Auth.js, and multi-tenant support.',
    storyLink: '/templates/saas-boilerplate',
    skills: ['Next.js', 'Prisma', 'Stripe'],
    role: [
      'Back-end Developer',
      'Project Architect',
      'Smart-contract Integration Specialist'
    ],
    tags: ['SaaS', 'Full Stack', 'Boilerplate'],
    githubLink: 'https://github.com/okpainmo/saas-starter',
    icon: HiOutlineCircleStack
  },
  {
    id: 'tp-3',
    title: 'Solana DApp Scaffold',
    description:
      'The fastest way to spin up a Solana DApp with WalletAdapter and Anchor integration.',
    storyLink: '/templates/solana-scaffold',
    skills: ['React', 'Anchor', 'Web3.js'],
    role: ['Back-end Developer', 'Project Architect', 'Cloud/DevOps'],
    tags: ['Solana', 'Scaffold', 'DApp'],
    githubLink: 'https://github.com/okpainmo/solana-template',
    icon: HiOutlineDevicePhoneMobile
  },
  {
    id: 'tp-4',
    title: 'Docs Studio Template',
    description:
      'A beautiful documentation site template built with MDX and a focus on developer experience.',
    storyLink: '/templates/docs-studio',
    skills: ['MDX', 'Tailwind', 'Contentlayer'],
    role: ['Back-end Developer', 'Front-end Developer', 'Design Co-ordinator'],
    tags: ['Documentation', 'UI/UX', 'Template'],
    liveLink: 'https://docs-studio.demo',
    icon: HiOutlinePresentationChartLine
  }
];
