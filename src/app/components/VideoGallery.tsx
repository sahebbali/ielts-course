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
          className="absolute left-0 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100 flex items-center justify-center"
          aria-label="Previous"
        >
          {/* Left arrow SVG */}
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.7" />
            <path
              d="M15 6l-6 6 6 6"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <Trailer
          videoId={videos[current].resource_value}
          thumbnailUrl={videos[current].thumbnail_url || DEFAULT_THUMBNAIL}
        />
        <button
          onClick={handleNext}
          className="absolute right-0 z-10 bg-white bg-opacity-70 rounded-full p-1 shadow hover:bg-opacity-100 flex items-center justify-center"
          aria-label="Next"
        >
          {/* Right arrow SVG */}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="12" fill="#fff" fillOpacity="0.7" />
            <path
              d="M9 6l6 6-6 6"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-1 mt-2 justify-center">
        {videos.map((video, idx) => (
          <img
            key={video.resource_value}
            src={video.thumbnail_url || DEFAULT_THUMBNAIL}
            alt={`Thumbnail ${idx + 1}`}
            className={`w-13 h-8 object-cover rounded cursor-pointer border-2 ${
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
