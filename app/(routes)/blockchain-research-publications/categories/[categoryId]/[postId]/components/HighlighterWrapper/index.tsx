'use client';

import { useState } from 'react';
import { IoIosCopy, IoIosCheckmark } from 'react-icons/io';
import SyntaxHighlighter from 'react-syntax-highlighter';

export const HighlighterWrapper = ({
  language,
  content
}: {
  language: string;
  content: string;
}) => {
  const [isContentCopied, setIsContentCopied] = useState(false);

  async function copyContent(content: string) {
    try {
      await navigator.clipboard.writeText(content);
      setIsContentCopied(true);
      setTimeout(() => {
        setIsContentCopied(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }

  return (
    <section className="highlighter-wrapper w-full mt-10 mb-8 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
      <div className="px-4 py-2.5 bg-zinc-50 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center">
        <div className="text-xs font-bold uppercase tracking-widest text-zinc-700 dark:text-zinc-300">
          {language || 'code'}
        </div>
        <button
          className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 hover:text-black dark:text-zinc-300 dark:hover:text-white transition-colors"
          onClick={() => copyContent(content)}
        >
          {isContentCopied ? (
            <>
              <IoIosCheckmark className="text-lg text-green-500" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <IoIosCopy className="text-sm" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-zinc-50 dark:bg-[#0d0d0d]">
        <SyntaxHighlighter
          language={language}
          showLineNumbers
          showInlineLineNumbers={true}
          customStyle={{
            padding: '1.5rem',
            margin: 0,
            background: 'transparent',
            fontSize: '0.875rem',
            lineHeight: '1.5'
          }}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};
