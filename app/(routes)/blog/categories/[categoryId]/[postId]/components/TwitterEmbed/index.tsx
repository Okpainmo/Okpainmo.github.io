import { Suspense } from 'react';
import { unstable_cache } from 'next/cache';
import { TweetSkeleton, EmbeddedTweet, TweetNotFound } from 'react-tweet';
import { getTweet as _getTweet } from 'react-tweet/api';

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ['tweet'],
  { revalidate: 3600 * 24 }
);

const Tweet = async ({ id }: { id: string }) => {
  const tweet = await getTweet(id);

  if (!tweet) {
    return <TweetNotFound />;
  }

  return <EmbeddedTweet tweet={tweet} />;
};

const TwitterEmbed = ({ tweetId }: { tweetId: string }) => (
  <Suspense fallback={<TweetSkeleton />}>
    <div className="w-full flex justify-center">
      <Tweet id={tweetId} />
    </div>
  </Suspense>
);

export default TwitterEmbed;
