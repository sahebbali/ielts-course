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

const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-blue-500 flex-shrink-0"
    fill="none"
    stroke="currentColor"
    strokeWidth={3}
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const PointersSection: React.FC<Props> = ({ title, pointers }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {pointers.map((item) => (
          <div key={item.id} className="flex items-start gap-2">
            <CheckIcon />
            <span className="text-gray-800">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PointersSection;
