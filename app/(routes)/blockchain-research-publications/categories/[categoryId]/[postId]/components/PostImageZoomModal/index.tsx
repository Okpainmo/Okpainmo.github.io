'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { togglePostImageZoomModal } from '@/app/rtk-base/slices/postPageSlice';
import { useAppSelector, useAppDispatch } from '@/app/rtk-base/store';
import { HiOutlineXMark } from 'react-icons/hi2';

function PostImageZoomModal() {
  const { showPostImageZoomModal, zoomModalImage } = useAppSelector(
    (state) => state.postPage
  );

  const dispatch = useAppDispatch();

  return (
    <div
      className={`w-full min-h-screen bg-black/70 dark:bg-white/70 backdrop-blur-md fixed top-0 left-0 right-0 py-20 ${showPostImageZoomModal ? 'flex' : 'hidden'} 
        flex-col items-center justify-center z-70`}
    >
      <div
        onClick={() => dispatch(togglePostImageZoomModal(false))}
        className="close-modal-button w-[40px] h-[40px] rounded-full flex items-center justify-center border
      border-white text-white dark:border-black dark:text-black
      transition-colors mb-8 cursor-pointer"
      >
        <HiOutlineXMark className="text-[20px]" />
      </div>
      <img
        src={zoomModalImage?.imageUrl}
        alt={zoomModalImage?.imageAltText}
        // fill
        className="w-full sm:px-6 md:w-[80%] lg:w-[60%] xl:w-[50%] mx-auto mb-[100px]"
      />
    </div>
  );
}

export default PostImageZoomModal;
