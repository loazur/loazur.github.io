import { useState } from 'react';

export default function MediaPreview({ image, video, videoType = 'mp4', alt }) {
  const [isVideoError, setIsVideoError] = useState(false);

  if (video && !isVideoError) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        onError={() => setIsVideoError(true)}
        className="project-media-video"
      >
        <source src={video} type={`video/${videoType}`} />
        {image && <img src={image} alt={alt} />}
      </video>
    );
  }

  if (image) {
    return <img src={image} alt={alt} className="project-media-image" />;
  }

  return null;
}