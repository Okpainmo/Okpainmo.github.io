import React from 'react';

const YouTubeEmbed = ({ videoId }: { videoId: string }) => {
  return (
    <div className="video-responsive w-full">
      <iframe
        width="100%"
        height="350"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        // frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
