'use client';
import React from 'react';

interface Props {
  title: string;
  description: string;
}

const TitleAndDescription: React.FC<Props> = ({ title, description }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{title}</h1>
      <div
        className="prose max-w-none mb-6"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
};

export default TitleAndDescription;