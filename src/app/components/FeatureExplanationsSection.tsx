"use client";
import React from "react";

interface FeatureExplanationItem {
  id: string;
  title: string;
  checklist: string[];
  file_type: string;
  file_url: string;
  video_thumbnail?: string;
}

interface Props {
  title: string;
  features: FeatureExplanationItem[];
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

const FeatureExplanationsSection: React.FC<Props> = ({ title, features }) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold mb-3">{title}</h2>
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-6">
      {features.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row md:items-center md:justify-between border-b last:border-b-0 pb-6 last:pb-0 gap-4"
        >
          <div className="flex-1">
            <div className="font-semibold mb-2">{item.title}</div>
            <ul className="space-y-2">
              {item.checklist.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-gray-800">{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0 md:ml-6">
            <img
              src={item.file_url}
              alt={item.title}
              className="w-48 h-36 object-cover rounded-lg shadow"
            />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureExplanationsSection;
