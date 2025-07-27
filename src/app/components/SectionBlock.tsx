"use client";
import React, { useState } from "react";

interface SectionValue {
  id: string;
  title: string; // HTML string
  description: string; // HTML string (may contain <li> or <p>)
}

interface Props {
  title: string;
  sections: { values: SectionValue[] }[];
}

const SectionBlock: React.FC<Props> = ({ title, sections }) => {
  const [openIdx, setOpenIdx] = useState(0);

  if (!sections || !sections[0]?.values) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        {sections[0].values.map((item, idx) => (
          <div key={item.id} className="border-b last:border-b-0">
            <button
              className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 focus:outline-none"
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              aria-expanded={openIdx === idx}
            >
              <span
                dangerouslySetInnerHTML={{ __html: item.title }}
                className="text-base"
              />
              <span className="ml-2 text-gray-400">
                {openIdx === idx ? "▲" : "▼"}
              </span>
            </button>
            {openIdx === idx && (
              <div
                className="pb-4 pl-1 text-gray-800 text-sm"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionBlock;
