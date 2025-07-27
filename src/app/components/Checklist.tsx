"use client";
import React from "react";

interface ChecklistItem {
  id: string;
  text: string;
  icon: string;
  color: string;
  list_page_visibility: boolean;
}

interface Props {
  items: ChecklistItem[];
}

const Checklist: React.FC<Props> = ({ items }) => {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">এই কোর্সে যা থাকছে</h2>
      <ul className="space-y-2 pl-0">
        {items
          .filter((item) => item.list_page_visibility)
          .map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-2"
              style={{ color: item.color }}
            >
              <img src={item.icon} alt="" className="w-5 h-5" />
              <span>{item.text}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Checklist;
