import React from 'react';
import Image from 'next/image';

function PostPageHeadSection({
  authorPhotoUrl,
  authorName,
  postDate,
  postTitle
}: {
  authorPhotoUrl: string;
  authorName: string;
  postDate: string;
  postTitle: string;
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
        <span className="text-[14px]">{postDate}</span>
        <h3 className="text-2xl sm:text-3xl poppins mb-5 capitalize w-full md:w-[65%] lg:w-[50%] xl:w-[40%] font-semibold mx-auto md:leading-[40px] text-black dark:text-zinc-50">
          {postTitle}
        </h3>
      </section>
    </>
  );
}

export default PostPageHeadSection;
