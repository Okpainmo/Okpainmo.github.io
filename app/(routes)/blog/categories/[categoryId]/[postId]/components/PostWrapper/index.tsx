'use client';
import React, { useEffect } from 'react';
import {
  togglePostImageZoomModal,
  setZoomModalImage
} from '@/app/rtk-base/slices/postPageSlice';
import { useAppDispatch } from '@/app/rtk-base/store';

function PostWrapper({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  //  const { showPostImageZoomModal, zoomModalImage } = useAppSelector(
  //    (state) => state.postPage
  //  );

  useEffect(() => {
    const handler = (e: any) => {
      if (e.target.tagName === 'IMG') {
        const imageUrl = e.target.src;
        const imageAltText = e.target.alt;

        // console.log('image url', imageUrl);
        // console.log('image alt text', imageAltText);

        dispatch(togglePostImageZoomModal(true));
        dispatch(setZoomModalImage({ imageUrl, imageAltText }));
      }
    };

    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    wrapper.addEventListener('click', handler);

    return () => wrapper.removeEventListener('click', handler);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="post-wrapper w-full md:w-[65%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] md:mx-auto text-base text-zinc-800
       dark:text-zinc-300 leading-relaxed"
    >
      {children}
    </div>
  );
}

export default PostWrapper;
