"use client";
import React from "react";

interface PointerItem {
  id: string;
  text: string;
  color?: string;
  icon?: string;
}

interface Props {
  title: string;
  pointers: PointerItem[];
}

const PointersSection: React.FC<Props> = ({ title, pointers }) => (
  <section className="mb-8 mt-8">
    <h2 className="text-[18px] font-[500] leading-[26px] text-[#101828] mb-3">
      {title}
    </h2>
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
        {pointers.map((item) => (
          <div key={item.id} className="flex items-start gap-2">
            <svg
              className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-[16px] font-[400] leading-[24px] text-[#344054]">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PointersSection;
