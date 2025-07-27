"use client";
import React from "react";

interface EngagementValue {
  background: {
    image: string;
    primary_color?: string;
    secondary_color?: string;
  };
  cta: {
    clicked_url: string;
    color?: string;
    text: string;
  };
  description: string;
  description_color?: string;
  id: string;
  thumbnail: string;
  title: string;
  title_color?: string;
  top_left_icon_img: string;
}

interface Props {
  value: EngagementValue;
}

const GroupJoinEngagement: React.FC<Props> = ({ value }) => (
  <div
    className="rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between"
    style={{
      background: `url(${value.background.image}) center/cover, linear-gradient(90deg, #0f172a 60%, #1e293b 100%)`,
      minHeight: 180,
    }}
  >
    <div className="flex-1 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-1">
        <img
          src={value.top_left_icon_img}
          alt="icon"
          className="w-8 h-8 rounded bg-white p-1"
        />
        <span className="text-lg font-bold text-orange-400">Free PDF</span>
      </div>
      <div
        className="text-base font-semibold mb-1"
        style={{ color: value.title_color || "#fff" }}
      >
        {value.title}
      </div>
      <div
        className="text-sm mb-3"
        style={{ color: value.description_color || "#ededed" }}
      >
        {value.description}
      </div>
      <a
        href={value.cta.clicked_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-lg font-semibold text-white"
        style={{
          background:
            value.cta.color ||
            "linear-gradient(90deg, #16a34a 0%, #22d3ee 100%)",
        }}
      >
        {value.cta.text}
      </a>
    </div>
    <div className="flex-shrink-0 mt-4 md:mt-0 md:ml-6">
      <img
        src={value.thumbnail}
        alt="PDF Preview"
        className="w-48 h-32 object-cover rounded-lg shadow"
      />
    </div>
  </div>
);

export default GroupJoinEngagement;