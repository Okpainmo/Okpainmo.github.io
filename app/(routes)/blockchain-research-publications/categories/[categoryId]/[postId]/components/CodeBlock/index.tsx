'use client';

import { useState, useEffect } from 'react';
import { IoIosCopy, IoIosCheckmark } from 'react-icons/io';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  oneDark,
  oneLight
} from 'react-syntax-highlighter/dist/esm/styles/prism';

export const CodeBlock = ({
  language,
  content
}: {
  language: string;
  content: string;
}) => {
  const [isContentCopied, setIsContentCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDark();

    // Watch for class changes on documentElement
    const observer = new MutationObserver(checkDark);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

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
    <section className="group w-full my-12 overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-lg dark:shadow-2xl transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700">
      <div className="px-5 py-4 bg-zinc-50 dark:bg-[#1e293b] border-b border-zinc-200 dark:border-zinc-800 flex justify-between items-center relative">
        {/* macOS Style Dots */}
        <div className="flex gap-2 shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>

        {/* Language Label */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 poppins">
            {language || 'code'}
          </span>
        </div>

        {/* Copy Button */}
        <button
          className="flex items-center gap-2 pr-1 text-[10px] font-bold text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-all uppercase tracking-widest cursor-pointer"
          onClick={() => copyContent(content)}
        >
          {isContentCopied ? (
            <>
              <IoIosCheckmark className="text-base text-green-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <IoIosCopy className="text-xs" />
              <span>Copy Code</span>
            </>
          )}
        </button>
      </div>
      <div className="bg-white dark:bg-[#0f172a] overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={
            language?.toLowerCase() === 'bash'
              ? 'bash'
              : language?.toLowerCase()
          }
          showLineNumbers
          wrapLines={true}
          lineProps={{
            style: {
              display: 'block',
              width: '100%',
              backgroundColor: 'transparent'
            }
          }}
          lineNumberStyle={{
            minWidth: '3.2em',
            paddingRight: '1.5em',
            color: isDark ? '#475569' : '#94a3b8',
            textAlign: 'right',
            userSelect: 'none',
            fontSize: '11px',
            fontFamily: 'inherit',
            opacity: 0.6,
            backgroundColor: 'transparent'
          }}
          style={isDark ? oneDark : oneLight}
          customStyle={{
            padding: '2rem 1.5rem',
            margin: 0,
            background: 'transparent',
            backgroundColor: 'transparent',
            fontSize: '12px',
            letterSpacing: '-0.01em',
            lineHeight: '1.8',
            fontFamily: 'var(--font-jetbrains_mono), monospace'
          }}
          codeTagProps={{
            style: {
              backgroundColor: 'transparent'
            }
          }}
          // @ts-ignore
          pretagprops={{
            style: {
              backgroundColor: 'transparent'
            }
          }}
        >
          {content}
        </SyntaxHighlighter>
      </div>
    </section>
  );
};
