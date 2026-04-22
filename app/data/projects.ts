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
  HiOutlineFingerPrint,
  HiOutlineShoppingCart,
  HiOutlineBriefcase,
  HiOutlineUserGroup
} from 'react-icons/hi2';

export interface Project {
  id: string;
  title: string;
  description: string;
  storyLink?: string;
  skills: string[];
  contributions: string[];
  tags: string[];
  githubLink?: string;
  liveLink?: string;
  icon: any;
}

export const opensourceProjects: Project[] = [
  {
    id: 'os-1',
    title: 'Krabby',
    description:
      'A production-grade, open-source suite designed for engineering teams who need full control over their real-time communication infrastructure.',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'NextJs | ReactJs',
      'React Native',
      'Web Sockets',
      'WebRTC',
      'Redux Toolkit',
      'TailwindCSS',
      'More...'
    ],
    contributions: [
      'Creator',
      'Opensource Maintainer',
      'Systems Design',
      'Fullstack Development',
      'Mobile Development',
      'Cloud/DevOps'
    ],
    tags: [
      'pre-release',
      'full-stack',
      'open-source',
      'real-time-communication',
      'web sockets',
      'webrtc',
      'rust',
      '...'
    ],
    githubLink: 'https://github.com/KrabbyHQ',
    icon: HiOutlineCube
  },
  {
    id: 'os-2',
    title: 'Fidelity',
    description:
      'A multi-chain cryptocurrency wallet platform designed to provide complete infrastructure for issuing and managing blockchain wallets at scale.',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'Ethereum',
      'Solana',
      'NextJs | ReactJs',
      'React Native',
      'Web Sockets',
      'WebRTC',
      'Redux Toolkit',
      'TailwindCSS',
      'More...'
    ],
    contributions: [
      'Founder',
      'Opensource Maintainer',
      'Blockchain Development',
      'Systems Design',
      'Fullstack Development',
      'Mobile Development',
      'Cloud/DevOps'
    ],
    tags: [
      'pre-release',
      'blockchain',
      'ethereum',
      'solana',
      'full-stack',
      'open-source',
      'rust',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/fidelity',
    icon: HiOutlineSquare3Stack3D
  }
];

export const clientProjects: Project[] = [
  {
    id: 'cp-1',
    title: 'King Of Pi Mall Blockchain E-Commerce Project',
    description:
      'An e-commerce platform with cryptocurrency payments powered by the Pi Network token.',
    storyLink:
      '/blog/categories/project-stories/how-we-built-the-king-of-pi-mall-blockchain-ecommerce-project',
    skills: [
      'Python',
      'Django Ninja',
      'PostgreSQL',
      'AWS',
      'Next.js',
      'React',
      'Redux Toolkit',
      'SWR',
      'TailwindCSS',
      'Pi SDK',
      'More...'
    ],
    contributions: [
      'CTO',
      'Systems Design',
      'Cloud Administration',
      'Front-end Development',
      'Backend Engineering',
      'UI/UX',
      'Client Management'
    ],
    tags: [
      'zed-labs',
      'client-project',
      'blockchain',
      'e-commerce',
      'cryptocurrency',
      'pi-network',
      'full-stack',
      '...'
    ],
    // liveLink: 'https://kingofpimall.com',
    icon: HiOutlineShoppingCart
  },
  {
    id: 'cp-2',
    title: 'Private Practice',
    description:
      'A next-generation freelance platform focused on trust and seamless client–professional collaboration.',
    storyLink: '/blog/categories/project-stories/building-private-practice',
    skills: [
      'React',
      'Next.js',
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'MongoDB | Mongoose',
      'Node.js | Express.js',
      'AWS',
      'Paystack',
      'Redux-Toolkit',
      'TailwindCSS',
      'More...'
    ],
    contributions: [
      'CTO',
      'Systems Design',
      'Cloud Administration',
      'Front-end Development',
      'Backend Engineering',
      'UI/UX',
      'Client Management'
    ],
    tags: [
      'zed-labs',
      'in-progress',
      'client-project',
      'full-stack',
      'microservices',
      'saas',
      'rust',
      '...'
    ],
    icon: HiOutlineBriefcase
  }
];

export const templateProjects: Project[] = [
  {
    id: 'tp-1',
    title: 'Rust Backend Starter',
    description:
      'A production-ready template for building high-performance backend services with Rust.',
    // storyLink: '/templates/portfolio-kit',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'Axum Test',
      'Bacon',
      'Json Web Token',
      'Argon2',
      'Docker',
      'More...'
    ],
    contributions: ['Creator', 'Backend Development'],
    tags: [
      'backend-development',
      'architecture',
      'template',
      'rust',
      'axum',
      'tokio',
      'postgres',
      'sqlx',
      'bacon',
      'docker',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/rust-backend-starter',
    icon: HiOutlinePresentationChartLine
  },
  {
    id: 'tp-4',
    title: 'Hardhat(Ignition) Project Helper',
    description:
      'A helper template for building and deploying Solidity smart contracts using the Hardhat(Ignition) framework.',
    // storyLink: '/templates/docs-studio',
    skills: ['Hardhat(Ignition)', 'Solidity', 'TypeScript', 'EVM', 'More...'],
    contributions: ['Creator', 'Smart-Contract Development', 'EVM'],
    tags: [
      'blockchain',
      'template',
      'smart-contracts',
      'hardhat',
      'ignition',
      'solidity',
      'typescript',
      'evm',
      '...'
    ],
    githubLink:
      'https://github.com/Okpainmo/hardhat-project-helper__hardhat-ignition',
    icon: HiOutlinePresentationChartLine
  },
  {
    id: 'tp-2',
    title: 'Multi DB NodeJs/ExpressJs Backend Starter',
    description:
      'A fully typed Node/Express backend starter with web sockets and multiple database support.',
    // storyLink: '/templates/saas-boilerplate',
    skills: [
      'Node.js',
      'Express.js',
      'TypeScript',
      'Docker',
      'Zod',
      'Web Sockets',
      'MongoDB',
      'PostgreSQL',
      'NodeMailer',
      'Axios',
      'More...'
    ],
    contributions: ['Creator', 'Backend Development'],
    tags: [
      'backend-development',
      'architecture',
      'template',
      'nodejs',
      'expressjs',
      'typescript',
      'web-sockets',
      'mongodb',
      'postgresql',
      'docker',
      '...'
    ],
    githubLink:
      'https://github.com/Okpainmo/ws__multi-db-nodejs-express-with-typescript-and-zod-template',
    icon: HiOutlinePresentationChartLine
  },
  {
    id: 'tp-3',
    title: 'Fast Django Backend Template',
    description:
      'A modular and highly flexible Django(Django Ninja) template for building backend services with Python.',
    // storyLink: '/templates/solana-scaffold',
    skills: [
      'Python',
      'Django',
      'Django Ninja',
      'PostgreSQL',
      'Docker',
      'Boto3',
      'Black',
      'Uvicorn',
      'Pylint',
      'More...'
    ],
    contributions: ['Creator', 'Back-end Development'],
    tags: [
      'architecture',
      'template',
      'django',
      'django-ninja',
      'postgres',
      'docker',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/fast-django-backend-template',
    icon: HiOutlinePresentationChartLine
  }
];
