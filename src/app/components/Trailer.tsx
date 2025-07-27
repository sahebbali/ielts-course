"use client";
import React, { useState } from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
  thumbnailUrl?: string;
}

const Trailer: React.FC<Props> = ({ videoId, thumbnailUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const opts = {
    width: "320",
    height: "180",
  };

  return (
    <div className="relative w-[320px] h-[180px]">
      {showPlayer ? (
        <YouTube videoId={videoId} opts={opts} />
      ) : (
        <div
          className="w-full h-full cursor-pointer"
          onClick={() => setShowPlayer(true)}
          style={{
            backgroundImage: `url(${thumbnailUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <circle cx="30" cy="30" r="30" fill="rgba(0,0,0,0.5)" />
              <polygon points="25,20 45,30 25,40" fill="#fff" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Trailer;
