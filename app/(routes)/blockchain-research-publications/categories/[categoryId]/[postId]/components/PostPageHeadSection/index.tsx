import React from 'react';
import Image from 'next/image';

function PostPageHeadSection({
  authorPhotoUrl,
  authorName,
  postDate,
  postLastUpdated,
  postTitle,
  postTags
}: {
  authorPhotoUrl: string;
  authorName: string;
  postDate: string;
  postLastUpdated?: string;
  postTitle: string;
  postTags?: string[];
}) {
  return (
    <>
      <section className="author-intro text-center flex flex-col gap-4 items-center mb-8">
        <div className="author-image-wrapper">
          <Image
            src={authorPhotoUrl}
            width={50}
            height={50}
            alt="author-image"
            className="w-[45px] h-[45px] rounded-full"
          />
        </div>
        <h3 className="text-[14px] uppercase poppins text-zinc-800 dark:text-zinc-200">
          {authorName}
        </h3>
      </section>
      <section className="page-heading text-center flex flex-col gap-4 text-zinc-700 dark:text-zinc-200">
        <div className="flex flex-col gap-1 items-center">
          <span className="text-[12px] text-zinc-500">
            Published: {postDate}
          </span>
          {postLastUpdated && (
            <span className="text-[12px] text-zinc-800 dark:text-zinc-300 font-bold">
              Last Updated: {postLastUpdated}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h3
            className="text-2xl sm:text-3xl poppins capitalize w-full md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] 
          font-semibold mx-auto md:leading-[40px] text-black dark:text-zinc-50"
          >
            {postTitle}
          </h3>
          <section>
            {postTags && postTags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center w-full md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] md:mx-auto">
                {postTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-[10px] uppercase font-medium tracking-wider bg-zinc-100 dark:bg-zinc-800 
                  text-zinc-600 dark:text-zinc-400 rounded-full border border-zinc-200 dark:border-zinc-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}

export default PostPageHeadSection;
