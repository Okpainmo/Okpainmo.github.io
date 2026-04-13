import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import { HiOutlineStar } from 'react-icons/hi2';
import { BiGitRepoForked } from 'react-icons/bi';

interface GitHubRepo {
  name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  forks_count: number;
  subscribers_count: number;
}

const getRepo = unstable_cache(
  async (owner: string, repo: string) => {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `token ${process.env.GITHUB_TOKEN}`
          })
        },
        next: { revalidate: 3600 * 24 }
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch repository');
    }

    return response.json() as Promise<GitHubRepo>;
  },
  ['github-repo'],
  { revalidate: 3600 * 24 }
);

const RepoCard = async ({ owner, repo }: { owner: string; repo: string }) => {
  // try {
  const repoData = await getRepo(owner, repo);

  return repoData ? (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={repoData.html_url}
      className="w-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 hover:border-black dark:hover:border-white transition-all group flex flex-col gap-6"
    >
      <div className="flex items-start gap-4">
        <img
          src={repoData.owner.avatar_url}
          alt={`${repoData.owner.login}'s avatar`}
          className="h-12 w-12 rounded-xl object-cover border border-zinc-100 dark:border-zinc-800"
        />
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-bold poppins truncate flex items-center gap-1 group-hover:underline">
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">
              {repoData.owner.login} /
            </span>
            <span className="text-black dark:text-white">{repoData.name}</span>
          </h2>
          <p className="text-sm text-zinc-800 dark:text-zinc-300 mt-2 line-clamp-2 leading-relaxed">
            {repoData.description}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6 pt-4 border-t border-zinc-50 dark:border-zinc-800/50">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          <BiGitRepoForked className="text-base" />
          <span>{repoData.forks_count} Forks</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300">
          <HiOutlineStar className="text-base" />
          <span>{repoData.stargazers_count} Stars</span>
        </div>
        {repoData.language && (
          <div className="ml-auto text-xs font-bold uppercase tracking-wider text-zinc-400">
            {repoData.language}
          </div>
        )}
      </div>
    </a>
  ) : (
    <div className="w-full rounded-2xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-6 text-red-600 dark:text-red-400 text-sm font-medium">
      Failed to load repository details for {owner}/{repo}
    </div>
  );
  //   } catch (error) {
  //     console.error(error);
  // return (
  //   <div className="w-full rounded-2xl border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-red-900/10 p-6 text-red-600 dark:text-red-400 text-sm font-medium">
  //     Failed to load repository details for {owner}/{repo}
  //   </div>
  // );
  //   }
};

const GitHubEmbed = ({ owner, repo }: { owner: string; repo: string }) => (
  <Suspense
    fallback={
      <div className="w-full animate-pulse rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6">
        <div className="flex items-start gap-4">
          <div className="h-12 w-12 rounded-xl bg-zinc-100 dark:bg-zinc-800" />
          <div className="flex-1">
            <div className="h-4 w-1/3 rounded bg-zinc-100 dark:bg-zinc-800" />
            <div className="mt-4 h-3 w-3/4 rounded bg-zinc-100 dark:bg-zinc-800" />
            <div className="mt-2 h-3 w-1/2 rounded bg-zinc-100 dark:bg-zinc-800" />
          </div>
        </div>
      </div>
    }
  >
    <div className="w-full my-8">
      <RepoCard owner={owner} repo={repo} />
    </div>
  </Suspense>
);

export default GitHubEmbed;
