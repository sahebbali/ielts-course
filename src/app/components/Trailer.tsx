"use client";
import React from "react";
import YouTube from "react-youtube";

interface Props {
  url: string;
}

const Trailer: React.FC<Props> = ({ url }) => {
  const videoId = url.split("v=")[1];
  const opts = {
    width: "320", // Set your desired width
    height: "180", // Set your desired height
  };
  return <YouTube videoId={videoId} opts={opts} />;
};

export default Trailer;
