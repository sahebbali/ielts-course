"use client";
import React, { useState } from "react";
import Trailer from "./Trailer";

interface MediaItem {
  name: string;
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
}

interface Props {
  media: MediaItem[];
}

const DEFAULT_THUMBNAIL =
  "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png";

const VideoGallery: React.FC<Props> = ({ media }) => {
  const videos = media.filter((item) => item.resource_type === "video");
  const [current, setCurrent] = useState(0);

  if (videos.length === 0) return null;

  const handlePrev = () =>
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  const handleNext = () =>
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  const selectVideo = (idx: number) => setCurrent(idx);

  return (
    <div>
      <div className="relative flex justify-center items-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100"
        >
          &#8592;
        </button>
        <Trailer
          videoId={videos[current].resource_value}
          thumbnailUrl={videos[current].thumbnail_url || DEFAULT_THUMBNAIL}
        />
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white bg-opacity-70 rounded-full px-2 py-1 shadow hover:bg-opacity-100"
        >
          &#8594;
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {videos.map((video, idx) => (
          <img
            key={video.resource_value}
            src={video.thumbnail_url || DEFAULT_THUMBNAIL}
            alt={`Thumbnail ${idx + 1}`}
            className={`w-16 h-10 object-cover rounded cursor-pointer border-2 ${
              idx === current ? "border-green-500" : "border-transparent"
            }`}
            onClick={() => selectVideo(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;
