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

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
      open ? "rotate-180" : ""
    }`}
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
  </svg>
);

const SectionBlock: React.FC<Props> = ({ title, sections }) => {
  // Flatten all values from all sections
  const allValues = sections.flatMap((section) => section.values || []);
  // Use an array of open indices
  const [openIdxs, setOpenIdxs] = useState<number[]>([]);

  if (!allValues || allValues.length === 0) return null;

  const toggleIdx = (idx: number) => {
    setOpenIdxs((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  return (
    <section className="mb-8">
      <h2 className="text-[18px] font-bold mb-3">{title}</h2>
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        {allValues.map((item, idx) => (
          <div
            key={item.id}
            className="border-b border-dashed border-gray-300 last:border-b-0"
          >
            <button
              className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-900 focus:outline-none"
              onClick={() => toggleIdx(idx)}
              aria-expanded={openIdxs.includes(idx)}
            >
              <span
                dangerouslySetInnerHTML={{ __html: item.title }}
                className="text-base font-bold"
              />
              <span className="ml-2 flex items-center">
                <ChevronIcon open={openIdxs.includes(idx)} />
              </span>
            </button>
            {openIdxs.includes(idx) && (
              <div
                className="pb-4 pl-1 text-gray-800 text-[15px] p-4"
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
