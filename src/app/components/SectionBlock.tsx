'use client';
import React from 'react';

interface Section {
  title: string;
  content: string;
}

interface Props {
  title: string;
  sections: Section[];
}

const SectionBlock: React.FC<Props> = ({ title, sections }) => {
  if (sections.length === 0) return null;
  return (
    <section className="mb-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      {sections.map((s, i) => (
        <div key={i} dangerouslySetInnerHTML={{ __html: s.content }} />
      ))}
    </section>
  );
};

export default SectionBlock;
