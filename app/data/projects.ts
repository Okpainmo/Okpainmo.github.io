import { HiOutlineArrowsExpand, HiOutlineSupport } from 'react-icons/hi';
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
  HiOutlineUserGroup,
  HiCubeTransparent
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
  projectLink?: string;
  icon: any;
}

export const opensourceProjects: Project[] = [
  {
    id: 'os-1',
    title: 'Rusty Mesh',
    description:
      'A fast in-memory orchestration layer for microservice/distributed systems. It provides a focused HTTP control plane for service registration, heartbeat-based liveness, semantic version matching, health checks, and sorted round-robin load balancing across compatible instances.',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'Microservices',
      'Docker',
      'More...'
    ],
    contributions: [
      'Creator',
      'Opensource Maintainer',
      'Systems Design',
      'Platform Engineering',
      'Backend Development'
    ],
    tags: [
      'open-source',
      'backend-development',
      'distributed-systems',
      'platform-engineering',
      'rust',
      'axum',
      'containerization',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/rusty-mesh',
    icon: HiOutlineSquare3Stack3D
  },
  {
    id: 'os-2',
    title: 'Detrudr',
    description:
      'An HTTP traffic-anomaly detection and DDOS-prevention engine built with Rust. It is a host-level security daemon that sits beside nginx-fronted services, tails nginx JSON access logs in real time, learns rolling request baselines, detects suspicious spikes...',
    skills: ['Rust', 'SSR', 'TailwindCSS', 'Docker', 'More...'],
    contributions: [
      'Creator',
      'Opensource Maintainer',
      'Systems Engineering',
      'Cloud/DevSecOps'
    ],
    tags: [
      'open-source',
      'rust',
      'systems-engineering',
      'dev-sec-ops',
      'server-side-rendering',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/detrudr',
    icon: HiOutlineCube
  },
  {
    id: 'os-3',
    title: 'Lola DAO',
    description:
      'A DAO-as-a-service(DaaS) smart-contract project built for managing/controlling custom ERC20 token supplies, among other internal DAO functions.',
    skills: ['Solidity', 'TypeScript', 'Hardhat', 'More...'],
    contributions: [
      'Creator',
      'Opensource Maintainer',
      'Smart-contract Engineering',
      'Blockchain Development'
    ],
    tags: [
      'open-source',
      'solidity',
      'typescript',
      'hardhat',
      'EVM',
      'smart-contract-engineering',
      'blockchain-development',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/lola-dao',
    icon: HiCubeTransparent
  },
  {
    id: 'os-4',
    title: 'Rusty Auth',
    description:
      'A ready-to-integrate Rust auth service built for microservice systems, with JWT auth, secure cookies, session tracking, RBAC, and audit-ready activity logs, and more.',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'Microservices',
      'Docker',
      'More...'
    ],
    contributions: [
      'Creator',
      'Opensource Maintainer',
      'Systems Design',
      'Backend Development'
    ],
    tags: [
      'open-source',
      'auth',
      'backend-development',
      'distributed-systems',
      'RBAC',
      'rust',
      'axum',
      'containerization',
      '...'
    ],
    githubLink: 'https://github.com/Okpainmo/rusty-auth',
    icon: HiOutlineShieldCheck
  }
];

export const closedSourceProjects: Project[] = [
  {
    id: 'cp-1',
    title: 'King Of Pi Mall Blockchain E-Commerce Project',
    description:
      'An e-commerce platform with cryptocurrency payments powered by the Pi Network token.',
    storyLink:
      '/blog/categories/project-stories/how-we-built-the-king-of-pi-mall-blockchain-ecommerce-project',
    skills: [
      'Python | Django Ninja',
      'PostgreSQL',
      'AWS',
      'React | Next.js',
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
      'Full-stack Development',
      'UI/UX',
      'Client Management',
      'More...'
    ],
    tags: [
      'zed-labs',
      'closed-source',
      'blockchain',
      'e-commerce',
      'cryptocurrency',
      'pi-network',
      'full-stack',
      '...'
    ],
    // projectLink: 'https://kingofpimall.com',
    icon: HiOutlineShoppingCart
  },
  {
    id: 'cp-2',
    title: 'XOps Maestros',
    description:
      'A challenge-driven learning and career platform for Ops engineers(DevOps, Platform, SRE, DevSecOps, Cloud, MLOps, etcetera).',
    // githubLink: 'https://github.com/XopsMaestrosHQ',
    projectLink: 'https://xopsmaestros.xyz',
    skills: [
      'React | Next.js',
      'Microservices',
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'AWS',
      'More...'
    ],
    contributions: [
      'Co-founder',
      'Engineering Lead',
      'Systems Design',
      'Cloud/DevOps',
      'Full-stack Development',
      'More...'
    ],
    tags: [
      'in-progress',
      'closed-source',
      'full-stack',
      'microservices',
      'rust',
      '...'
    ],
    icon: HiOutlineArrowsExpand
  },
  {
    id: 'cp-3',
    title: 'Fit Call',
    description:
      'A wellness platform that connects users with dedicated personal trainers to help them achieve their fitness goals through live coaching, accountability, and personalized support.',
    projectLink: 'https://fitcall.me',
    skills: [
      'Rust',
      'Golang',
      'PostgreSQL',
      'AWS',
      'Terraform',
      'Prometheus',
      'Grafana',
      'More...'
    ],
    contributions: [
      'Cloud Engineering',
      'Platform Engineering',
      'Systems Engineering',
      'SRE',
      'More...'
    ],
    tags: [
      'closed-source',
      'rust',
      'golang',
      'devops-internship',
      'platform-engineering',
      'SRE',
      'systems-engineering',
      '...'
    ],
    icon: HiOutlineSupport
  },
  {
    id: 'cp-4',
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
      'closed-source',
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
    title: 'Rust Microservice Starter',
    description:
      'A starter template for building high-performance microservices with Rust.',
    // storyLink: '/templates/portfolio-kit',
    skills: [
      'Rust | Axum | Tokio',
      'PostgreSQL | SQLX',
      'Microservices',
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
