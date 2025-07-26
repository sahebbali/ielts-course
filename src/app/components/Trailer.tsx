'use client';
import React from 'react';
import YouTube from 'react-youtube';

interface Props {
  url: string;
}

const Trailer: React.FC<Props> = ({ url }) => {
  const videoId = url.split('v=')[1];
  return <YouTube videoId={videoId} className="w-full" />;
};

export default Trailer;