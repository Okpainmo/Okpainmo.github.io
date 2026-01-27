export interface Post {
  id: string;
  title: string;
  intro: string;
  category: string;
  tags: string[];
  slug: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Mastering Next.js 15: The Ultimate Guide for Senior Engineers',
    intro:
      'Exploring the new features in Next.js 15, from improved caching to the new compiler, and how they impact large-scale applications...',
    category: 'Next.js',
    tags: ['Frontend', 'JavaScript', 'Performance'],
    slug: 'mastering-nextjs-15'
  },
  {
    id: '2',
    title: 'Architecting Scalable DApps with Rust and Anchor',
    intro:
      'A deep dive into building production-ready Solana programs using Anchor, focusing on security, efficiency, and state management...',
    category: 'Solana',
    tags: ['Blockchain', 'Rust', 'Web3'],
    slug: 'scaling-dapps-rust-anchor'
  },
  {
    id: '3',
    title: 'The Future of Zero-Knowledge Proofs in Product Engineering',
    intro:
      'How ZKPs are moving from theoretical research to practical applications in privacy-preserving user interfaces and secure data verification...',
    category: 'Cryptography',
    tags: ['ZKP', 'Security', 'Engineering'],
    slug: 'zkp-product-engineering'
  }
];
