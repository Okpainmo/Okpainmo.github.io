import SyntaxHighlighter from 'react-syntax-highlighter';
import { HighlighterWrapper } from '../HighlighterWrapper';
import YoutubeEmbed from '../YoutubeEmbed';
import TwitterEmbed from '../TwitterEmbed';
import WrapperLink from '../WrapperLink';
import GitHubEmbed from '../GitHubEmbed';

export const presetComponents = {
  HighlighterWrapper,
  YoutubeEmbed,
  SyntaxHighlighter,
  TwitterEmbed,
  WrapperLink,
  GitHubEmbed,
  h1: (props: any) => (
    <h1
      className="capitalize font-bold text-2xl md:text-3xl poppins mt-12 mb-6 text-black dark:text-white"
      {...props}
    />
  ),
  h2: (props: any) => (
    <h2
      className="capitalize font-bold text-xl md:text-2xl poppins mt-10 mb-4 text-black dark:text-white"
      {...props}
    />
  ),
  h3: (props: any) => (
    <h3
      className="capitalize font-bold text-lg md:text-xl poppins mt-8 mb-3 text-black dark:text-white"
      {...props}
    />
  ),
  h4: (props: any) => (
    <h4
      className="capitalize font-bold text-base poppins mt-6 mb-2 text-black dark:text-white"
      {...props}
    />
  ),
  a: (props: any) => (
    <a
      className="text-black dark:text-white underline decoration-zinc-300 dark:decoration-zinc-700 underline-offset-4 hover:decoration-black dark:hover:decoration-white transition-colors"
      {...props}
    />
  ),
  ul: (props: any) => (
    <ul className="list-outside list-disc ml-6 my-6 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-outside list-decimal ml-6 my-6 space-y-2" {...props} />
  ),
  li: (props: any) => <li className="pl-2" {...props} />,
  em: (props: any) => (
    <em
      className="text-zinc-700 dark:text-zinc-500 text-sm italic"
      {...props}
    />
  ),
  img: (props: any) => (
    <span className="block my-4 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 cursor-pointer">
      <img className="w-full h-auto" {...props} />
    </span>
  ),
  p: (props: any) => (
    <p
      className="my-6 leading-relaxed text-zinc-800 dark:text-zinc-400"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="py-6 px-8 italic bg-zinc-50 dark:bg-zinc-900/50 border-l-4 border-black dark:border-white text-zinc-800 dark:text-zinc-300 my-10 rounded-r-2xl"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white font-mono text-sm"
      {...props}
    />
  )
};
