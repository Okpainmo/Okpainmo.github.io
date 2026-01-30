import React from 'react';

function PostWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] md:mx-auto text-base text-zinc-800 dark:text-zinc-400 leading-relaxed">
      {children}
    </div>
  );
}

export default PostWrapper;
